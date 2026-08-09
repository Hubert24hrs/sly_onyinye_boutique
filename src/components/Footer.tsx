import { MessageCircle, Phone, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppInquiryUrl, getPhoneCallUrl } from '@/data/business';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#191817] text-[#FAF8F5] pt-16 pb-12 border-t border-[#33302C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2D2B28]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#C5A059] text-[#1F1D1B] flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white uppercase">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#A09890] max-w-sm leading-relaxed">
              {BUSINESS_INFO.description}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#C5A059] font-medium pt-1">
              <MapPin className="w-4 h-4" />
              <span>{BUSINESS_INFO.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#C5A059]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#A09890]">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Sly Onyinye
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-white transition-colors">
                  Shop Collection
                </a>
              </li>
              <li>
                <a href="#new-arrivals" className="hover:text-white transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Shop With Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#C5A059]">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-[#A09890]">
              <a
                href={getPhoneCallUrl()}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <a
                href={getWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:underline"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78726A] gap-4">
          <p>© {currentYear} Sly Onyinye Boutique. All rights reserved.</p>
          <p>Imported Thrift Fashion • Enugu State, Nigeria</p>
        </div>

      </div>
    </footer>
  );
}
