import { ShieldCheck, Globe, Tag, MessageSquareCheck, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Quality Selected Pieces",
      description: "Carefully selected thrift pieces focused on style, fabric quality, durability and value.",
      icon: ShieldCheck,
    },
    {
      title: "Imported Fashion",
      description: "Unique fashion pieces sourced directly from Europe and China fashion centers.",
      icon: Globe,
    },
    {
      title: "Affordable Style",
      description: "Look fashionable and high-class without paying exorbitant retail prices.",
      icon: Tag,
    },
    {
      title: "Easy WhatsApp Ordering",
      description: "See something you love? Simply tap to message us directly on WhatsApp for instant response.",
      icon: MessageSquareCheck,
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059]">
            <Sparkles className="w-4 h-4" />
            <span>The Sly Onyinye Advantage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1D1B]">
            Why Shop With Sly Onyinye?
          </h2>
          <p className="text-base sm:text-lg text-[#8C7A6B]">
            We make premium thrift fashion accessible, trustworthy, and effortless.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
          {reasons.map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E2D5] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] text-[#C5A059] flex items-center justify-center border border-[#E8E2D5] group-hover:bg-[#1F1D1B] group-hover:text-[#C5A059] transition-colors mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-[#8C7A6B] uppercase">
                  0{index + 1} Benefit
                </span>
                <h3 className="font-serif text-xl font-bold text-[#1F1D1B] mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A544F] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
