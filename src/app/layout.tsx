import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://slyonyinyeboutique.vercel.app'),
  title: 'Sly Onyinye | Imported Thrift Fashion in Enugu',
  description: 'Discover stylish and affordable imported thrift clothes from Europe and China at Sly Onyinye in Enugu State, Nigeria. Quality handpicked dresses, tops & outerwear.',
  keywords: [
    'Sly Onyinye',
    'thrift clothes Enugu',
    'thrift fashion Enugu',
    'thrift clothes Nigeria',
    'imported clothes Enugu',
    'Europe thrift clothes Nigeria',
    'China thrift clothes Nigeria',
    'boutique Enugu',
    'affordable clothes Enugu',
  ],
  authors: [{ name: 'Sly Onyinye' }],
  creator: 'Sly Onyinye',
  publisher: 'Sly Onyinye Boutique',
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    title: 'Sly Onyinye | Imported Thrift Fashion in Enugu',
    description: 'Discover carefully selected thrift clothes imported from Europe and China, available from Sly Onyinye in Enugu State, Nigeria.',
    url: 'https://slyonyinyeboutique.vercel.app',
    siteName: 'Sly Onyinye Boutique',
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/images/owner.jpg',
        width: 1200,
        height: 630,
        alt: 'Sly Onyinye Boutique Enugu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sly Onyinye | Imported Thrift Fashion in Enugu',
    description: 'Discover stylish and affordable imported thrift clothes from Europe and China at Sly Onyinye in Enugu State, Nigeria.',
    images: ['/images/owner.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased bg-[#FAF8F5] text-[#1F1D1B] selection:bg-[#C5A059] selection:text-white">
        {children}
      </body>
    </html>
  );
}
