import React from 'react';
import {
  Compass,
  FileCheck,
  Banknote,
  Luggage,
  GraduationCap,
  Plane,
  Briefcase,
  BookOpen,
  Camera,
  UserPlus,
  Shield,
  Users,
  Star,
  Handshake,
  UserCheck,
  Trophy,
  Globe,
  Search,
  Calendar,
  FileText,
  PlaneTakeoff,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  Headphones,
  Award,
  Sparkles,
  LucideProps
} from 'lucide-react';

interface DynamicIconProps extends LucideProps {
  name: string;
}

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Compass,
  FileCheck,
  Banknote,
  Luggage,
  GraduationCap,
  Plane,
  Briefcase,
  BookOpen,
  Camera,
  UserPlus,
  Shield,
  Users,
  Star,
  Handshake,
  UserCheck,
  Trophy,
  Globe,
  Search,
  Calendar,
  FileText,
  PlaneTakeoff,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  Headphones,
  Award,
  Sparkles
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name] || Globe;
  return <IconComponent {...props} />;
};
