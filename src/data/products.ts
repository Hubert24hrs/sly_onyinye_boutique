export interface Product {
  id: string;
  name: string;
  category: 'Dresses' | 'Tops' | 'Outerwear' | 'New Arrivals';
  origin: 'Europe' | 'China';
  price: string; // e.g. "Contact for Price" or specific price if provided
  image: string;
  availability: 'Available' | 'New Arrival' | 'Sold Out';
  description: string;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Sky Blue Floral Strap Sundress",
    category: "Dresses",
    origin: "Europe",
    price: "Contact for Price",
    image: "/images/real_prod_1.jpg",
    availability: "New Arrival",
    description: "Chic handpicked European strap dress with delicate floral prints, soft breathable fabric perfect for sunny days.",
    featured: true,
  },
  {
    id: "prod-2",
    name: "Ribbed Sweetheart Knit Top",
    category: "Tops",
    origin: "Europe",
    price: "Contact for Price",
    image: "/images/real_prod_2.png",
    availability: "Available",
    description: "Elegant off-white ribbed knit blouse featuring a sweetheart neckline and subtle puff sleeve detail.",
    featured: true,
  },
  {
    id: "prod-3",
    name: "Midnight Floral Ruffled Mini Dress",
    category: "Dresses",
    origin: "China",
    price: "Contact for Price",
    image: "/images/real_prod_3.jpg",
    availability: "New Arrival",
    description: "Long-sleeved floral print mini dress with ruched front body and flouncy hem, imported premium thrift piece.",
    featured: true,
  },
  {
    id: "prod-4",
    name: "Vintage Champagne Silk Blouse",
    category: "Tops",
    origin: "Europe",
    price: "Contact for Price",
    image: "/images/prod_silk_blouse.png",
    availability: "Available",
    description: "Silky smooth vintage blouse with soft sheen finish, ideal for office elegance or evening chic.",
    featured: false,
  },
  {
    id: "prod-5",
    name: "Tailored Camel Wool Blazer",
    category: "Outerwear",
    origin: "Europe",
    price: "Contact for Price",
    image: "/images/prod_vintage_blazer.png",
    availability: "New Arrival",
    description: "Classic structured single-breasted blazer in warm camel beige. Premium imported outerwear.",
    featured: true,
  },
  {
    id: "prod-6",
    name: "Distressed Streetwear Denim Jacket",
    category: "Outerwear",
    origin: "China",
    price: "Contact for Price",
    image: "/images/prod_denim_jacket.png",
    availability: "Available",
    description: "Edgy relaxed-fit denim jacket with vintage wash and durable premium weight.",
    featured: false,
  },
  {
    id: "prod-7",
    name: "Graceful Chiffon Floral Midi",
    category: "Dresses",
    origin: "China",
    price: "Contact for Price",
    image: "/images/prod_floral_dress.png",
    availability: "Available",
    description: "Lightweight chiffon midi dress with vibrant botanical prints and comfortable waist contour.",
    featured: false,
  },
];
