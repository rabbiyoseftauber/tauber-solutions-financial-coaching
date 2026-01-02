import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustIndicators from '@/components/home/TrustIndicators';
import ServicesPreview from '@/components/home/ServicesPreview';
import CTASection from '@/components/home/CTASection';
import NewsletterSignup from '@/components/interactive/NewsletterSignup';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesPreview />
      <NewsletterSignup variant="section" />
      <CTASection />
    </div>
  );
}