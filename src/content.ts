export const profile = {
  name: 'Fatemeh A Omabad',
  title: 'Full-Stack Software Engineer',
  tagline: 'Full-stack engineer building with React, Angular, Python & Django, and designing microservices systems.',
  email: 'fatemehAOmabad@gmail.com',
  photo: new URL('./assets/profile.png', import.meta.url).href,
  links: {
    github: 'https://github.com/Asgharif',
    linkedin: undefined as string | undefined,
  },
}

export const about = `I'm a full-stack software engineer who has worked across the stack:
React and Angular on the frontend, and Python, Django, and C++ on the backend. I build
production applications and microservices-based systems. At MARS Bioimaging I built
applications in React, C++, and Python; at the University of Canterbury I worked with
Angular and Django, where I developed a strong interest in system design and
microservices architecture.

My path into engineering started in physics: a Bachelor's, Master's, and PhD, where I
developed image processing algorithms and software to improve image quality in
motion-degraded medical scans. That background is where my problem-solving instincts
come from, and it's part of what I bring to engineering work today. I'm happiest when
I'm deep in a hard problem.`

export type SkillGroup = {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  { label: 'Frontend', skills: ['React', 'Angular', 'TypeScript', 'JavaScript'] },
  { label: 'Backend', skills: ['Python', 'Django', 'C++', 'REST APIs'] },
  { label: 'Data', skills: ['PostgreSQL', 'MySQL', 'DBeaver'] },
  { label: 'Cloud & DevOps', skills: ['Docker', 'AWS', 'CI/CD'] },
  { label: 'Version Control', skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket'] },
  { label: 'Testing', skills: ['Unit Testing'] },
  { label: 'Architecture', skills: ['Microservices', 'System Design'] },
  { label: 'Domain', skills: ['Image Processing', 'Algorithm Development', 'Medical Imaging'] },
]

export type ExperienceEntry = {
  company: string
  role: string
  period: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'University of Canterbury',
    role: 'Software Engineer',
    period: '2023 to present',
    bullets: [
      'Designed and developed microservices-based systems using Angular, Django, and Python.',
      'Run and deploy containerized services with Docker and AWS, with CI/CD pipelines for delivery.',
      'Use Git-based workflows (GitHub, GitLab) and AI-assisted tooling to automate daily development tasks.',
    ],
  },
  {
    company: 'MARS Bioimaging',
    role: 'Software Engineer',
    period: '2020 to Jan 2023',
    bullets: [
      'Built medical imaging applications using React, C++, and Python.',
      'Worked with Docker, running scripts to manage containers.',
      'Used Bitbucket for version control.',
      'Brought a scientific research background to production software development.',
    ],
  },
]

export type Project = {
  name: string
  period: string
  description: string
  tech: string[]
  link?: string
  /** A short line shown above the link, e.g. when the code isn't public yet. */
  note?: string
}

export const personalProjects: Project[] = [
  {
    name: 'Tradie Toolkit',
    period: '2026',
    description:
      'Small, useful tools for trades businesses. The first is a tile calculator for a Christchurch tiling business: homeowners add their floors and walls, pick a tile and layout, and see how many tiles and boxes to buy. Nothing they type is stored.',
    tech: ['Angular', 'TypeScript', 'Django', 'Python', 'REST API'],
    link: 'https://github.com/Asgharif/tradie-toolkit',
    note: "The code is private while I give it a final review. It'll be public soon.",
  },
  {
    name: 'Pixel Tiling website',
    period: '2026',
    description:
      'A website for Pixel Tiling, a tiling and waterproofing business in Christchurch. Plain HTML, CSS and JavaScript with no build step, so it loads fast on a phone. It has a filterable gallery of recent jobs, a quote form, a planning guide for homeowners, and business details that Google can read. It links to the tile calculator, which fills in the quote form with the estimate.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SEO', 'Accessibility'],
    note: 'Going live soon at pixeltiling.co.nz.',
  },
]

export const hobbies: string[] = []
