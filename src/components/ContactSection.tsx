import { MapPin, Phone, MessageCircle, Clock, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppInquiryUrl, getPhoneCallUrl } from '@/data/business';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059]">
            <Sparkles className="w-4 h-4" />
            <span>Reach Out Today</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1D1B]">
            Let&apos;s Get You Styled
          </h2>
          <p className="text-base sm:text-lg text-[#8C7A6B]">
            Have questions about clothing sizes, availability, or new stock arrivals? Contact us directly.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Location Card */}
          <div className="bg-white p-8 rounded-2xl border border-[#E8E2D5] shadow-sm text-center flex flex-col items-center justify-between space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] text-[#C5A059] flex items-center justify-center border border-[#E8E2D5]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1F1D1B]">Location</h3>
              <p className="text-sm font-medium text-[#5A544F] mt-1">{BUSINESS_INFO.location}</p>
              <p className="text-xs text-[#8C7A6B] mt-0.5">Enugu State, Nigeria</p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-8 rounded-2xl border border-[#E8E2D5] shadow-sm text-center flex flex-col items-center justify-between space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] text-[#C5A059] flex items-center justify-center border border-[#E8E2D5]">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1F1D1B]">Phone Call</h3>
              <a
                href={getPhoneCallUrl()}
                className="text-base font-bold text-[#1F1D1B] hover:text-[#C5A059] transition-colors mt-1 block"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
              <p className="text-xs text-[#8C7A6B] mt-0.5">Tap to call directly</p>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white p-8 rounded-2xl border border-[#E8E2D5] shadow-sm text-center flex flex-col items-center justify-between space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center border border-[#25D366]/30">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1F1D1B]">WhatsApp</h3>
              <a
                href={getWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#25D366] hover:underline mt-1 block"
              >
                Chat on WhatsApp
              </a>
              <p className="text-xs text-[#8C7A6B] mt-0.5">Instant chat & order confirmation</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
