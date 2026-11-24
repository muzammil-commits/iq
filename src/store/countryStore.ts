import { useState, useEffect } from 'react';
import { CountryPageData } from '../types/studyAbroad';
import { INITIAL_COUNTRIES_DATA } from '../data/studyAbroadData';

const STORAGE_KEY = 'iq_overseas_study_abroad_countries';
const UPDATE_EVENT = 'iq_country_data_updated';

// Helper to normalize country slugs
export const normalizeCountrySlug = (slug?: string): string => {
  if (!slug) return 'australia';
  let s = slug.toLowerCase().trim();
  s = s.replace('.html', '');
  s = s.replace(/^study-in-/, '');
  s = s.replace(/^bachelors-degree-in-(the-)?/, '');
  s = s.replace(/^bachelors-in-/, '');
  s = s.replace(/^masters-degree-in-(the-)?/, '');
  s = s.replace(/^masters-in-/, '');
  s = s.replace(/^bachelors-/, '');
  s = s.replace(/^masters-/, '');

  if (s === 'united-kingdom' || s === 'great-britain' || s === 'gb') return 'uk';
  if (s === 'united-states' || s === 'united-states-of-america' || s === 'us') return 'usa';
  if (s === 'nz') return 'new-zealand';
  if (s === 'uae' || s === 'dubai-uae') return 'dubai';
  if (s === 'germany' || s === 'france') return 'europe';

  return s;
};

// Storage operations
export const countryStore = {
  // Get all countries map
  getAll(): Record<string, CountryPageData> {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === 'object' && Object.keys(parsed).length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error reading country data from localStorage:', e);
    }
    // Initialize if empty
    this.saveAll(INITIAL_COUNTRIES_DATA);
    return INITIAL_COUNTRIES_DATA;
  },

  // Save full map
  saveAll(data: Record<string, CountryPageData>) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      window.dispatchEvent(new CustomEvent(UPDATE_EVENT));
    } catch (e) {
      console.error('Error saving country data to localStorage:', e);
    }
  },

  // Get list sorted by order
  getList(): CountryPageData[] {
    const all = this.getAll();
    return Object.values(all).sort((a, b) => a.order - b.order);
  },

  // Get single country by slug or ID
  getBySlug(slug?: string): CountryPageData | undefined {
    if (!slug) return undefined;
    const normalized = normalizeCountrySlug(slug);
    const all = this.getAll();
    
    // Direct slug match
    if (all[normalized]) return all[normalized];

    // Find by slug property or id
    return Object.values(all).find(
      (c) => c.slug === normalized || c.id === slug || normalizeCountrySlug(c.name) === normalized
    );
  },

  // Update or insert single country
  saveCountry(country: CountryPageData) {
    const all = this.getAll();
    all[country.slug] = country;
    this.saveAll(all);
  },

  // Delete country
  deleteCountry(slugOrId: string) {
    const all = this.getAll();
    const normalized = normalizeCountrySlug(slugOrId);
    if (all[normalized]) {
      delete all[normalized];
    } else {
      const found = Object.values(all).find((c) => c.id === slugOrId || c.slug === slugOrId);
      if (found) {
        delete all[found.slug];
      }
    }
    this.saveAll(all);
  },

  // Reset to initial default seed
  resetToDefaults() {
    this.saveAll(INITIAL_COUNTRIES_DATA);
  },

  // Export JSON
  exportJSON(): string {
    return JSON.stringify(this.getAll(), null, 2);
  },

  // Import JSON
  importJSON(jsonString: string): boolean {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && typeof parsed === 'object') {
        this.saveAll(parsed);
        return true;
      }
    } catch (e) {
      console.error('Failed to import country JSON:', e);
    }
    return false;
  }
};

// React hook to access and subscribe to all countries
export const useCountriesList = () => {
  const [countries, setCountries] = useState<CountryPageData[]>(() => countryStore.getList());

  useEffect(() => {
    const handleUpdate = () => {
      setCountries(countryStore.getList());
    };
    window.addEventListener(UPDATE_EVENT, handleUpdate);
    return () => window.removeEventListener(UPDATE_EVENT, handleUpdate);
  }, []);

  return countries;
};

// React hook to access and subscribe to a single country by slug
export const useCountry = (slug?: string) => {
  const [country, setCountry] = useState<CountryPageData | undefined>(() => countryStore.getBySlug(slug));

  useEffect(() => {
    setCountry(countryStore.getBySlug(slug));
    const handleUpdate = () => {
      setCountry(countryStore.getBySlug(slug));
    };
    window.addEventListener(UPDATE_EVENT, handleUpdate);
    return () => window.removeEventListener(UPDATE_EVENT, handleUpdate);
  }, [slug]);

  return country;
};
