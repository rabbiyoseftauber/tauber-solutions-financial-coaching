import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1F2A44] via-[#2a3654] to-[#1F2A44]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 border border-[#C2983B] rounded-full" />
        <div className="absolute bottom-20 right-20 w-72 h-72 border border-[#C2983B] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#C2983B] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>

            <span className="inline-block text-[#C2983B] text-sm tracking-[0.3em] uppercase mb-6 font-medium">
              Financial Coaching Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-8">

            Welcome to a World of{' '}
            <span className="text-[#C2983B] font-normal">Financial Success</span>{' '}
            and Stability
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl font-light">

            Achieve your goals with confidence — whether you're getting out of debt, 
            mastering your budget, growing your savings, or optimizing investments. 
            Our coaching gives you the clarity, tools, and momentum to take charge 
            of your financial life and create your future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4">

            <Link to={createPageUrl('Schedule')}>
              <Button
                size="lg"
                className="bg-[#C2983B] hover:bg-[#a8842f] text-white px-8 py-6 text-lg rounded-none group transition-all duration-300">

                Schedule Your Meeting
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="https://wa.me/13479638998" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline" className="bg-slate-700 text-white px-8 py-6 text-lg font-medium rounded-none inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm hover:text-accent-foreground h-10 border-2 border-white/30 hover:bg-white/10 transition-all duration-300">


                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Chat
              </Button>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-[#C2983B] tracking-[0.2em] uppercase text-sm font-medium">

            Your Money, Your Goals, Our Mission
          </motion.p>
        </div>
      </div>

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C2983B] to-transparent" />
    </section>);

}