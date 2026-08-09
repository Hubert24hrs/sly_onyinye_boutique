'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, Eye, Sparkles, Filter, X, Check, Globe } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { getWhatsAppInquiryUrl } from '@/data/business';

export default function Collection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const categories = ['All', 'Dresses', 'Tops', 'Outerwear'];

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="collection" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059]">
            <Sparkles className="w-4 h-4" />
            <span>Curated Inventory</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1D1B]">
            Shop Our Collection
          </h2>
          <p className="text-base sm:text-lg text-[#8C7A6B]">
            Carefully selected thrift fashion from Europe and China made to help you stand out.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C7A6B] mr-2 hidden sm:flex">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#1F1D1B] text-[#FAF8F5] shadow-md'
                  : 'bg-[#FAF8F5] text-[#5A544F] hover:bg-[#E8E2D5] border border-[#E8E2D5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#E8E2D5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E8E2D5]/30">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Status Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm ${
                      product.availability === 'New Arrival'
                        ? 'bg-[#C5A059] text-white'
                        : product.availability === 'Available'
                        ? 'bg-[#1F1D1B] text-[#FAF8F5]'
                        : 'bg-red-600 text-white'
                    }`}
                  >
                    {product.availability}
                  </span>
                </div>

                {/* Origin Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/90 backdrop-blur-sm text-[#4A4540] border border-white/40 shadow-sm">
                    <Globe className="w-3 h-3 text-[#C5A059]" />
                    <span>{product.origin} Import</span>
                  </span>
                </div>

                {/* Quick View Floating Button */}
                <button
                  onClick={() => setActiveModalProduct(product)}
                  className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-[#1F1D1B] p-2.5 rounded-full shadow-md backdrop-blur-sm transition-all transform opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-95"
                  title="Quick View"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Product Content Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#8C7A6B] mb-1">
                    <span>{product.category}</span>
                    <span className="font-semibold text-[#1F1D1B]">{product.price}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#1F1D1B] group-hover:text-[#C5A059] transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#5A544F] line-clamp-2 mt-1 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* WhatsApp Order CTA */}
                <a
                  href={getWhatsAppInquiryUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 rounded-xl font-semibold text-xs shadow-md transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Quick View Product Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative border border-[#E8E2D5]">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 z-20 bg-white/80 p-2 rounded-full text-[#1F1D1B] hover:bg-white shadow-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="relative aspect-[4/5] sm:aspect-auto w-full min-h-[300px]">
                <Image
                  src={activeModalProduct.image}
                  alt={activeModalProduct.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#C5A059] text-white">
                      {activeModalProduct.availability}
                    </span>
                    <span className="text-xs text-[#8C7A6B]">
                      {activeModalProduct.origin} Import
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1F1D1B]">
                    {activeModalProduct.name}
                  </h3>

                  <p className="text-sm font-semibold text-[#C5A059] mt-1">
                    {activeModalProduct.price}
                  </p>

                  <p className="text-xs text-[#5A544F] mt-3 leading-relaxed">
                    {activeModalProduct.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-[#E8E2D5]">
                  <a
                    href={getWhatsAppInquiryUrl(activeModalProduct.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold text-sm shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Send WhatsApp Inquiry</span>
                  </a>
                  <p className="text-[11px] text-center text-[#8C7A6B]">
                    Direct delivery available in Enugu & nationwide delivery across Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
