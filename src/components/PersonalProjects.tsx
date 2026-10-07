import { personalProjects, hobbies } from '../content'
import SectionHeading from './SectionHeading'

const SECTION_ID = 'projects'

export default function PersonalProjects() {
  return (
    <section id={SECTION_ID} className="section">
      <SectionHeading id={SECTION_ID} />

      {personalProjects.length > 0 ? (
        <div className="projects-grid">
          {personalProjects.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-card-header">
                <h3>{project.name}</h3>
                <span className="project-period">{project.period}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="badge-list">
                {project.tech.map((tech) => (
                  <li key={tech} className="badge badge-sm">
                    {tech}
                  </li>
                ))}
              </ul>
              {project.link && (
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  View project →
                </a>
              )}
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No personal projects added yet.</p>
          <p className="empty-state-hint">
            Add entries to <code>personalProjects</code> in <code>src/content.ts</code>.
          </p>
        </div>
      )}

      {hobbies.length > 0 && (
        <div className="hobbies">
          <h3>Outside of work</h3>
          <ul className="badge-list">
            {hobbies.map((hobby) => (
              <li key={hobby} className="badge">
                {hobby}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
