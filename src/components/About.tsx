import { about } from '../content'
import SectionHeading from './SectionHeading'

const SECTION_ID = 'about'

export default function About() {
  const paragraphs = about.trim().split(/\n\s*\n/)

  return (
    <section id={SECTION_ID} className="section">
      <SectionHeading id={SECTION_ID} />
      <div className="about-body">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph.replace(/\s+/g, ' ').trim()}</p>
        ))}
      </div>
    </section>
  )
}
