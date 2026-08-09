import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Collection from '@/components/Collection';
import NewArrivals from '@/components/NewArrivals';
import WhyChooseUs from '@/components/WhyChooseUs';
import CallToAction from '@/components/CallToAction';
import ContactSection from '@/components/ContactSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <Navbar />
      <Hero />
      <About />
      <Collection />
      <NewArrivals />
      <WhyChooseUs />
      <CallToAction />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
