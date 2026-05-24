import type { Project } from "../types";

export const projects: Project[] = [
    {
    id: 1,
    title: 'VeriFace: Deepfake Detection System',
    description:
      'Deepfake detection pipeline using XceptionNet fine-tuned on DDFC dataset. Flask backend + React frontend for real-time predictions.',
    techStack: ['Flask', 'React', 'Python', 'XceptionNet'],
    date: 'Aug 2024 – Oct 2024',
    github: 'https://github.com/AryanPhalke/veriface',
  },
  {
    id: 2,
    title: 'College Recommendation System',
    description:
      'Predicts colleges for CET/JEE candidates using percentile, rank, caste, and other parameters. Integrated OpenAI API for 300+ colleges.',
    techStack: ['Python', 'OpenAI API', 'Machine Learning'],
    date: 'Nov 2023',
    github: 'https://github.com/AryanPhalke',
  },
  {
    id: 3,
    title: 'Academic Enquiry Chatbot',
    description:
      'ML chatbot using XGBoost + TF-IDF for academic queries. RESTful API with Express + Node + MongoDB.',
    techStack: ['Express.js', 'Node.js', 'MongoDB', 'XGBoost'],
    date: 'Sep 2023',
    github: 'https://github.com/AryanPhalke/College-Chatbot',
  },
]