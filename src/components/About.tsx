import Image from 'next/image';
import { MapPin, Globe, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/business';

export default function About() {
  const highlights = [
    {
      title: "Imported Thrift Fashion",
      desc: "Carefully sourced directly from Europe and China fashion hubs.",
      icon: Globe,
    },
    {
      title: "Handpicked Selection",
      desc: "Every item is inspected for style, fabric quality, and freshness.",
      icon: Sparkles,
    },
    {
      title: "Affordable Luxury",
      desc: "Look stunning in high-grade fashion without high retail prices.",
      icon: ShieldCheck,
    },
    {
      title: "Enugu-Based Boutique",
      desc: "Serving fashion-conscious customers across Enugu State and beyond.",
      icon: MapPin,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Owner Photograph Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background accent frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#C5A059]/20 to-[#8C7A6B]/20 rounded-3xl transform -rotate-2" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <div className="relative h-[480px] sm:h-[540px] w-full">
                  <Image
                    src="/images/owner.jpg"
                    alt="Sly Onyinye - Founder & Fashion Curator"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-white border-t border-[#E8E2D5] text-center">
                  <h4 className="font-serif text-lg font-bold text-[#1F1D1B]">Sly Onyinye</h4>
                  <p className="text-xs text-[#8C7A6B] font-medium">Founder & Chief Fashion Curator</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Authentic Story & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              <HeartHandshake className="w-4 h-4" />
              <span>Meet The Brand</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1D1B] leading-tight">
              About Sly Onyinye
            </h2>

            <p className="text-base sm:text-lg text-[#5A544F] leading-relaxed">
              At <strong className="text-[#1F1D1B] font-semibold">Sly Onyinye</strong>, we believe every individual deserves to look elegant, unique, and fashionable without overspending. Based in Enugu State, Nigeria, our business specializes in bringing you carefully selected thrift clothing imported directly from China and Europe.
            </p>

            <p className="text-base sm:text-lg text-[#5A544F] leading-relaxed">
              Whether you are looking for chic dresses, classic vintage blazers, stylish tops, or modern outerwear, each piece in our collection is handpicked to ensure high quality, flattering fits, and unmatched style.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-white border border-[#E8E2D5] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] text-[#C5A059] flex items-center justify-center shrink-0 border border-[#E8E2D5]">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1F1D1B] text-sm">{item.title}</h3>
                      <p className="text-xs text-[#8C7A6B] mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Quote Box */}
            <div className="p-4 rounded-xl bg-[#E8E2D5]/40 border-l-4 border-[#C5A059] italic text-sm text-[#4A4540]">
              &ldquo;Style isn&apos;t about price tags — it&apos;s about quality pieces that express who you are.&rdquo;
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
