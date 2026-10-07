import { skillGroups } from '../content'
import SectionHeading from './SectionHeading'

const SECTION_ID = 'skills'

export default function Skills() {
  return (
    <section id={SECTION_ID} className="section">
      <SectionHeading id={SECTION_ID} />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.label} className="skills-group">
            <h3>{group.label}</h3>
            <ul className="badge-list">
              {group.skills.map((skill) => (
                <li key={skill} className="badge">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
