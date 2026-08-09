import { MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppInquiryUrl, getPhoneCallUrl } from '@/data/business';

export default function CallToAction() {
  return (
    <section className="py-20 lg:py-24 bg-[#1F1D1B] text-[#FAF8F5] relative overflow-hidden">
      {/* Decorative Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C7A6B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 bg-[#C5A059]/20 border border-[#C5A059]/40 px-4 py-1.5 rounded-full text-xs font-semibold text-[#C5A059]">
          <Sparkles className="w-4 h-4" />
          <span>Fast & Easy Communication</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          See Something You Love?
        </h2>

        <p className="text-base sm:text-lg text-[#FAF8F5]/80 max-w-2xl mx-auto leading-relaxed">
          Send us a message on WhatsApp to confirm availability, price, sizing, and ordering information. We respond quickly!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a
            href={getWhatsAppInquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-full font-bold text-base shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={getPhoneCallUrl()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-base shadow-lg transition-all hover:scale-105"
          >
            <PhoneCall className="w-5 h-5 text-[#C5A059]" />
            <span>Call Sly Onyinye ({BUSINESS_INFO.phoneDisplay})</span>
          </a>
        </div>

        <p className="text-xs text-[#FAF8F5]/60 pt-4">
          Location: {BUSINESS_INFO.location} • Delivery available across Nigeria
        </p>

      </div>
    </section>
  );
}
