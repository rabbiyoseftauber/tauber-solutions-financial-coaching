import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import TrustIndicators from '../components/home/TrustIndicators';
import CTASection from '../components/home/CTASection';
import NewsletterSignup from '../components/interactive/NewsletterSignup';

export default function UK() {
  useEffect(() => {
    sessionStorage.setItem('isUKSession', 'true');
  }, []);

  return (
    <div className="pt-20">
      <HeroSection />
      <ServicesPreview />
      <TrustIndicators />
      <CTASection />
      <NewsletterSignup variant="section" />
    </div>
  );
}