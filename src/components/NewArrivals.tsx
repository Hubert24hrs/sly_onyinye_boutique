import Image from 'next/image';
import { MessageCircle, Sparkles, Flame, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { getWhatsAppInquiryUrl } from '@/data/business';

export default function NewArrivals() {
  const newArrivals = PRODUCTS.filter((p) => p.availability === 'New Arrival');

  return (
    <section id="new-arrivals" className="py-20 bg-[#F5F0E8] border-y border-[#E8E2D5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              <Flame className="w-4 h-4 text-red-500 fill-current" />
              <span>Just Unpacked</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1D1B] mt-2">
              New Arrivals
            </h2>
            <p className="text-sm sm:text-base text-[#8C7A6B] mt-1">
              Fresh thrift drops imported directly from Europe & China.
            </p>
          </div>

          <a
            href="#collection"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1F1D1B] hover:text-[#C5A059] transition-colors group"
          >
            <span>View Full Inventory</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* New Arrivals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {newArrivals.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E2D5] shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#FAF8F5]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#C5A059] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  New Arrival
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#1F1D1B] text-[10px] font-medium px-2 py-0.5 rounded border border-white/50">
                  {product.origin}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-xs text-[#8C7A6B]">{product.category}</span>
                  <h3 className="font-serif text-lg font-bold text-[#1F1D1B] group-hover:text-[#C5A059] transition-colors mt-0.5">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#5A544F] mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <a
                  href={getWhatsAppInquiryUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 rounded-xl font-semibold text-xs shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Claim Item on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
