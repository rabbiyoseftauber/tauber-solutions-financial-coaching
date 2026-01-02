import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, MessageCircle, ArrowRight, CheckCircle, User, Video, Phone } from 'lucide-react';

const sessionTypes = [
  {
    id: 'free-call',
    title: 'Free Info Call',
    duration: '15 minutes',
    price: 'Free',
    description: 'Quick introduction to learn about our services and see if we\'re a good fit.',
    icon: Phone
  },
  {
    id: 'initial-session',
    title: 'Initial Coaching Session',
    duration: '2 hours',
    price: '$150',
    description: 'Deep dive into your financial situation with personalized recommendations.',
    icon: Video
  },
  {
    id: 'follow-up',
    title: 'Follow-up Session',
    duration: '50 minutes',
    price: '$100',
    description: 'Continue your progress with accountability and guidance.',
    icon: User
  }
];

const coaches = [
  { id: 'any', name: 'Any Available Coach' },
  { id: 'chaim', name: 'Chaim Tauber - CEO & Executive Coach' },
  { id: 'naftale', name: 'Naftale Ostreicher - Executive Coach' },
  { id: 'rivky', name: 'Rivky Friedman - Executive Coach' },
  { id: 'moshe', name: 'Moshe Gelbman - Coach' },
  { id: 'sender', name: 'Sender Eckstein - Coach' }
];

export default function Schedule() {
  const urlParams = new URLSearchParams(window.location.search);
  const coachParam = urlParams.get('coach');
  
  const [selectedSession, setSelectedSession] = useState('free-call');
  const [selectedCoach, setSelectedCoach] = useState(coachParam || 'any');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#1F2A44] via-[#2a3654] to-[#1F2A44] relative overflow-hidden">
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-[#C2983B] text-sm tracking-[0.3em] uppercase mb-4 block">
              Book Your Session
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Your Future Starts with{' '}
              <span className="text-[#C2983B] font-normal">One Conversation</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Choose your session type, select a coach, and take the first step 
              toward financial freedom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-16">
              {[1, 2, 3].map((s) => (
                <React.Fragment key={s}>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    step >= s ? 'bg-[#C2983B] text-white' : 'bg-gray-200 text-gray-500'
                  } font-medium transition-colors`}>
                    {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div className={`w-24 h-0.5 ${step > s ? 'bg-[#C2983B]' : 'bg-gray-200'} transition-colors`} />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Step 1: Select Session Type */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-light text-[#1F2A44] mb-8 text-center">
                  Select Your Session Type
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {sessionTypes.map((session) => (
                    <Card 
                      key={session.id}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedSession === session.id 
                          ? 'border-2 border-[#C2983B] shadow-lg' 
                          : 'border border-gray-200'
                      }`}
                      onClick={() => setSelectedSession(session.id)}
                    >
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${
                          selectedSession === session.id ? 'bg-[#C2983B]' : 'bg-gray-100'
                        } transition-colors`}>
                          <session.icon className={`w-6 h-6 ${
                            selectedSession === session.id ? 'text-white' : 'text-gray-500'
                          }`} />
                        </div>
                        <h3 className="text-lg font-semibold text-[#1F2A44] mb-2">{session.title}</h3>
                        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" /> {session.duration}
                          </span>
                          <span className="font-semibold text-[#C2983B]">{session.price}</span>
                        </div>
                        <p className="text-gray-600 text-sm font-light">{session.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mb-12">
                  <Label className="text-[#1F2A44] font-medium mb-3 block">
                    Select Your Preferred Coach
                  </Label>
                  <Select value={selectedCoach} onValueChange={setSelectedCoach}>
                    <SelectTrigger className="w-full h-14 rounded-none border-gray-300">
                      <SelectValue placeholder="Choose a coach" />
                    </SelectTrigger>
                    <SelectContent>
                      {coaches.map((coach) => (
                        <SelectItem key={coach.id} value={coach.id}>
                          {coach.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="text-center">
                  <Button 
                    onClick={() => {
                      setStep(2);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-[#C2983B] hover:bg-[#b08e35] text-white font-semibold px-12 py-6 rounded-none group"
                  >
                    Continue
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Contact Info */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-light text-[#1F2A44] mb-8 text-center">
                  Enter Your Details
                </h2>

                <div className="bg-gray-100 p-6 rounded-none mb-8 max-w-xl mx-auto">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 mb-1">Session Type</p>
                      <p className="font-semibold text-[#1F2A44]">
                        {sessionTypes.find(s => s.id === selectedSession)?.title}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Coach</p>
                      <p className="font-semibold text-[#1F2A44]">
                        {coaches.find(c => c.id === selectedCoach)?.name}
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
                  <div>
                    <Label htmlFor="name" className="text-[#1F2A44] font-medium mb-2 block">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-14 rounded-none border-gray-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-[#1F2A44] font-medium mb-2 block">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-14 rounded-none border-gray-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-[#1F2A44] font-medium mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="h-14 rounded-none border-gray-300"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-[#1F2A44] font-medium mb-2 block">
                      Tell us about your goals (optional)
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="rounded-none border-gray-300 min-h-[120px]"
                      placeholder="What would you like to achieve?"
                    />
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setStep(1);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex-1 h-14 rounded-none border-gray-300"
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit"
                      className="flex-1 h-14 bg-[#C2983B] hover:bg-[#b08e35] text-white font-semibold rounded-none"
                    >
                      Submit Request
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                
                <h2 className="text-3xl font-light text-[#1F2A44] mb-4">
                  Request Submitted!
                </h2>
                <p className="text-gray-600 font-light mb-8 max-w-lg mx-auto">
                  Thank you, {formData.name}! We've received your booking request. 
                  Our team will contact you within 24 hours to confirm your session.
                </p>
                
                <div className="bg-gray-100 p-6 rounded-none mb-8 max-w-lg mx-auto">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Selected Session</p>
                      <p className="font-semibold text-[#1F2A44]">
                        {sessionTypes.find(s => s.id === selectedSession)?.title}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Coach</p>
                      <p className="font-semibold text-[#1F2A44]">
                        {coaches.find(c => c.id === selectedCoach)?.name}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-600 mb-4">Want to connect faster?</p>
                  <a 
                    href="https://wa.me/13479638998"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-6 rounded-none">
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-[#1F2A44]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-light text-white mb-2">
                Prefer to talk directly?
              </h3>
              <p className="text-gray-400 font-light">
                Call us or send a WhatsApp message anytime.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="tel:+13479638998">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-none">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
              </a>
              <a href="https://wa.me/13479638998" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#C2983B] hover:bg-[#b08e35] text-white font-semibold px-8 py-6 rounded-none">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}