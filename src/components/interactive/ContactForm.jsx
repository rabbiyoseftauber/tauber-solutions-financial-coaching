import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Send email notification
      await base44.integrations.Core.SendEmail({
        from_name: 'Tauber Solutions Contact Form',
        to: 'office@taubersolutions.com',
        subject: `New Contact Form Submission - ${formData.name}`,
        body: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">Reply to this email to respond directly to ${formData.email}</p>
        `
      });

      // Save to database for record keeping
      await base44.entities.EmailSubscriber.create({
        email: formData.email,
        name: formData.name,
        source: 'contact_form'
      });

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset after 8 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 8000);
    } catch (err) {
      console.error('Failed to send message:', err);
      setError('Failed to send message. Please try again or email us directly at office@taubersolutions.com');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-green-900 mb-2">Message Sent!</h3>
        <p className="text-green-700">
          Thank you for reaching out. We'll get back to you shortly at {formData.email || 'your email'}.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-[#1a2b4b] font-medium mb-2 block">
          Your Name *
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
          className="h-12"
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-[#1a2b4b] font-medium mb-2 block">
          Your Email *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
          className="h-12"
        />
      </div>

      <div>
        <Label htmlFor="message" className="text-[#1a2b4b] font-medium mb-2 block">
          Your Message *
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          required
          rows={6}
          className="resize-none"
        />
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{error}</p>
        </motion.div>
      )}

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#C2983B] hover:bg-[#b08e35] text-white h-12 text-base font-semibold"
      >
        {isLoading ? (
          <>
            <Mail className="w-5 h-5 mr-2 animate-pulse" />
            Sending...
          </>
        ) : (
          <>
            <Mail className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-sm text-gray-500 text-center">
        Or email us directly at{' '}
        <a href="mailto:office@taubersolutions.com" className="text-[#C2983B] hover:underline">
          office@taubersolutions.com
        </a>
      </p>
    </form>
  );
}