import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ExploreStudyDestinations } from '../components/ExploreStudyDestinations';
import { TrustStrip } from '../components/TrustStrip';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProgramsHighlight } from '../components/ProgramsHighlight';
import { DestinationsWhyChoose } from '../components/DestinationsWhyChoose';
import { ApplicationJourney } from '../components/ApplicationJourney';
import { SuccessStoriesSection } from '../components/SuccessStoriesSection';
import { FaqSection } from '../components/FaqSection';
import { ContactCardSection } from '../components/ContactCardSection';

interface HomePageProps {
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  return (
    <main className="w-full">
      {/* 1. Hero Section */}
      <HeroSection onOpenConsultation={onOpenConsultation} />

      {/* 2. Explore Study Destinations Grid (matching image copy 41 & 42) */}
      <ExploreStudyDestinations />

      {/* 3. Navy Trust Strip */}
      <TrustStrip />

      {/* 4. About Company & Core Values with Vision & Mission Popups */}
      <AboutSection onOpenConsultation={onOpenConsultation} />

      {/* 5. Complete Services Explorer (10 Services) */}
      <ServicesSection />

      {/* 6. Programs Highlight (Masters, Bachelors, Training) */}
      <ProgramsHighlight />

      {/* 7. Global Destinations & Why Choose Us */}
      <DestinationsWhyChoose />

      {/* 8. Application Journey (4-step Process) */}
      <ApplicationJourney />

      {/* 9. Success Stories & FAQ Grid */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6">
              <SuccessStoriesSection />
            </div>
            <div className="lg:col-span-6">
              <FaqSection />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Get in Touch & Contact Form */}
      <ContactCardSection />
    </main>
  );
};
