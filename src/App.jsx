import { useCallback, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import FooterSection from './components/layout/FooterSection';
import Navbar from './components/layout/Navbar';
import AboutSection from './components/sections/AboutSection';
import EducationSection from './components/sections/EducationSection';
import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactModal from './components/ui/ContactModal';
import useScrollReveal from './hooks/useScrollReveal';
import {
  aboutData,
  contactData,
  educationItems,
  footerData,
  heroData,
  navItems,
  projects,
  skills,
} from './data/portfolioData';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useScrollReveal();

  const handleNavClick = useCallback((event, targetId) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      return;
    }

    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="bg-[#18181b] font-['Poppins',sans-serif]">
      <Navbar
        navItems={navItems}
        logo={heroData.logo}
        isMenuOpen={isMenuOpen}
        onOpenMenu={() => setIsMenuOpen(true)}
        onCloseMenu={() => setIsMenuOpen(false)}
        onNavClick={handleNavClick}
        onToggleContact={() => setIsContactOpen((currentValue) => !currentValue)}
      />

      <HeroSection hero={heroData} />

      <ContactModal
        isOpen={isContactOpen}
        contactData={contactData}
        onClose={() => setIsContactOpen(false)}
      />

      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <AboutSection about={aboutData} />
      <EducationSection items={educationItems} />
      <FooterSection footer={footerData} />
      <Analytics />
    </div>
  );
}

export default App;
