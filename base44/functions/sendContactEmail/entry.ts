import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

// Sends email via Gmail API using OAuth2 or via SMTP relay that supports HTTPS.
// Since Deno sandbox blocks raw SMTP, we use the Gmail API with a service account
// or — simplest approach — encode a raw RFC 2822 message and POST to Gmail API.
// However this requires OAuth. Instead, we'll use smtp2go or a similar HTTPS-based relay.
// The cleanest no-extra-service approach: use Base44's SendEmail but with Reply-To in the body,
// OR use Resend/Mailgun via HTTPS API.
//
// Per user request: Gmail SMTP. We'll use nodemailer with a HTTPS-compatible SMTP approach.
// Deno blocks TCP port 587 directly. Workaround: use Gmail's HTTPS-based send via fetch.

Deno.serve(async (req) => {
  try {
    const { name, email, phone, message, sessionType, sessionDuration, coachName } = await req.json();

    const emailBody = `New Coaching Request Received

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CLIENT INFORMATION:
Name: ${name}
Email: ${email}
Phone: ${phone}

SESSION DETAILS:
Type: ${sessionType}
Duration: ${sessionDuration}
Preferred Coach: ${coachName}

MESSAGE:
${message || 'No additional message provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply directly to this client at: ${email}`;

    // Build RFC 2822 raw email message
    const rawMessage = [
      `From: "Tauber Solutions" <dunger@taubersolutions.com>`,
      `To: Office@taubersolutioms.com`,
      `Reply-To: ${name} <${email}>`,
      `Subject: New Coaching Request - ${name}`,
      `Content-Type: text/plain; charset=utf-8`,
      ``,
      emailBody
    ].join('\r\n');

    // Base64url encode the raw message (required by Gmail API)
    const encoded = btoa(unescape(encodeURIComponent(rawMessage)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    // Get access token using Gmail app password via OAuth2 password grant
    // Gmail API requires OAuth2 - app passwords work only with SMTP, not the REST API.
    // Since raw SMTP is blocked, we'll use a different HTTPS email service as fallback.
    // Best approach within Deno: use Resend API (HTTPS) with the Gmail app password logic documented.
    
    // Use Resend free tier API (no extra account needed beyond API key setup)
    // OR - use smtp.gmail.com via port 465 SSL which may work differently.
    
    // Actually, let's try port 465 (SSL) with nodemailer as Deno may allow it:
    const { default: nodemailer } = await import('npm:nodemailer@6.9.9');
    
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // SSL
      auth: {
        user: 'dunger@taubersolutions.com',
        pass: Deno.env.get('GMAIL_APP_PASSWORD'),
      },
    });

    await transporter.sendMail({
      from: '"Tauber Solutions" <dunger@taubersolutions.com>',
      to: 'Office@taubersolutioms.com',
      replyTo: `"${name}" <${email}>`,
      subject: `New Coaching Request - ${name}`,
      text: emailBody,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});