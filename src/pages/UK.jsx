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
    <div className="min-h-screen">
      <HeroSection />
      <ServicesPreview />
      <TrustIndicators />
      
      {/* UK-specific CTA for Coaches */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#1F2A44] mb-6">
            Based in the <span className="font-normal text-[#C2983B]">UK?</span>
          </h2>
          <p className="text-xl text-gray-600 font-light mb-8 max-w-2xl mx-auto">
            Meet Sender Eckstein, our UK-based coach ready to support your financial journey.
          </p>
          <Link to={createPageUrl('UKCoaches')}>
            <Button className="bg-[#C2983B] hover:bg-[#b08e35] text-white font-semibold px-10 py-6 text-lg rounded-none">
              Meet Your UK Coach
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
      
      <CTASection />
      <NewsletterSignup variant="section" />
    </div>
  );
}