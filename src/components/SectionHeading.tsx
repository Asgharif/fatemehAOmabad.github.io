import { sections, sectionIndex } from '../sections'

type Props = {
  id: (typeof sections)[number]['id']
}

export default function SectionHeading({ id }: Props) {
  const section = sections.find((s) => s.id === id)
  if (!section) throw new Error(`Unknown section id: "${id}"`)

  return (
    <h2 className="section-heading">
      <span className="section-index">{sectionIndex(id)}</span> {section.heading}
    </h2>
  )
}
