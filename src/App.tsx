import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ConsultationModal } from './components/ConsultationModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { VisaPage } from './pages/VisaPage';
import { MastersPage } from './pages/MastersPage';
import { BachelorsPage } from './pages/BachelorsPage';
import { CountryStudyPage } from './pages/CountryStudyPage';
import { StudyAbroadCountryPage } from './pages/StudyAbroadCountryPage';
import { StudyAbroadAdminPage } from './pages/admin/StudyAbroadAdminPage';
import { TrainingPage } from './pages/TrainingPage';
import { SuccessStoriesPage } from './pages/SuccessStoriesPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [consultationService, setConsultationService] = useState('Career Counselling');

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) setConsultationService(serviceName);
    setIsConsultationOpen(true);
  };

  const handleOpenSearch = () => {
    setIsSearchOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans selection:bg-iq-red selection:text-white">
        
        {/* Sticky Header */}
        <Header
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenSearch={handleOpenSearch}
        />

        {/* Dynamic Route Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenConsultation={() => handleOpenConsultation()} />} />
            <Route path="/about" element={<AboutPage onOpenConsultation={() => handleOpenConsultation()} />} />
            <Route path="/services" element={<ServicesPage onOpenConsultation={() => handleOpenConsultation()} />} />
            <Route path="/services/:slug" element={<ServiceDetailPage onOpenConsultation={() => handleOpenConsultation()} />} />
            <Route path="/visa" element={<VisaPage onOpenConsultation={() => handleOpenConsultation('Visa Assistance')} />} />
            <Route path="/masters" element={<MastersPage onOpenConsultation={() => handleOpenConsultation('Masters Guidance')} />} />
            <Route path="/masters/:country" element={<CountryStudyPage degreeLevel="masters" onOpenConsultation={() => handleOpenConsultation('Masters Guidance')} />} />
            <Route path="/study-masters/:country" element={<CountryStudyPage degreeLevel="masters" onOpenConsultation={() => handleOpenConsultation('Masters Guidance')} />} />
            <Route path="/bachelors" element={<BachelorsPage onOpenConsultation={() => handleOpenConsultation('Bachelors Guidance')} />} />
            <Route path="/bachelors/:country" element={<CountryStudyPage degreeLevel="bachelors" onOpenConsultation={() => handleOpenConsultation('Bachelors Guidance')} />} />
            <Route path="/study-bachelors/:country" element={<CountryStudyPage degreeLevel="bachelors" onOpenConsultation={() => handleOpenConsultation('Bachelors Guidance')} />} />
            
            {/* Dedicated 10-Country Study Abroad System (Australia, UK, Europe, USA, Canada, Ireland, NZ, Malaysia, Singapore, Dubai) */}
            <Route path="/study-in-:country" element={<StudyAbroadCountryPage onOpenConsultation={() => handleOpenConsultation('Study Abroad Guidance')} />} />
            <Route path="/study-:country" element={<StudyAbroadCountryPage onOpenConsultation={() => handleOpenConsultation('Study Abroad Guidance')} />} />
            <Route path="/destinations/:country" element={<StudyAbroadCountryPage onOpenConsultation={() => handleOpenConsultation('Study Abroad Guidance')} />} />

            {/* Admin CMS Portal for Study Abroad Management */}
            <Route path="/admin" element={<StudyAbroadAdminPage />} />
            <Route path="/admin/study-abroad" element={<StudyAbroadAdminPage />} />

            <Route path="/training" element={<TrainingPage onOpenConsultation={() => handleOpenConsultation('Training & Test Prep')} />} />
            <Route path="/training/:program" element={<TrainingPage onOpenConsultation={() => handleOpenConsultation('Training & Test Prep')} />} />
            <Route path="/success-stories" element={<SuccessStoriesPage onOpenConsultation={() => handleOpenConsultation()} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Floating Actions (WhatsApp, Scroll to Top, Mobile Sticky Bar) */}
        <FloatingActions
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Consultation Modal */}
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
          defaultService={consultationService}
        />

        {/* Quick Search Modal */}
        <QuickSearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </div>
    </Router>
  );
};

export default App;
