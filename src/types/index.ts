export interface Project{
    id: number;
    title: string;
    description: string;
    techStack: string[];
    date: string ;
    github: string;
    image?: string;
}

export interface ExperienceItem{
    company: string;
    role: string;
    duration: string;
    mode: string;
    points: string[];
}

export interface Skill {
    category: string;
    items: string[];
}

export type Theme = 'light' | 'dark';