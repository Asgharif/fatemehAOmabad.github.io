import { experience } from '../content'
import SectionHeading from './SectionHeading'

const SECTION_ID = 'experience'

export default function Experience() {
  return (
    <section id={SECTION_ID} className="section">
      <SectionHeading id={SECTION_ID} />
      <ol className="resume-list">
        {experience.map((entry) => (
          <li key={`${entry.company}-${entry.role}`} className="resume-entry">
            <div className="resume-entry-header">
              <div>
                <h3>{entry.role}</h3>
                <p className="resume-company">{entry.company}</p>
              </div>
              <span className="resume-period">{entry.period}</span>
            </div>
            <ul className="resume-bullets">
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
