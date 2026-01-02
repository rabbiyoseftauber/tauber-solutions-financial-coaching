import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const coaches = [
  {
    name: 'Chaim Tauber',
    title: 'CEO & Executive Coach',
    email: 'chaim@taubersolutions.com',
    phone: '+1 (347) 963-8998',
    bio: 'Founder focused on clarity, strategy & sustainable growth. Chaim has helped hundreds of families transform their financial lives through practical, compassionate coaching.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    featured: true,
    id: 'chaim'
  },
  {
    name: 'Naftale Ostreicher',
    title: 'Executive Coach',
    email: 'naftale@taubersolutions.com',
    phone: '+1 (845) 502-3372',
    bio: 'Expert in personal finance transformation. Naftale specializes in helping clients break free from debt and build lasting wealth.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    id: 'naftale'
  },
  {
    name: 'Rivky Friedman',
    title: 'Executive Coach',
    email: 'rivky@taubersolutions.com',
    phone: '+1 (845) 200-4365',
    bio: 'Coaching women & families toward secure futures. Rivky brings empathy and expertise to every client relationship.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    id: 'rivky'
  },
  {
    name: 'Moshe Gelbman',
    title: 'Coach',
    email: 'mgelbman@taubersolutions.com',
    phone: '+1 (845) 587-8892',
    bio: 'Helping clients build structure & confidence. Moshe\'s systematic approach makes complex financial concepts simple and actionable.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    id: 'moshe'
  },
  {
    name: 'Sender Eckstein',
    title: 'Coach',
    email: 'sendere@taubersolutions.com',
    phone: '+44 (739) 278-8116',
    bio: 'Supporting growth in the UK & beyond. Sender brings an international perspective to financial coaching.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    id: 'sender'
  }
];

export default function Coaches() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#1F2A44] via-[#2a3654] to-[#1F2A44] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-20 left-20 w-96 h-96 border border-[#C2983B] rounded-full" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-[#C2983B] text-sm tracking-[0.3em] uppercase mb-4 block">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              The Minds & Mentors{' '}
              <span className="text-[#C2983B] font-normal">Behind the Movement</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Your financial journey is unique. Our experienced coaches walk with you 
              step-by-step, empowering your financial success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Coach */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="relative h-[500px] bg-gradient-to-br from-[#1F2A44] to-[#2a3654] flex items-center justify-center">
              <div className="text-center p-12">
                <div className="w-32 h-32 bg-[#C2983B] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-6xl font-light text-white">
                    {coaches[0].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="absolute top-8 left-8 w-24 h-24 border-2 border-[#C2983B]/30 rounded-full" />
                <div className="absolute bottom-12 right-12 w-16 h-16 border-2 border-[#C2983B]/30 rounded-full" />
              </div>
            </div>
            
            <div>
              <span className="text-[#C2983B] text-sm tracking-[0.2em] uppercase mb-4 block">
                Founder & CEO
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-[#1F2A44] mb-2">
                {coaches[0].name}
              </h2>
              <p className="text-[#C2983B] font-medium mb-6">{coaches[0].title}</p>
              <p className="text-gray-600 font-light leading-relaxed text-lg mb-8">
                {coaches[0].bio}
              </p>
              
              <div className="space-y-4 mb-8">
                <a 
                  href={`mailto:${coaches[0].email}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-[#C2983B] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  {coaches[0].email}
                </a>
                <a 
                  href={`tel:${coaches[0].phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-[#C2983B] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {coaches[0].phone}
                </a>
              </div>
              
              <Link to={createPageUrl('Schedule') + '?coach=chaim'}>
                <Button className="bg-[#1F2A44] hover:bg-[#2a3654] text-white px-8 py-6 rounded-none group">
                  Schedule with {coaches[0].name.split(' ')[0]}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#1F2A44]">
              Meet Our <span className="font-normal">Coaching Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coaches.slice(1).map((coach, index) => (
              <motion.div
                key={coach.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white group"
              >
                <div className="relative overflow-hidden h-64 bg-gradient-to-br from-[#1F2A44] to-[#2a3654] flex items-center justify-center">
                  <div className="w-28 h-28 bg-[#C2983B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl font-light text-white">
                      {coach.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A44]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-3">
                      <a 
                        href={`mailto:${coach.email}`}
                        className="w-10 h-10 bg-white/20 flex items-center justify-center hover:bg-[#C2983B] transition-colors"
                      >
                        <Mail className="w-4 h-4 text-white" />
                      </a>
                      <a 
                        href={`tel:${coach.phone.replace(/\D/g, '')}`}
                        className="w-10 h-10 bg-white/20 flex items-center justify-center hover:bg-[#C2983B] transition-colors"
                      >
                        <Phone className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1F2A44] mb-1">{coach.name}</h3>
                  <p className="text-[#C2983B] text-sm mb-4">{coach.title}</p>
                  <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                    {coach.bio}
                  </p>
                  <Link to={createPageUrl('Schedule') + '?coach=' + coach.id}>
                    <Button className="w-full bg-[#1F2A44] hover:bg-[#2a3654] text-white py-4 rounded-none text-sm group">
                      Schedule with {coach.name.split(' ')[0]}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#C2983B]">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white font-light mb-10 max-w-2xl mx-auto">
              Connect with one of our coaches today and take the first step toward financial freedom.
            </p>
            <Link to={createPageUrl('Schedule')}>
              <Button 
                size="lg"
                className="bg-[#1F2A44] hover:bg-[#2a3654] text-white font-semibold px-10 py-6 text-lg rounded-none"
              >
                Schedule Your Meeting
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}