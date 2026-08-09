export const BUSINESS_INFO = {
  name: "Sly Onyinye",
  tagline: "Imported Fashion. Unique Style. Affordable Luxury.",
  subtagline: "Discover carefully selected thrift fashion imported from Europe and China, available right here in Enugu State, Nigeria.",
  phoneDisplay: "+234 811 208 3302",
  phoneRaw: "+2348112083302",
  whatsappNumber: "2348112083302",
  location: "Enugu State, Nigeria",
  ownerName: "Sly Onyinye",
  description: "Sly Onyinye is an Enugu-based fashion business specializing in stylish, carefully selected thrift clothing imported from China and Europe.",
};

export function getWhatsAppInquiryUrl(productName?: string): string {
  const baseMessage = productName
    ? `Hello Sly Onyinye, I'm interested in ${productName}. Is this item still available?`
    : `Hello Sly Onyinye, I found your website and I'm interested in your clothes.`;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(baseMessage)}`;
}

export function getPhoneCallUrl(): string {
  return `tel:${BUSINESS_INFO.phoneRaw}`;
}
