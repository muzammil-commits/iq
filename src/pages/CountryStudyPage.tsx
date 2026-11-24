import React from 'react';
import { StudyAbroadCountryPage } from './StudyAbroadCountryPage';

interface CountryStudyPageProps {
  degreeLevel: 'bachelors' | 'masters';
  onOpenConsultation: () => void;
}

export const CountryStudyPage: React.FC<CountryStudyPageProps> = ({ degreeLevel, onOpenConsultation }) => {
  return <StudyAbroadCountryPage degreeLevel={degreeLevel} onOpenConsultation={onOpenConsultation} />;
};
