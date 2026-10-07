import { sections } from '../sections'

export default function Nav() {
  return (
    <header className="nav">
      <a className="nav-brand" href="#top">
        FO<span className="nav-brand-dot">.</span>
      </a>
      <nav className="nav-links">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`}>
            {section.navLabel}
          </a>
        ))}
      </nav>
    </header>
  )
}
