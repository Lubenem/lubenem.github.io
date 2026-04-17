import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { PortfolioList } from '@/components/PortfolioList';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PortfolioList />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
