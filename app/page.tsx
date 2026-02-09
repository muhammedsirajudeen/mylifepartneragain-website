import Header from './components/Header';
import Hero from './components/Hero';
import Values from './components/Values';
import HowItWorks from './components/HowItWorks';
import TrustSafety from './components/TrustSafety';
import Pricing from './components/Pricing';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />
      <Hero />
      <Values />
      <HowItWorks />
      <TrustSafety />
      <Pricing />
    </main>
  );
}
