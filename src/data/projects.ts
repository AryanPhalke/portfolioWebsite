import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'AryanAI',
    tagline: 'Multi-Agent ChatBot',
    description:
      'A full-stack multi-agent AI assistant built on microservices behind an API gateway.',
    highlights: [
      'A LangChain/LangGraph router sends each query to a coding, image or chat agent and streams replies over SSE.',
      'Firebase Google sign-in with Redis-backed sessions.',
      'Generated images are stored in private S3 and served through pre-signed URLs.',
    ],
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'LangGraph', 'Redis', 'AWS S3'],
    date: 'Oct 2026',
    github: 'https://github.com/AryanPhalke',
    featured: true,
  },
  {
    id: 2,
    title: 'VeriFace',
    tagline: 'Deepfake Detection System',
    description:
      'Classifies face frames as real or fake, with results shown in real time.',
    highlights: [
      'Fine-tuned XceptionNet on the DFDC dataset.',
      'Flask inference backend with a React frontend.',
      'Published as “Deepfake Detection with XceptionNet” at ERCICAM-2025.',
    ],
    techStack: ['Python', 'XceptionNet', 'Flask', 'React'],
    date: 'Aug 2024 – Oct 2024',
    github: 'https://github.com/AryanPhalke/veriface',
    featured: true,
  },
  {
    id: 3,
    title: 'College Recommendation System',
    tagline: 'ML + OpenAI API',
    description:
      'Predicts colleges for CET/JEE candidates from percentile, rank, category and other parameters, covering 300+ colleges.',
    highlights: [],
    techStack: ['Python', 'OpenAI API', 'Machine Learning'],
    date: 'Nov 2023',
    github: 'https://github.com/AryanPhalke',
  },
  {
    id: 4,
    title: 'Academic Enquiry Chatbot',
    tagline: 'XGBoost + TF-IDF',
    description:
      'ML chatbot for academic queries, served through a REST API built with Express, Node and MongoDB.',
    highlights: [],
    techStack: ['Express.js', 'Node.js', 'MongoDB', 'XGBoost'],
    date: 'Sep 2023',
    github: 'https://github.com/AryanPhalke/College-Chatbot',
  },
];
