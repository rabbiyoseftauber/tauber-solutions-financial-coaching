import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Mail } from 'lucide-react';

export default function TestEmail() {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendTestEmail = async () => {
    setIsSending(true);
    
    const emailBody = `
TEST - New Coaching Session Request

Session Details:
- Type: Initial Coaching Session
- Duration: 2 hours
- Coach: Any Available Coach

Client Information:
- Name: Test User
- Email: test@example.com
- Phone: +1 (555) 123-4567
- Message: This is a test submission from the Schedule form
    `.trim();

    try {
      await base44.integrations.Core.SendEmail({
        to: 'office@taubersolutions.com',
        subject: 'TEST - New Coaching Request - Test User',
        body: emailBody
      });
      setSent(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Error sending test email: ' + error.message);
    }
    
    setIsSending(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <Card className="max-w-md w-full">
        <CardContent className="p-8 text-center">
          {!sent ? (
            <>
              <Mail className="w-16 h-16 text-[#c5a059] mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-[#1a2b4b] mb-4">
                Send Test Email
              </h1>
              <p className="text-gray-600 mb-6">
                This will send a test scheduling submission to office@taubersolutions.com
              </p>
              <Button
                onClick={sendTestEmail}
                disabled={isSending}
                className="bg-[#c5a059] hover:bg-[#b08e35] text-white font-semibold px-8 py-6"
              >
                {isSending ? 'Sending...' : 'Send Test Email'}
              </Button>
            </>
          ) : (
            <>
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-[#1a2b4b] mb-4">
                Test Email Sent!
              </h1>
              <p className="text-gray-600 mb-6">
                Check office@taubersolutions.com for the test submission.
              </p>
              <Button
                onClick={() => setSent(false)}
                variant="outline"
                className="px-8 py-6"
              >
                Send Another
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}