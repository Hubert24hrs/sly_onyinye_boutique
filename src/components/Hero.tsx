import Image from 'next/image';
import { MessageCircle, ShoppingBag, MapPin, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppInquiryUrl } from '@/data/business';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F5F0E8] via-[#FAF8F5] to-[#FAF8F5]">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8C7A6B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Origin & Location Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E8E2D5]/80 backdrop-blur-sm border border-[#C5A059]/30 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-[#1F1D1B] shadow-sm">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>Imported Thrift Fashion • Europe & China</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span className="flex items-center gap-1 font-semibold text-[#8C7A6B]">
                <MapPin className="w-3.5 h-3.5" /> Enugu, Nigeria
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1F1D1B] leading-[1.15]">
              Imported Fashion.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1F1D1B] via-[#C5A059] to-[#8C7A6B]">
                Unique Style.
              </span>
              Affordable Luxury.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#5A544F] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Discover handpicked, premium thrift clothing directly imported from Europe and China.
              Elevate your wardrobe with unique, stylish pieces curated by{' '}
              <strong className="font-semibold text-[#1F1D1B]">Sly Onyinye</strong> in Enugu State.
            </p>

            {/* Quick Benefits Bullet Points */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2 text-sm text-[#4A4540]">
              <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-[#E8E2D5]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>Handpicked Quality</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-[#E8E2D5]">
                <Globe className="w-4 h-4 text-[#C5A059]" />
                <span>UK, Europe & China Imports</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-[#E8E2D5]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>Direct WhatsApp Delivery</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#collection"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#1F1D1B] hover:bg-[#383431] text-[#FAF8F5] px-8 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
                <span>Shop Collection</span>
              </a>

              <a
                href={getWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Phone Quick Tap */}
            <div className="pt-2 text-center lg:text-left">
              <p className="text-xs text-[#8C7A6B]">
                Need fast help or instant booking? Call us at{' '}
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-[#1F1D1B] hover:underline">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </p>
            </div>

          </div>

          {/* Right Column: Visual Feature Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card: Real Owner Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <div className="relative h-[440px] sm:h-[500px] w-full">
                  <Image
                    src="/images/owner.jpg"
                    alt="Sly Onyinye Boutique Owner in Enugu Shop"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Overlaid Card Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/50 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#1F1D1B]">
                        Sly Onyinye
                      </h3>
                      <p className="text-xs text-[#8C7A6B]">
                        Boutique Owner • Enugu, Nigeria
                      </p>
                    </div>
                    <div className="bg-[#1F1D1B] text-[#C5A059] px-3 py-1.5 rounded-full text-xs font-semibold">
                      Curated Thrift
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Real Product Preview */}
              <div className="absolute -top-6 -left-6 bg-white p-2 rounded-2xl shadow-xl border border-[#E8E2D5] hidden sm:block animate-float-pulse">
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden">
                    <Image
                      src="/images/real_prod_1.jpg"
                      alt="Floral Sundress"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="pr-3">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#C5A059]">
                      New Drop
                    </span>
                    <p className="text-xs font-bold text-[#1F1D1B]">European Floral Sundress</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Imported Guarantee */}
              <div className="absolute -bottom-6 -right-4 bg-[#1F1D1B] text-white p-4 rounded-2xl shadow-xl border border-[#C5A059]/40 max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <span className="text-xs font-bold text-[#C5A059]">100% Unique</span>
                </div>
                <p className="text-[11px] text-[#FAF8F5]/80 leading-snug">
                  Hand-selected thrift pieces from Europe & China.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
