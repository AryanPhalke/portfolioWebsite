import type { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    company: 'Esko',
    role: 'Software Engineer 1 (SDE 1)',
    duration: 'Aug 2025 – Oct 2026',
    location: 'Bangalore, India',
    mode: 'Remote',
    points: [
      'Built Search for Similar CAD files at an internal hackathon, matching designs on metadata attributes and thumbnail similarity. The feature was later shipped to production.',
      'Engineered PDF-to-CAD page extraction so clients can import each page of a multipage PDF separately (React with PDF.js; Spring Boot REST APIs with Apache PDFBox).',
      'Shipped 33+ features and fixes across 10+ releases, and resolved ArtiosCAD–ENOVIA integration issues for the P&G team on ENOVIA 3DEXPERIENCE.',
      'Cut large-file thumbnail load time by 50% (12s → 6s).',
    ],
    tags: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PDF.js', 'PDFBox'],
  },
  {
    company: 'Esko',
    role: 'Software Engineer Intern',
    duration: 'Feb 2025 – Jul 2025',
    location: 'Bangalore, India',
    mode: 'Remote',
    points: [
      'Designed a FileNameQueryEncoder, now used in 4 upload paths, to stop silent failures on ampersand filenames.',
      'Led the dark-theme migration to MUI v5 across products and published a shared component package adopted by two repos.',
      'Eliminated blank thumbnails using WebSocket events and versioned cache-busting.',
      'Improved release quality with JUnit tests, test automation, SonarQube fixes and code reviews.',
    ],
    tags: ['React', 'MUI v5', 'WebSockets', 'JUnit', 'SonarQube'],
  },
  {
    company: 'Emergent Flow Technologies',
    role: 'React Developer',
    duration: 'May 2024 – Oct 2024',
    points: [
      'Developed user-facing features in React and TypeScript.',
      'Fixed 30+ front-end bugs across state management and rendering.',
      'Resolved cross-browser issues so features behaved consistently across browsers.',
    ],
    tags: ['React', 'TypeScript'],
  },
];
