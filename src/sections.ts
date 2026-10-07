// Single source of truth for page sections: id (used as the anchor and
// scroll target), the nav label, and the in-section heading. Index numbers
// are derived from array position, so reordering/adding a section here is
// all that's needed  nothing to renumber by hand elsewhere.

export type SectionMeta = {
  id: string
  navLabel: string
  heading: string
}

const sectionList = [
  { id: 'about', navLabel: 'About', heading: 'About' },
  { id: 'skills', navLabel: 'Skills', heading: 'Skills' },
  { id: 'experience', navLabel: 'Experience', heading: 'Experience' },
  { id: 'projects', navLabel: 'Projects', heading: 'Personal Projects & Hobbies' },
  { id: 'contact', navLabel: 'Contact', heading: 'Contact' },
] as const satisfies readonly SectionMeta[]

export const sections = sectionList

export function sectionIndex(id: string): string {
  const position = sectionList.findIndex((s) => s.id === id)
  if (position === -1) throw new Error(`Unknown section id: "${id}"`)
  return String(position + 1).padStart(2, '0')
}
