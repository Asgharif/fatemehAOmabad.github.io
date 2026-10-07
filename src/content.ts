export const profile = {
  name: 'Fatemeh A Omabad',
  title: 'Full-Stack Software Engineer',
  tagline: 'Full-stack engineer building with React, Angular, Python & Django — and designing microservices systems.',
  email: 'fatemehAOmabad@gmail.com',
  photo: new URL('./assets/profile.png', import.meta.url).href,
  links: {
    github: 'https://github.com/Asgharif',
    linkedin: undefined as string | undefined,
  },
}

export const about = `I'm a full-stack software engineer who has worked across the stack —
React and Angular on the frontend, Python, Django, and C++ on the backend — building
production applications and microservices-based systems. At MARS Bioimaging I built
applications in React, C++, and Python; at the University of Canterbury I worked with
Angular and Django, where I developed a strong interest in system design and
microservices architecture.

My path into engineering started in physics: a Bachelor's, Master's, and PhD, where I
developed image processing algorithms and software to improve image quality in
motion-degraded medical scans. That background is where my problem-solving instincts
come from, and it's part of what I bring to engineering work today — I'm happiest when
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
    period: 'Add dates',
    bullets: [
      'Designed and developed microservices-based systems using Angular, Django, and Python.',
      'Run and deploy containerized services with Docker and AWS, with CI/CD pipelines for delivery.',
      'Use Git-based workflows (GitHub, GitLab, Bitbucket) and AI-assisted tooling to automate daily development tasks.',
    ],
  },
  {
    company: 'MARS Bioimaging',
    role: 'Software Engineer',
    period: 'Add dates',
    bullets: [
      'Built medical imaging applications using React, C++, and Python.',
      'Worked with Docker, running scripts to manage containers.',
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
}

export const personalProjects: Project[] = []

export const hobbies: string[] = []
