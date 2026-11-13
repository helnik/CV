export const profile = {
  name: 'Nikos Chelmis',
  fullName: 'Nikolaos Chelmis',
  title: 'Principal Consultant',
  company: 'Microsoft',
  location: 'Athens, Greece',
  email: 'nikos.helmis@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nikoschelmis',
  github: 'https://github.com/helnik',
  summary: 'Engineering leader turning complex business challenges into secure, scalable platforms. From banking transformation to cloud and AI, I connect deep technical expertise with delivery, governance, and people.',
};

export const roles = [
  {
    company: 'Microsoft',
    role: 'Principal Consultant',
    period: 'Feb 2025 - Present',
    team: 'Industry Solutions',
    points: [
      'Lead cross-functional engineering teams delivering enterprise cloud and AI solutions, with a focus on financial services.',
      'Own architecture, execution, and governance for regulated, mission-critical platforms.',
      'Shape technical strategy and pre-sales engagements; mentor engineers and technical leads.',
    ],
    tags: ['AI strategy', 'Azure', 'Engineering leadership'],
  },
  {
    company: 'Microsoft',
    role: 'Senior Technical Consultant',
    period: 'Oct 2022 - Feb 2025',
    team: 'Industry Solutions',
    points: [
      'Delivered enterprise cloud transformations using Azure, APIs, and distributed systems.',
      'Defined target-state architectures and migration strategies with client stakeholders.',
      'Coordinated delivery teams as technical lead across multiple engagements.',
    ],
    tags: ['Cloud transformation', 'Distributed systems'],
  },
  {
    company: 'National Bank of Greece',
    logo: 'logos/nbg-mark.png',
    role: 'Solutions Architect',
    period: 'Apr 2021 - Sep 2022',
    team: 'Digital Transformation Division',
    points: [
      'Led architecture for Internet and Mobile Banking modernization and the Cosmos core banking transition.',
      'Drove microservices adoption and migration of critical banking workloads to Azure.',
      'Defined developer platforms and compliant audit and user-activity tracking systems.',
    ],
    tags: ['Digital banking', 'Microservices', 'Governance'],
  },
  {
    company: 'Deloitte',
    logo: 'logos/deloitte-mark.png',
    role: 'Assistant Manager',
    period: 'Nov 2019 - Mar 2021',
    team: 'CBO, Consulting',
    points: [
      'Led client delivery teams and designed scalable enterprise application architectures.',
      'Translated requirements into solutions and contributed to IT due diligence and RFP responses.',
      'Mentored junior consultants and coordinated delivery workstreams.',
    ],
    tags: ['Architecture', 'Consulting', 'Team leadership'],
  },
  {
    company: 'Agile Actors',
    logo: 'logos/agile-actors.png',
    role: 'Senior Software Engineer',
    period: 'Dec 2014 - Oct 2019',
    team: '.NET Chapter',
    points: [
      'Delivered banking platforms for National Bank of Greece and Qualco.',
      'Built APIs and backend services for payments, loans, and customer-facing capabilities.',
      'Contributed to .NET Core modernization and resilient integration architectures.',
    ],
    tags: ['C# / .NET', 'APIs', 'Banking platforms'],
  },
  {
    company: 'University of Piraeus',
    role: 'Researcher',
    period: 'Dec 2013 - Nov 2015',
    team: 'University of Piraeus Research Center',
    points: [
      'Contributed to European and national research in large-scale data processing and distributed systems.',
      'Built Hadoop and Spark data-processing solutions and scalable cloud backend components.',
    ],
    tags: ['Hadoop', 'Spark', 'Cloud research'],
  },
];

export const education = [
  { degree: 'MSc, Network-Oriented Information Systems', school: 'University of Piraeus', date: 'Jun 2014' },
  { degree: 'BSc, Digital Systems', school: 'University of Piraeus', date: 'May 2012' },
];

export const publications = [
  'NoSQL Database Comparison for e-Health (EMCIS 2015)',
  'Optimized Cloud Resource Management (ComputationWorld 2015)',
  'Cloud Elasticity Business Models (EMCIS 2014)',
];

export const credentialBadges = {
  expert: 'badges/microsoft-expert.svg',
  associate: 'badges/microsoft-associate.svg',
  fundamentals: 'badges/microsoft-fundamentals.svg',
  copilot: 'badges/github-copilot.svg',
  business: 'badges/ai-business-professional.svg',
  transformation: 'badges/ai-transformation-leader.svg',
  listening: 'badges/insightful-listening.png',
  coaching: 'badges/agile-coaching.svg',
  facilitation: 'badges/agile-facilitation.svg',
  scrum: 'badges/professional-scrum-master-i.png',
  strategicCommunication: 'badges/strategic-communication.png',
  stakeholderManagement: 'badges/stakeholder-management.png',
  influence: 'badges/influence.png',
  creativeThinking: 'badges/creative-thinking.png',
} as const;

export type Certification = {
  title: string;
  issuer: string;
  issued: string;
  badge?: keyof typeof credentialBadges;
  category: 'AI' | 'Cloud' | 'DevOps' | 'People';
  source: 'screenshot' | 'cv';
  url: string;
};

// Screenshot issue dates take precedence over the CV.
export const certifications: Certification[] = [
  { title: 'Multi-Agent AI Solutions Expert', issuer: 'Microsoft', issued: '2026-10', badge: 'expert', category: 'AI', source: 'screenshot', url: 'https://learn.microsoft.com/en-us/credentials/certifications/multi-agent-ai-solutions-expert/' },
  { title: 'Agentic AI Business Solutions Architect Expert', issuer: 'Microsoft', issued: '2026-09', badge: 'expert', category: 'AI', source: 'screenshot', url: 'https://learn.microsoft.com/en-us/credentials/certifications/agentic-ai-business-solutions-architect/' },
  { title: 'GitHub Copilot', issuer: 'Microsoft', issued: '2026-09', badge: 'copilot', category: 'AI', source: 'screenshot', url: 'https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/' },
  { title: 'AI Business Professional', issuer: 'Microsoft', issued: '2026-08', badge: 'business', category: 'AI', source: 'screenshot', url: 'https://learn.microsoft.com/en-us/credentials/certifications/ai-business-professional/' },
  { title: 'Azure AI Apps and Agents Developer Associate', issuer: 'Microsoft', issued: '2026-09', badge: 'associate', category: 'AI', source: 'screenshot', url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-and-agents-developer-associate/' },
  { title: 'Professional Scrum Master I', issuer: 'Scrum.org', issued: '2022-04', badge: 'scrum', category: 'People', source: 'cv', url: 'https://www.scrum.org/assessments/professional-scrum-master-i-certification' },
  { title: 'AI Transformation Leader', issuer: 'Microsoft', issued: '2026-03', badge: 'transformation', category: 'AI', source: 'screenshot', url: 'https://learn.microsoft.com/en-us/credentials/certifications/ai-transformation-leader/' },
  { title: 'DevOps Engineer Expert', issuer: 'Microsoft', issued: '2024-07', badge: 'expert', category: 'DevOps', source: 'screenshot', url: 'https://learn.microsoft.com/en-us/credentials/certifications/devops-engineer/' },
  { title: 'Insightful Listening and Situational Fluency', issuer: 'Microsoft', issued: '2024-05', badge: 'listening', category: 'People', source: 'screenshot', url: 'https://www.credly.com/org/microsoft-mcaps-bye/badge/insightful-listening-and-situational-fluency-badge' },
  { title: 'Azure Solutions Architect Expert', issuer: 'Microsoft', issued: '2023-08', badge: 'expert', category: 'Cloud', source: 'screenshot', url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-solutions-architect/' },
  { title: 'Azure Administrator Associate', issuer: 'Microsoft', issued: '2023-08', badge: 'associate', category: 'Cloud', source: 'screenshot', url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/' },
  { title: 'Azure Developer Associate', issuer: 'Microsoft', issued: '2022-11', badge: 'associate', category: 'Cloud', source: 'screenshot', url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/' },
  { title: 'Azure Fundamentals', issuer: 'Microsoft', issued: '2022-04', badge: 'fundamentals', category: 'Cloud', source: 'screenshot', url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/' },
  { title: 'Azure Data Fundamentals', issuer: 'Microsoft', issued: '2022-05', badge: 'fundamentals', category: 'Cloud', source: 'screenshot', url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-data-fundamentals/' },
  { title: 'Azure AI Engineer Associate (AI-102)', issuer: 'Microsoft', issued: '2023-07', badge: 'associate', category: 'AI', source: 'cv', url: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/' },
  { title: 'Agile Coaching', issuer: 'ICAgile', issued: '2023-05', badge: 'coaching', category: 'People', source: 'cv', url: 'https://www.icagile.com/certification/agile-coaching' },
  { title: 'Agile Team Facilitation', issuer: 'ICAgile', issued: '2023-04', badge: 'facilitation', category: 'People', source: 'cv', url: 'https://www.icagile.com/certification/agile-team-facilitation' },
  { title: 'Microsoft Certified Trainer (MCT) 2026', issuer: 'Microsoft', issued: '2026-05', category: 'People', source: 'screenshot', url: 'https://learn.microsoft.com/en-us/credentials/certifications/mct-certification' },
  { title: 'Customer Facing Skills Initiative: Strategic Communication', issuer: 'Microsoft MCAPS Academy', issued: '2022-10', badge: 'strategicCommunication', category: 'People', source: 'screenshot', url: 'https://www.credly.com/org/microsoft-mcaps-bye/badge/customer-facing-skills-initiative-strategic-communication' },
  { title: 'Customer Facing Skills Initiative: Stakeholder Management', issuer: 'Microsoft MCAPS Academy', issued: '2022-10', badge: 'stakeholderManagement', category: 'People', source: 'screenshot', url: 'https://www.credly.com/org/microsoft-mcaps-bye/badge/customer-facing-skills-initiative-stakeholder-management' },
  { title: 'Customer Facing Skills Initiative: Influence', issuer: 'Microsoft MCAPS Academy', issued: '2022-10', badge: 'influence', category: 'People', source: 'screenshot', url: 'https://www.credly.com/org/microsoft-mcaps-bye/badge/customer-facing-skills-initiative-influence' },
  { title: 'Customer Facing Skills Initiative: Creative Thinking', issuer: 'Microsoft MCAPS Academy', issued: '2022-10', badge: 'creativeThinking', category: 'People', source: 'screenshot', url: 'https://www.credly.com/org/microsoft-mcaps-bye/badge/customer-facing-skills-initiative-creative-thinking' },
];

export function monthLabel(value: string) {
  return new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(`${value}-01T00:00:00Z`));
}
