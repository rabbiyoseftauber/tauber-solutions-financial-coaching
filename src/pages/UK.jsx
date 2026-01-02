import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import TrustIndicators from '../components/home/TrustIndicators';
import CTASection from '../components/home/CTASection';
import NewsletterSignup from '../components/interactive/NewsletterSignup';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function UK() {
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