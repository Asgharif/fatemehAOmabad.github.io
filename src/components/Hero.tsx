import { profile } from '../content'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <p className="eyebrow">Hi, I'm</p>
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.title}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View Projects
          </a>
          <a className="btn btn-secondary" href="#contact">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="hero-photo-ring">
        <img className="hero-photo" src={profile.photo} alt={profile.name} />
      </div>
    </section>
  )
}
