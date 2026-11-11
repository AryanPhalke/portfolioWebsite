export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  date: string;
  github?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location?: string;
  mode?: string;
  points: string[];
  tags: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Achievement {
  kind: string;
  title: string;
  detail: string;
}

export interface Stat {
  value: string;
  label: string;
}

export type Theme = 'light' | 'dark';
