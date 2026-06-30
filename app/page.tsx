import Hero from '@/components/Hero';
import About from '@/components/About';
import Bestsellers from '@/components/Bestsellers';
import WhyUs from '@/components/WhyUs';
import Reviews from '@/components/Reviews';
import Gallery from '@/components/Gallery';
import CtaBanner from '@/components/CtaBanner';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Bestsellers />
      <WhyUs />
      <Reviews />
      <Gallery />
      <CtaBanner />
      <Contact />
    </>
  );
}
