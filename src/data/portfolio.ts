export type LinkItem = {
  label: string;
  href: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type TimelineItem = {
  title: string;
  company?: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
};

export type ProjectLink = {
  github: string;
  demo: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  impact: string;
  category: string;
  links: ProjectLink;
};

export type EducationItem = {
  school: string;
  program: string;
  period: string;
  details: string;
};

export type AwardItem = {
  title: string;
  issuer?: string;
  description: string;
};

export type BlogSummary = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
};

export type PortfolioContent = {
  name: string;
  role: string;
  location: string;
  openTo?: string[];
  hero: {
    headline: string;
    subtext: string;
    ctas: LinkItem[];
  };
  about: {
    intro: string;
    story: string[];
  };
  skills: SkillGroup[];
  experience: TimelineItem[];
  projects: Project[];
  startup: {
    headline: string;
    details: string[];
  };
  awards: AwardItem[];
  education: EducationItem[];
  certifications?: {
    name: string;
    issuer?: string;
    date?: string;
    credentialId?: string;
  }[];
  interests: string[];
  contact: {
    email: string;
    phone?: string;
    socials: LinkItem[];
  };
  blog: BlogSummary[];
};

export const portfolio: PortfolioContent = {
  name: 'Vishal Singh',
  role: 'MS CS @ BU | Ex- SWE II at Appinventiv | Ex- SDE I at Newgen Software',
  location: 'Boston, Massachusetts, United States',
  openTo: ['Artificial Intelligence Intern', 'Machine Learning Intern', 'Software Engineer Intern'],
  hero: {
    headline: 'Front-end engineer growing into AI.',
    subtext:
      'I build reliable web experiences with React, Next.js, and TypeScript. I am exploring ML and computer vision through practical projects.',
    ctas: [
      { label: 'View projects', href: '#projects' },
      { label: 'Download resume', href: '/resume' },
    ],
  },
  about: {
    intro: 'I am a Boston based MS CS student who enjoys building practical software with clear UX.',
    story: [
      'At Appinventiv and Newgen I worked on enterprise products and dashboards that needed predictable performance and clean UI patterns.',
      'I like pairing strong front-end foundations with AI and data driven features when they add real value.',
      'Open to internships in AI, ML, and software engineering where I can ship dependable experiences.',
    ],
  },
  skills: [
    {
      category: 'Front-end',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Zod', 'JSON'],
    },
    {
      category: 'Architecture',
      items: ['Component systems', 'Design systems', 'Server Actions', 'API integration', 'REST APIs', 'Performance tuning', 'Accessibility'],
    },
    {
      category: 'AI / Data',
      items: ['Python', 'Computer vision basics', 'OpenCV', 'Edge AI prototypes', 'Data storytelling', 'Analytics dashboards'],
    },
    {
      category: 'Product',
      items: ['Rapid prototyping', 'User interviews', 'Zero-to-one delivery', 'Mentoring juniors', 'Documentation'],
    },
  ],
  experience: [
    {
      title: 'Senior Software Engineer II',
      company: 'Appinventiv',
      period: 'Sep 2023 - Aug 2025',
      location: 'Noida, Uttar Pradesh, India',
      description: 'Building software products with a focus on dependable delivery and clear UI.',
      highlights: [
        'Worked on enterprise grade features with predictable performance.',
        'Partnered with teams to keep front-end patterns consistent across modules.',
      ],
    },
    {
      title: 'Senior Software Development Engineer',
      company: 'Newgen Software',
      period: 'Apr 2023 - Sep 2023',
      location: 'Noida, Uttar Pradesh, India',
      description: 'Contributed to product teams shipping web experiences for enterprise users.',
      highlights: [
        'Handled feature delivery and maintenance for web modules.',
        'Kept UI states simple to reduce support load.',
      ],
    },
    {
      title: 'Software Development Engineer I',
      company: 'Newgen Software',
      period: 'Feb 2022 - Apr 2023',
      location: 'Noida, Uttar Pradesh, India',
      description: 'Built and supported web product features with an eye on stability.',
      highlights: [
        'Implemented UI flows with attention to error handling and accessibility basics.',
        'Coordinated with backend teams for REST API integration.',
      ],
    },
    {
      title: 'Associate Software Developer',
      company: 'Thoughts2Binary Consulting & Solutions',
      period: 'Feb 2021 - Feb 2022',
      location: 'Gurugram, Haryana, India',
      description: 'Helped modernise a B2B ecommerce product and standardise UI components.',
      highlights: [
        'Revamped a B2B ecommerce product from Angular to React.',
        'Built reusable components to keep the look and feel consistent.',
      ],
    },
    {
      title: 'Dell Campassador',
      company: 'Dell',
      period: 'Jan 2019 - Jan 2020',
      location: 'Noida Area, India',
      description: 'Campus ambassador experience.',
      highlights: ['TODO: Add specific responsibilities if available.'],
    },
    {
      title: 'Software Engineering Intern',
      company: 'NEC Technologies India Pvt Ltd.',
      period: 'Jun 2019 - Oct 2019',
      location: 'Noida Area, India',
      description: 'Internship supporting energy and networking solutions.',
      highlights: [
        'Worked on GRID STORAGE SOLUTION (GSS) of NEC Energy Solutions, USA.',
        'Contributed to an IoT based advanced router handling large subnet information.',
      ],
    },
  ],
  projects: [
    {
      title: 'Smart Video Analytics System | Computer Vision',
      description:
        'Team project to spot traffic rule violations from live video feeds.',
      tech: ['Python', 'OpenCV', 'Computer Vision'],
      features: [
        'Led a 3 member team to build a smart video analytics system to detect traffic rule violators.',
        'Built a computer vision module to detect seat belt usage from moving vehicles.',
      ],
      impact: 'Helped practice end to end computer vision workflows for safety use cases.',
      category: 'computer-vision',
      links: { github: '#', demo: '#' },
    },
    {
      title: 'Leveraging Internet of Things (IoT) in Defense',
      description:
        'University project to design an IoT based prototype for defense scenarios.',
      tech: ['IoT', 'Sensors', 'Prototyping'],
      features: [
        'Worked in a 4 member team to design an IoT based prototype.',
        'Embedded multiple sensors to capture accurate input data.',
      ],
      impact: 'Built understanding of sensor integration and data flow for field use.',
      category: 'iot',
      links: { github: '#', demo: '#' },
    },
  ],
  startup: {
    headline: 'Built a lean healthcare lab platform from campus corridors',
    details: [
      'Ran scrappy pilots with a handful of labs to prove the booking flow.',
      'Balanced tech and operations by keeping the Android app simple and reliable.',
      'Learned to ship with constraints and keep customer experience humane.',
    ],
  },
  awards: [
    {
      title: 'Pinnacle Performance Award',
      issuer: 'Newgen Software Technologies',
      description: 'Recognised for exceptional contributions and leadership on product releases.',
    },
    {
      title: 'Second Prize - Inter-School Essay Writing Competition',
      description: 'Earned for clear writing and structured arguments early in school.',
    },
    {
      title: 'Coordinator - Association of Computing Activities',
      description: 'Mentored juniors and helped improve the academic environment.',
    },
    {
      title: 'First Prize - Model Presentation "IGNITE 2K19"',
      description: 'Presented a strategic IoT model and won first place.',
    },
  ],
  education: [
    {
      school: 'Boston University',
      program: 'Master of Science (MS), Computer Science',
      period: 'Sep 2025 - May 2027',
      details: 'Graduate studies in Computer Science.',
    },
    {
      school: 'IILM University, Greater Noida',
      program: 'B.Tech, Computer Science',
      period: '2016 - 2020',
      details: 'Grade: 7.7/10.',
    },
  ],
  certifications: [
    {
      name: 'Using Python to Access Web Data',
      issuer: 'Coursera',
      date: 'Jun 2020',
      credentialId: 'GNVHD2HYFTWY',
    },
    {
      name: 'Python Data Structures',
      issuer: 'Coursera',
      date: 'Feb 2020',
      credentialId: 'JKQCU5DFGGZ2',
    },
  ],
  interests: ['ML for healthcare systems', 'Computer vision', 'Road safety analytics', 'Building scalable, accessible front-end systems'],
  contact: {
    email: 'hello@vishal.dev',
    // TODO: Add phone if you want to display it
    socials: [
      { label: 'LinkedIn', href: '#' }, // TODO: add personal LinkedIn link
      { label: 'GitHub', href: '#' }, // TODO: add personal GitHub link
      { label: 'Twitter', href: '#' }, // TODO: add personal Twitter link
    ],
  },
  blog: [
    {
      slug: 'road-safety-analytics',
      title: 'How computer vision can nudge safer roads in India',
      description: 'Notes from a low cost prototype for spotting overspeeding and missing seat belts.',
      date: '2024-06-10',
      readTime: '6 min',
      tags: ['computer vision', 'safety', 'prototyping'],
    },
    {
      slug: 'front-end-to-ai',
      title: 'From front-end craft to AI engineering',
      description: 'Why strong UX skills help when building AI features that people can trust.',
      date: '2024-05-22',
      readTime: '5 min',
      tags: ['front-end', 'ai', 'career'],
    },
  ],
};
