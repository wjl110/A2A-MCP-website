import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import TechnologySection from './components/TechnologySection';
import AdvantagesSection from './components/AdvantagesSection';
import ApplicationsSection from './components/ApplicationsSection';
import DevelopersSection from './components/DevelopersSection';
import InsightsSection from './components/InsightsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TechnologySection />
      <AdvantagesSection />
      <ApplicationsSection />
      <DevelopersSection />
      <InsightsSection />
      <ContactSection />
    </main>
  );
}
