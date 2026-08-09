'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppInquiryUrl } from '@/data/business';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Small Tooltip Bubble */}
      {showTooltip && (
        <div className="relative bg-[#1F1D1B] text-[#FAF8F5] text-xs font-semibold py-2 px-3.5 rounded-2xl shadow-xl border border-[#C5A059]/40 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span>Inquire on WhatsApp 👋</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={getWhatsAppInquiryUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Sly Onyinye"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group-hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
}
