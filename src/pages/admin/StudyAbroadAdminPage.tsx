import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Plus,
  Edit,
  Trash2,
  Eye,
  Save,
  RotateCcw,
  Download,
  Upload,
  Check,
  AlertCircle,
  ChevronRight,
  ArrowLeft,
  Image as ImageIcon,
  BookOpen,
  DollarSign,
  GraduationCap,
  Calendar,
  FileText,
  Briefcase,
  HelpCircle,
  Layers,
  Sparkles,
  Search,
  ExternalLink
} from 'lucide-react';
import { countryStore, useCountriesList } from '../../store/countryStore';
import { CountryPageData } from '../../types/studyAbroad';
import { INITIAL_COUNTRIES_DATA } from '../../data/studyAbroadData';

export const StudyAbroadAdminPage: React.FC = () => {
  const countries = useCountriesList();
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<CountryPageData | null>(null);
  const [activeTab, setActiveTab] = useState<string>('basic');
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleSelectCountry = (country: CountryPageData) => {
    setSelectedSlug(country.slug);
    setEditForm(JSON.parse(JSON.stringify(country)));
    setActiveTab('basic');
  };

  const handleAddNew = () => {
    const newSlug = `new-country-${Date.now().toString().slice(-4)}`;
    const template: CountryPageData = {
      id: newSlug,
      slug: newSlug,
      name: 'New Destination',
      flag: '🌐',
      isPublished: true,
      order: countries.length + 1,
      seoTitle: 'Study in New Destination | Top Universities & Visa Guidance | IQ Overseas',
      seoDescription: 'Complete guide to studying abroad in New Destination. Admissions, cost of studying, top courses, and visa assistance with IQ Overseas.',
      heroBanner: {
        imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1920&q=80',
        badge: 'Premier International Destination',
        headline: 'Study in New Destination: World-Class Education & Global Career Pathways',
        subtitle: 'Unlock world-class degrees, generous post-study work rights, and industry exposure.',
        stats: [
          { label: 'Global Ranking', value: 'Top 100 Universities' },
          { label: 'Post-Study Work', value: 'Up to 3 Years' },
          { label: 'Avg Starting Salary', value: '$65,000 / year' }
        ]
      },
      introduction: {
        heading: 'Study in New Destination – Expert Guidance by IQ Overseas',
        subheading: 'Empowering ambitious students to achieve their international academic dreams.',
        paragraphs: [
          'Studying in this destination offers an exceptional combination of academic excellence, cultural diversity, and rewarding career opportunities for international students.',
          'IQ Overseas provides end-to-end guidance from university shortlisting and application processing to student visa filing and pre-departure briefings.'
        ],
        highlights: [
          'Globally recognized qualifications from accredited institutions',
          'Vibrant multicultural campuses with welcoming student support',
          'Flexible part-time work rights and structured post-study visas'
        ]
      },
      quickFacts: {
        country: 'New Destination',
        capital: 'Capital City',
        popularCities: 'Major Metro 1, Metro 2',
        currency: 'Local Dollar / Euro',
        language: 'English',
        popularIntakes: 'Semester 1 (Feb/Mar) & Semester 2 (Jul/Aug)',
        topCourses: 'Computer Science, Data Science, MBA, Engineering',
        avgTuitionFee: '$20,000 – $35,000 / year',
        postStudyWork: '2 to 4 Years Post-Study Work Permit',
        workRights: '24 hours / week during semester; 48 hours / fortnight'
      },
      educationLandscape: {
        intro: 'The higher education system features world-ranked universities, research institutions, and specialized vocational colleges recognized globally.',
        bulletPoints: [
          'Three-Tier Higher Education: Bachelor’s, Master’s, and Doctoral programs',
          'Industry-Aligned Curriculum with hands-on internships and practical capstones',
          'Strict National Quality Assurance Standards protecting international students'
        ],
        comparisonTable: [
          { aspect: 'Program Duration', undergraduate: '3 to 4 Years', postgraduate: '1 to 2 Years' },
          { aspect: 'Entry Qualification', undergraduate: '10+2 / High School (60%–85%)', postgraduate: 'Recognized 3 or 4-Year Bachelor Degree' },
          { aspect: 'English Requirement', undergraduate: 'IELTS 6.0 / PTE 50', postgraduate: 'IELTS 6.5 / PTE 58' },
          { aspect: 'Typical Credit Structure', undergraduate: '144–192 Credit Points', postgraduate: '72–96 Credit Points' }
        ]
      },
      whyStudyBenefits: [
        { id: 'b1', title: 'Global Recognition', description: 'Degrees valued worldwide by top-tier employers and multinational corporations.' },
        { id: 'b2', title: 'Work While Studying', description: 'Legal permission to work part-time during semesters and full-time during official breaks.' },
        { id: 'b3', title: 'Post-Study Career Rights', description: 'Generous post-study work visas offering direct paths to international employment.' }
      ],
      topCourses: [
        {
          id: 'cs-it',
          title: 'Computer Science, AI & Data Science',
          category: 'Technology',
          duration: '1–3 Years',
          careerRoles: ['Software Engineer', 'Data Scientist', 'Cloud Architect'],
          description: 'Cutting-edge curricula covering software systems, machine learning, and scalable cloud engineering.'
        }
      ],
      scholarships: {
        intro: 'Generous financial aid packages and merit awards for international applicants.',
        items: [
          {
            id: 's1',
            name: 'Global Excellence Scholarship',
            provider: 'Partner Universities',
            award: 'Up to 25% Tuition Fee Waiver',
            eligibility: 'Academic score of 75%+ in prior qualifying education'
          }
        ]
      },
      admissionIntakes: {
        intro: 'International admissions typically operate across two major intakes and one rolling minor cycle.',
        items: [
          { name: 'Semester 1 (Primary)', period: 'February / March', deadline: 'October – November', remarks: 'Full course catalog open' },
          { name: 'Semester 2 (Secondary)', period: 'July / August', deadline: 'April – May', remarks: 'Selected courses and faculties' }
        ]
      },
      studyPrograms: {
        intro: 'Comprehensive academic pathways from undergraduate foundation to doctoral research.',
        items: [
          { level: 'Bachelor’s Degree', duration: '3 to 4 Years', description: 'Foundational degree providing deep subject expertise and industrial placement.' },
          { level: 'Master’s Degree', duration: '1 to 2 Years', description: 'Advanced coursework or research specialization leading to high-demand careers.' }
        ]
      },
      englishRequirements: {
        intro: 'English language proficiency scores accepted by universities and immigration.',
        ielts: { ug: '6.0 (no band below 5.5)', pg: '6.5 (no band below 6.0)', notes: 'Academic version required' },
        pte: { ug: '50 (min 42 each module)', pg: '58 (min 50 each module)', notes: 'PTE Academic' },
        toefl: { ug: '79 (min 18 each section)', pg: '88 (min 20 each section)', notes: 'iBT format' },
        duolingo: { ug: '105 – 115', pg: '115 – 125', notes: 'Accepted by selected institutions' }
      },
      entryRequirements: {
        intro: 'Standard academic and procedural prerequisites for international applicants.',
        academicPercentage: 'Minimum 60% – 75% for UG; 55% – 65% for PG',
        backlogPolicy: 'Up to 10–15 backlogs accepted depending on university ranking and tier',
        criteria: [
          'Recognized high school completion (10+2) or accredited undergraduate degree',
          'Standardized tests (GRE/GMAT) generally optional except for top-tier competitive programs',
          'Statement of Purpose (SOP) detailing academic background and future objectives',
          '2 Academic or Professional Letters of Recommendation (LOR)'
        ]
      },
      costOfStudying: {
        bachelorsTuition: '$18,000 – $35,000 / year',
        mastersTuition: '$20,000 – $42,000 / year',
        livingExpenses: '$14,000 – $22,000 / year',
        healthInsurance: '$550 – $900 / year',
        visaFee: '$450 – $710 one-time'
      },
      documentsRequired: {
        admissionDocuments: [
          'Academic marksheets (10th, 12th, Bachelor Degree)',
          'Degree certificate or Provisional Certificate',
          'English test scorecard (IELTS/PTE/TOEFL)',
          'Statement of Purpose (SOP)',
          'Letters of Recommendation (LOR)',
          'Valid Passport copy'
        ],
        visaDocuments: [
          'Official Confirmation of Enrolment / Unconditional Offer Letter',
          'Proof of Financial Capability & Tuition receipt',
          'Genuine Student (GS) Statement / Visa SOP',
          'Approved Medical Examination report',
          'Police Clearance Certificate (if requested)'
        ]
      },
      workOpportunities: {
        partTimeRules: '24 hours per week during active semester terms',
        vacationRules: 'Unlimited full-time work during official term breaks and holidays',
        minimumWage: '$18.50 – $24.10 per hour',
        postStudyWorkVisa: '2 to 4 Years Post-Study Work Visa depending on degree level'
      },
      prPathways: {
        intro: 'Skilled international graduates can access structured points-tested migration streams and employer nomination schemes.',
        pathways: [
          'General Skilled Migration points tested visas (local qualification bonus)',
          'Designated Regional Area study concessions and bonus immigration points',
          'Employer Nomination Schemes for occupations on National Skills Priority lists'
        ],
        disclaimer: 'Immigration regulations and visa policies are strictly administered by the government and are subject to official revision.'
      },
      faqs: [
        {
          q: 'What is the average cost of studying in this country?',
          a: 'Annual tuition fees range between $18,000 and $38,000 depending on the course and university, with living costs averaging $14,000 to $22,000 yearly.'
        },
        {
          q: 'Can international students work while studying?',
          a: 'Yes, international students are permitted to work up to 24 hours per week during term time and unrestricted hours during official semester vacations.'
        }
      ]
    };

    countryStore.saveCountry(template);
    setSelectedSlug(newSlug);
    setEditForm(template);
    showNotification(`New country "${template.name}" created!`);
  };

  const handleSaveForm = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!editForm) return;

    countryStore.saveCountry(editForm);
    showNotification(`Saved changes for "${editForm.name}" successfully!`);
  };

  const handleDeleteCountry = (slug: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete "${name}"? This cannot be undone.`)) {
      countryStore.deleteCountry(slug);
      if (selectedSlug === slug) {
        setSelectedSlug(null);
        setEditForm(null);
      }
      showNotification(`Deleted "${name}".`, 'error');
    }
  };

  const handleTogglePublish = (country: CountryPageData) => {
    const updated = { ...country, isPublished: !country.isPublished };
    countryStore.saveCountry(updated);
    if (editForm && editForm.slug === country.slug) {
      setEditForm(updated);
    }
    showNotification(`${country.name} is now ${updated.isPublished ? 'Published' : 'Unpublished'}.`);
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all country pages to IQ Overseas factory defaults? Any custom edits will be overwritten.')) {
      countryStore.saveAll(INITIAL_COUNTRIES_DATA);
      setSelectedSlug(null);
      setEditForm(null);
      showNotification('Reset all countries to official default dataset.');
    }
  };

  const handleExportBackup = () => {
    const data = countryStore.getAll();
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `iq-overseas-study-abroad-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showNotification('Exported database backup successfully.');
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (typeof parsed === 'object') {
          countryStore.saveAll(parsed);
          setSelectedSlug(null);
          setEditForm(null);
          showNotification('Successfully imported country database.');
        } else {
          showNotification('Invalid JSON file format.', 'error');
        }
      } catch (err) {
        showNotification('Error parsing JSON file.', 'error');
      }
    };
    reader.readAsText(file);
  };

  // Image file to base64 helper
  const handleBannerImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editForm) return;

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const base64 = uploadEvent.target?.result as string;
      setEditForm({
        ...editForm,
        heroBanner: {
          ...editForm.heroBanner,
          imageUrl: base64
        }
      });
      showNotification('Banner image updated! Click Save Changes to commit.');
    };
    reader.readAsDataURL(file);
  };

  const filteredCountries = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans pb-20">
      
      {/* Admin Top Navigation Bar */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <span className="w-8 h-8 rounded-lg bg-iq-red text-white flex items-center justify-center font-black text-sm">
                IQ
              </span>
              <div>
                <div className="font-extrabold text-sm sm:text-base leading-none">IQ OVERSEAS</div>
                <div className="text-[10px] text-slate-400 font-mono tracking-wider">ADMINISTRATION PORTAL</div>
              </div>
            </Link>
            <span className="text-slate-600">/</span>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200">
              <Globe className="w-4 h-4 text-iq-red" />
              <span>Study Abroad CMS</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <Link
              to="/"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Site</span>
            </Link>

            <button
              onClick={handleExportBackup}
              title="Download full JSON backup of all country content"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Backup</span>
            </button>

            <label
              title="Upload JSON database backup"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Import</span>
              <input type="file" accept=".json" onChange={handleImportBackup} className="hidden" />
            </label>

            <button
              onClick={handleResetDefaults}
              title="Reset all 10 countries to factory defaults"
              className="px-3 py-1.5 rounded-lg bg-rose-950/80 hover:bg-rose-900 text-rose-300 text-xs font-bold transition-colors inline-flex items-center gap-1.5 cursor-pointer border border-rose-800/60"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>
          </div>
        </div>
      </header>

      {/* Notification Toast */}
      {notification && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl shadow-2xl text-xs sm:text-sm font-bold flex items-center gap-2 text-white animate-in slide-in-from-bottom duration-300 ${
            notification.type === 'error' ? 'bg-rose-600' : 'bg-emerald-600'
          }`}
        >
          {notification.type === 'error' ? <AlertCircle className="w-4 h-4" /> : <Check className="w-4 h-4" />}
          <span>{notification.message}</span>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Intro Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-iq-navy flex items-center gap-2.5">
              <span>Study Abroad Destination Management</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                {countries.length} Destinations Active
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Manage all 17 content sections, quick facts, courses, fees, banners, and FAQs. Changes update in real-time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleAddNew}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-iq-red hover:bg-iq-red-hover text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Country</span>
            </button>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Countries List */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Search Box */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3 flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-xs sm:text-sm focus:outline-none"
              />
            </div>

            {/* Country Cards */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden divide-y divide-slate-100">
              <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Destinations Directory ({filteredCountries.length})
                </span>
                <span className="text-[11px] font-bold text-slate-400">Order & Status</span>
              </div>

              {filteredCountries.map((c) => {
                const isSelected = selectedSlug === c.slug;
                return (
                  <div
                    key={c.slug}
                    className={`p-4 transition-all duration-200 hover:bg-slate-50 flex items-center justify-between gap-3 ${
                      isSelected ? 'bg-blue-50/60 border-l-4 border-iq-navy' : ''
                    }`}
                  >
                    <div
                      onClick={() => handleSelectCountry(c)}
                      className="flex items-center gap-3 min-w-0 cursor-pointer flex-1"
                    >
                      <div className="w-12 h-9 rounded-lg overflow-hidden bg-slate-200 shrink-0 border border-slate-300 shadow-2xs">
                        <img
                          src={c.heroBanner.imageUrl}
                          alt={c.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-base">{c.flag}</span>
                          <span className="text-xs sm:text-sm font-bold text-iq-navy truncate">
                            {c.name}
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-400 truncate mt-0.5">
                          /study-in-{c.slug}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleTogglePublish(c)}
                        title={c.isPublished ? 'Published (Click to unpublish)' : 'Unpublished (Click to publish)'}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                          c.isPublished
                            ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                            : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                        }`}
                      >
                        {c.isPublished ? 'Active' : 'Draft'}
                      </button>

                      <Link
                        to={`/study-in-${c.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View live country page"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-iq-navy hover:bg-slate-100 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleSelectCountry(c)}
                        title="Edit Country Details"
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          isSelected
                            ? 'text-iq-red bg-red-50'
                            : 'text-slate-400 hover:text-iq-navy hover:bg-slate-100'
                        }`}
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDeleteCountry(c.slug, c.name)}
                        title="Delete Country"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Country Editor */}
          <div className="lg:col-span-8">
            {editForm ? (
              <form onSubmit={handleSaveForm} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                
                {/* Editor Header Bar */}
                <div className="p-5 bg-gradient-to-r from-slate-900 to-iq-navy text-white flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{editForm.flag}</span>
                    <div>
                      <h2 className="text-lg font-black leading-tight flex items-center gap-2">
                        <span>Editing: {editForm.name}</span>
                      </h2>
                      <div className="text-xs text-slate-300 mt-0.5">
                        URL: <span className="text-iq-red font-mono font-bold">/study-in-{editForm.slug}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      to={`/study-in-${editForm.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Live Preview</span>
                    </Link>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-iq-red hover:bg-iq-red-hover text-white text-xs font-black shadow-lg transition-transform transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </div>

                {/* Editor Tab Navigation */}
                <div className="border-b border-slate-200 bg-slate-50 px-4 flex items-center gap-1 overflow-x-auto text-xs font-bold text-slate-600">
                  {[
                    { id: 'basic', label: '1. Basic Info & SEO', icon: Globe },
                    { id: 'banner', label: '2. Hero Banner', icon: ImageIcon },
                    { id: 'intro', label: '3. Introduction', icon: Sparkles },
                    { id: 'quickfacts', label: '4. Quick Facts', icon: Layers },
                    { id: 'landscape', label: '5. Education System', icon: GraduationCap },
                    { id: 'courses', label: '6. Courses & Programs', icon: BookOpen },
                    { id: 'costs', label: '7. Costs & Requirements', icon: DollarSign },
                    { id: 'work', label: '8. Work & PR Rights', icon: Briefcase },
                    { id: 'faqs', label: '9. FAQs (Accordions)', icon: HelpCircle },
                    ...(editForm.slug === 'europe' ? [{ id: 'subdestinations', label: '10. European Hubs', icon: Globe }] : [])
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        type="button"
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-3 py-3 border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors cursor-pointer ${
                          isActive
                            ? 'border-iq-navy text-iq-navy bg-white font-black'
                            : 'border-transparent hover:text-iq-navy hover:bg-slate-100/60'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Editor Tab Content */}
                <div className="p-6 space-y-6">
                  
                  {/* TAB 1: BASIC INFO & SEO */}
                  {activeTab === 'basic' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Country Name</label>
                          <input
                            type="text"
                            value={editForm.name}
                            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-iq-navy/20"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Slug (URL)</label>
                          <input
                            type="text"
                            value={editForm.slug}
                            onChange={(e) => setEditForm({ ...editForm, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-mono focus:ring-2 focus:ring-iq-navy/20"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Flag</label>
                            <input
                              type="text"
                              value={editForm.flag}
                              onChange={(e) => setEditForm({ ...editForm, flag: e.target.value })}
                              className="w-full p-2.5 rounded-lg border border-slate-300 text-center text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">Order</label>
                            <input
                              type="number"
                              value={editForm.order}
                              onChange={(e) => setEditForm({ ...editForm, order: parseInt(e.target.value) || 1 })}
                              className="w-full p-2.5 rounded-lg border border-slate-300 text-center text-xs"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 pt-2 border-t border-slate-100">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">SEO Meta Title</label>
                          <input
                            type="text"
                            value={editForm.seoTitle}
                            onChange={(e) => setEditForm({ ...editForm, seoTitle: e.target.value })}
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">SEO Meta Description</label>
                          <textarea
                            rows={3}
                            value={editForm.seoDescription}
                            onChange={(e) => setEditForm({ ...editForm, seoDescription: e.target.value })}
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: HERO BANNER & IMAGE */}
                  {activeTab === 'banner' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Banner Image URL</label>
                        <input
                          type="text"
                          value={editForm.heroBanner.imageUrl}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              heroBanner: { ...editForm.heroBanner, imageUrl: e.target.value }
                            })
                          }
                          className="w-full p-2.5 rounded-lg border border-slate-300 text-xs font-mono mb-2"
                        />
                        <div className="flex items-center gap-3">
                          <label className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer border border-slate-300">
                            <Upload className="w-3.5 h-3.5 text-slate-500" />
                            <span>Upload Local Image File</span>
                            <input type="file" accept="image/*" onChange={handleBannerImageUpload} className="hidden" />
                          </label>
                          <span className="text-[11px] text-slate-400">Recommended: 1920x600 high-res landmark photo</span>
                        </div>
                      </div>

                      {/* Image Preview */}
                      <div className="relative h-44 w-full rounded-xl overflow-hidden border border-slate-300 bg-slate-900 shadow-inner">
                        <img
                          src={editForm.heroBanner.imageUrl}
                          alt="Banner Preview"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                          <span className="text-white text-xs font-bold drop-shadow">
                            Preview: {editForm.name} Hero Landmark Banner
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Badge Text</label>
                          <input
                            type="text"
                            value={editForm.heroBanner.badge}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                heroBanner: { ...editForm.heroBanner, badge: e.target.value }
                              })
                            }
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Hero Subtitle</label>
                          <input
                            type="text"
                            value={editForm.heroBanner.subtitle}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                heroBanner: { ...editForm.heroBanner, subtitle: e.target.value }
                              })
                            }
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Hero Headline</label>
                        <input
                          type="text"
                          value={editForm.heroBanner.headline}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              heroBanner: { ...editForm.heroBanner, headline: e.target.value }
                            })
                          }
                          className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-bold"
                        />
                      </div>
                    </div>
                  )}

                  {/* TAB 3: INTRODUCTION */}
                  {activeTab === 'intro' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Heading</label>
                        <input
                          type="text"
                          value={editForm.introduction.heading}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              introduction: { ...editForm.introduction, heading: e.target.value }
                            })
                          }
                          className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-bold"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Subheading</label>
                        <input
                          type="text"
                          value={editForm.introduction.subheading || ''}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              introduction: { ...editForm.introduction, subheading: e.target.value }
                            })
                          }
                          className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Paragraph 1</label>
                        <textarea
                          rows={3}
                          value={editForm.introduction.paragraphs[0] || ''}
                          onChange={(e) => {
                            const p = [...editForm.introduction.paragraphs];
                            p[0] = e.target.value;
                            setEditForm({
                              ...editForm,
                              introduction: { ...editForm.introduction, paragraphs: p }
                            });
                          }}
                          className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Paragraph 2</label>
                        <textarea
                          rows={3}
                          value={editForm.introduction.paragraphs[1] || ''}
                          onChange={(e) => {
                            const p = [...editForm.introduction.paragraphs];
                            p[1] = e.target.value;
                            setEditForm({
                              ...editForm,
                              introduction: { ...editForm.introduction, paragraphs: p }
                            });
                          }}
                          className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm"
                        />
                      </div>
                    </div>
                  )}

                  {/* TAB 4: QUICK FACTS */}
                  {activeTab === 'quickfacts' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Capital City</label>
                          <input
                            type="text"
                            value={editForm.quickFacts.capital}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                quickFacts: { ...editForm.quickFacts, capital: e.target.value }
                              })
                            }
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Primary Language</label>
                          <input
                            type="text"
                            value={editForm.quickFacts.language}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                quickFacts: { ...editForm.quickFacts, language: e.target.value }
                              })
                            }
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Currency</label>
                          <input
                            type="text"
                            value={editForm.quickFacts.currency}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                quickFacts: { ...editForm.quickFacts, currency: e.target.value }
                              })
                            }
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Major Intakes</label>
                          <input
                            type="text"
                            value={editForm.quickFacts.popularIntakes}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                quickFacts: { ...editForm.quickFacts, popularIntakes: e.target.value }
                              })
                            }
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Post-Study Work Permit</label>
                          <input
                            type="text"
                            value={editForm.quickFacts.postStudyWork}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                quickFacts: { ...editForm.quickFacts, postStudyWork: e.target.value }
                              })
                            }
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Work Rights (During Study)</label>
                          <input
                            type="text"
                            value={editForm.quickFacts.workRights}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                quickFacts: { ...editForm.quickFacts, workRights: e.target.value }
                              })
                            }
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Average Tuition Fee</label>
                          <input
                            type="text"
                            value={editForm.quickFacts.avgTuitionFee}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                quickFacts: { ...editForm.quickFacts, avgTuitionFee: e.target.value }
                              })
                            }
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Top Courses</label>
                          <input
                            type="text"
                            value={editForm.quickFacts.topCourses}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                quickFacts: { ...editForm.quickFacts, topCourses: e.target.value }
                              })
                            }
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 5: EDUCATION SYSTEM */}
                  {activeTab === 'landscape' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Landscape Overview</label>
                        <textarea
                          rows={3}
                          value={editForm.educationLandscape.intro}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              educationLandscape: { ...editForm.educationLandscape, intro: e.target.value }
                            })
                          }
                          className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm"
                        />
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Undergraduate vs Postgraduate Comparison Table
                        </h4>
                        <div className="space-y-2">
                          {editForm.educationLandscape.comparisonTable.map((row, idx) => (
                            <div key={idx} className="grid grid-cols-12 gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs">
                              <div className="col-span-4">
                                <label className="text-[10px] text-slate-400 font-bold block">Aspect</label>
                                <input
                                  type="text"
                                  value={row.aspect}
                                  onChange={(e) => {
                                    const copy = [...editForm.educationLandscape.comparisonTable];
                                    copy[idx].aspect = e.target.value;
                                    setEditForm({
                                      ...editForm,
                                      educationLandscape: { ...editForm.educationLandscape, comparisonTable: copy }
                                    });
                                  }}
                                  className="w-full p-1.5 rounded bg-white border border-slate-300 font-bold"
                                />
                              </div>
                              <div className="col-span-4">
                                <label className="text-[10px] text-slate-400 font-bold block">Undergraduate</label>
                                <input
                                  type="text"
                                  value={row.undergraduate}
                                  onChange={(e) => {
                                    const copy = [...editForm.educationLandscape.comparisonTable];
                                    copy[idx].undergraduate = e.target.value;
                                    setEditForm({
                                      ...editForm,
                                      educationLandscape: { ...editForm.educationLandscape, comparisonTable: copy }
                                    });
                                  }}
                                  className="w-full p-1.5 rounded bg-white border border-slate-300"
                                />
                              </div>
                              <div className="col-span-4">
                                <label className="text-[10px] text-slate-400 font-bold block">Postgraduate</label>
                                <input
                                  type="text"
                                  value={row.postgraduate}
                                  onChange={(e) => {
                                    const copy = [...editForm.educationLandscape.comparisonTable];
                                    copy[idx].postgraduate = e.target.value;
                                    setEditForm({
                                      ...editForm,
                                      educationLandscape: { ...editForm.educationLandscape, comparisonTable: copy }
                                    });
                                  }}
                                  className="w-full p-1.5 rounded bg-white border border-slate-300"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 6: COURSES & PROGRAMS */}
                  {activeTab === 'courses' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-700 uppercase">
                          Top Study Programs ({editForm.topCourses.length})
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            setEditForm({
                              ...editForm,
                              topCourses: [
                                ...editForm.topCourses,
                                {
                                  id: `course-${Date.now()}`,
                                  title: 'New Program Specialization',
                                  category: 'General',
                                  duration: '2 Years',
                                  careerRoles: ['Specialist', 'Consultant'],
                                  description: 'Comprehensive program details...'
                                }
                              ]
                            });
                          }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add Course</span>
                        </button>
                      </div>

                      <div className="space-y-3">
                        {editForm.topCourses.map((c, idx) => (
                          <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                            <div className="flex items-center justify-between gap-2">
                              <input
                                type="text"
                                value={c.title}
                                onChange={(e) => {
                                  const copy = [...editForm.topCourses];
                                  copy[idx].title = e.target.value;
                                  setEditForm({ ...editForm, topCourses: copy });
                                }}
                                className="w-full p-2 rounded bg-white border border-slate-300 text-xs sm:text-sm font-bold text-iq-navy"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  const copy = editForm.topCourses.filter((_, i) => i !== idx);
                                  setEditForm({ ...editForm, topCourses: copy });
                                }}
                                className="text-rose-500 hover:text-rose-700 p-1"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <input
                                type="text"
                                placeholder="Category"
                                value={c.category}
                                onChange={(e) => {
                                  const copy = [...editForm.topCourses];
                                  copy[idx].category = e.target.value;
                                  setEditForm({ ...editForm, topCourses: copy });
                                }}
                                className="p-1.5 rounded bg-white border border-slate-300"
                              />
                              <input
                                type="text"
                                placeholder="Duration"
                                value={c.duration || ''}
                                onChange={(e) => {
                                  const copy = [...editForm.topCourses];
                                  copy[idx].duration = e.target.value;
                                  setEditForm({ ...editForm, topCourses: copy });
                                }}
                                className="p-1.5 rounded bg-white border border-slate-300"
                              />
                            </div>

                            <textarea
                              rows={2}
                              placeholder="Description & curriculum highlights"
                              value={c.description}
                              onChange={(e) => {
                                const copy = [...editForm.topCourses];
                                copy[idx].description = e.target.value;
                                setEditForm({ ...editForm, topCourses: copy });
                              }}
                              className="w-full p-2 rounded bg-white border border-slate-300 text-xs"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 7: COSTS & REQUIREMENTS */}
                  {activeTab === 'costs' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Undergrad Tuition Range</label>
                          <input
                            type="text"
                            value={editForm.costOfStudying.bachelorsTuition}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                costOfStudying: { ...editForm.costOfStudying, bachelorsTuition: e.target.value }
                              })
                            }
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Postgrad Tuition Range</label>
                          <input
                            type="text"
                            value={editForm.costOfStudying.mastersTuition}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                costOfStudying: { ...editForm.costOfStudying, mastersTuition: e.target.value }
                              })
                            }
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Yearly Living Expenses</label>
                          <input
                            type="text"
                            value={editForm.costOfStudying.livingExpenses}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                costOfStudying: { ...editForm.costOfStudying, livingExpenses: e.target.value }
                              })
                            }
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold"
                          />
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 space-y-3">
                        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          English Language Score Benchmarks
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                            <span className="font-bold block text-slate-800 mb-1">IELTS (PG)</span>
                            <input
                              type="text"
                              value={editForm.englishRequirements.ielts.pg}
                              onChange={(e) =>
                                setEditForm({
                                  ...editForm,
                                  englishRequirements: {
                                    ...editForm.englishRequirements,
                                    ielts: { ...editForm.englishRequirements.ielts, pg: e.target.value }
                                  }
                                })
                              }
                              className="w-full p-1.5 rounded bg-white border border-slate-300"
                            />
                          </div>

                          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                            <span className="font-bold block text-slate-800 mb-1">PTE (PG)</span>
                            <input
                              type="text"
                              value={editForm.englishRequirements.pte.pg}
                              onChange={(e) =>
                                setEditForm({
                                  ...editForm,
                                  englishRequirements: {
                                    ...editForm.englishRequirements,
                                    pte: { ...editForm.englishRequirements.pte, pg: e.target.value }
                                  }
                                })
                              }
                              className="w-full p-1.5 rounded bg-white border border-slate-300"
                            />
                          </div>

                          <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                            <span className="font-bold block text-slate-800 mb-1">TOEFL (PG)</span>
                            <input
                              type="text"
                              value={editForm.englishRequirements.toefl.pg}
                              onChange={(e) =>
                                setEditForm({
                                  ...editForm,
                                  englishRequirements: {
                                    ...editForm.englishRequirements,
                                    toefl: { ...editForm.englishRequirements.toefl, pg: e.target.value }
                                  }
                                })
                              }
                              className="w-full p-1.5 rounded bg-white border border-slate-300"
                            />
                          </div>

                          {editForm.englishRequirements.duolingo && (
                            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                              <span className="font-bold block text-slate-800 mb-1">Duolingo (PG)</span>
                              <input
                                type="text"
                                value={editForm.englishRequirements.duolingo.pg}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    englishRequirements: {
                                      ...editForm.englishRequirements,
                                      duolingo: {
                                        ug: editForm.englishRequirements.duolingo?.ug || '',
                                        pg: e.target.value
                                      }
                                    }
                                  })
                                }
                                className="w-full p-1.5 rounded bg-white border border-slate-300"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 8: WORK & PR RIGHTS */}
                  {activeTab === 'work' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Part-Time Study Hours</label>
                          <input
                            type="text"
                            value={editForm.workOpportunities.partTimeRules}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                workOpportunities: { ...editForm.workOpportunities, partTimeRules: e.target.value }
                              })
                            }
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Minimum Hourly Wage</label>
                          <input
                            type="text"
                            value={editForm.workOpportunities.minimumWage}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                workOpportunities: { ...editForm.workOpportunities, minimumWage: e.target.value }
                              })
                            }
                            className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Post-Study Work Permit Duration</label>
                        <input
                          type="text"
                          value={editForm.workOpportunities.postStudyWorkVisa}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              workOpportunities: { ...editForm.workOpportunities, postStudyWorkVisa: e.target.value }
                            })
                          }
                          className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-bold text-emerald-700"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">PR Pathways Summary</label>
                        <textarea
                          rows={3}
                          value={editForm.prPathways.intro}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              prPathways: { ...editForm.prPathways, intro: e.target.value }
                            })
                          }
                          className="w-full p-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm"
                        />
                      </div>
                    </div>
                  )}

                  {/* TAB 9: FAQS */}
                  {activeTab === 'faqs' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-700 uppercase">
                          Frequently Asked Questions ({editForm.faqs.length})
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            setEditForm({
                              ...editForm,
                              faqs: [
                                ...editForm.faqs,
                                {
                                  q: 'New Question regarding study in this destination?',
                                  a: 'Detailed factual response answering student query...'
                                }
                              ]
                            });
                          }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add FAQ</span>
                        </button>
                      </div>

                      <div className="space-y-3">
                        {editForm.faqs.map((faq, idx) => (
                          <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                            <div className="flex items-center justify-between gap-2">
                              <input
                                type="text"
                                value={faq.q}
                                onChange={(e) => {
                                  const copy = [...editForm.faqs];
                                  copy[idx].q = e.target.value;
                                  setEditForm({ ...editForm, faqs: copy });
                                }}
                                className="w-full p-2 rounded bg-white border border-slate-300 text-xs sm:text-sm font-bold text-iq-navy"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  const copy = editForm.faqs.filter((_, i) => i !== idx);
                                  setEditForm({ ...editForm, faqs: copy });
                                }}
                                className="text-rose-500 hover:text-rose-700 p-1"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <textarea
                              rows={3}
                              value={faq.a}
                              onChange={(e) => {
                                const copy = [...editForm.faqs];
                                copy[idx].a = e.target.value;
                                setEditForm({ ...editForm, faqs: copy });
                              }}
                              className="w-full p-2 rounded bg-white border border-slate-300 text-xs"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 10: EUROPEAN HUBS (SUB-DESTINATIONS) */}
                  {activeTab === 'subdestinations' && editForm.subDestinations && (
                    <div className="space-y-4">
                      <div className="text-xs text-slate-500 mb-2">
                        Configure European destination cards (Germany, France, Sweden, Finland, Denmark, Switzerland).
                      </div>
                      <div className="space-y-4">
                        {editForm.subDestinations.map((sub, idx) => (
                          <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xl">{sub.flag}</span>
                              <input
                                type="text"
                                value={sub.country}
                                onChange={(e) => {
                                  const copy = [...(editForm.subDestinations || [])];
                                  copy[idx].country = e.target.value;
                                  setEditForm({ ...editForm, subDestinations: copy });
                                }}
                                className="p-1.5 rounded bg-white border border-slate-300 text-xs sm:text-sm font-bold flex-1"
                              />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                              <div>
                                <label className="text-[10px] text-slate-400 block font-bold">Image URL</label>
                                <input
                                  type="text"
                                  value={sub.image}
                                  onChange={(e) => {
                                    const copy = [...(editForm.subDestinations || [])];
                                    copy[idx].image = e.target.value;
                                    setEditForm({ ...editForm, subDestinations: copy });
                                  }}
                                  className="w-full p-1.5 rounded bg-white border border-slate-300 font-mono text-[11px]"
                                />
                              </div>
                              <div>
                                <label className="text-[10px] text-slate-400 block font-bold">Capital</label>
                                <input
                                  type="text"
                                  value={sub.capital}
                                  onChange={(e) => {
                                    const copy = [...(editForm.subDestinations || [])];
                                    copy[idx].capital = e.target.value;
                                    setEditForm({ ...editForm, subDestinations: copy });
                                  }}
                                  className="w-full p-1.5 rounded bg-white border border-slate-300"
                                />
                              </div>
                            </div>
                            <textarea
                              rows={2}
                              value={sub.description}
                              onChange={(e) => {
                                const copy = [...(editForm.subDestinations || [])];
                                copy[idx].description = e.target.value;
                                setEditForm({ ...editForm, subDestinations: copy });
                              }}
                              className="w-full p-2 rounded bg-white border border-slate-300 text-xs"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Save button row at bottom of form */}
                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-xs text-slate-400">
                      All changes are persisted to browser local storage & immediate preview.
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-iq-red hover:bg-iq-red-hover text-white text-xs sm:text-sm font-black shadow-lg transition-transform transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save All Changes</span>
                    </button>
                  </div>

                </div>
              </form>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-iq-navy mx-auto flex items-center justify-center">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-iq-navy">Select a Country to Edit</h3>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1">
                    Choose one of the 10 study destinations from the directory on the left or create a brand new country page.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddNew}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-iq-red hover:bg-iq-red-hover text-white text-xs sm:text-sm font-bold rounded-xl shadow transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create New Country</span>
                </button>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
