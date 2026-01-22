import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactInfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-white text-white hover:bg-white/10">
          <MapPin className="w-4 h-4 mr-2" />
          Contact Info
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact Information</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 pt-4">
          <div>
            <h4 className="font-semibold text-[#1a2b4b] mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C2983B]" />
              Phone Numbers
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>
                <span className="font-medium">US:</span>{' '}
                <a href="tel:+18453226500" className="hover:text-[#C2983B]">
                  +1 (845) 322-6500
                </a>
              </div>
              <div>
                <span className="font-medium">UK:</span>{' '}
                <a href="tel:+447392788116" className="hover:text-[#C2983B]">
                  +44 (739) 278-8116
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#1a2b4b] mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#C2983B]" />
              Email
            </h4>
            <div className="text-sm text-gray-600">
              <a href="mailto:office@taubersolutions.com" className="hover:text-[#C2983B]">
                office@taubersolutions.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#1a2b4b] mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C2983B]" />
              Addresses
            </h4>
            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <div className="font-medium text-[#1a2b4b] mb-1">US Office</div>
                <div>67 North Airmont Rd</div>
                <div>Suffern, NY 10901</div>
              </div>
              <div>
                <div className="font-medium text-[#1a2b4b] mb-1">UK Office</div>
                <div>71 Wellington Street West</div>
                <div>Salford M7 2ED</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}