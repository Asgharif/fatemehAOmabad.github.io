import { useState } from 'react'
import { profile } from '../content'
import SectionHeading from './SectionHeading'

const SECTION_ID = 'contact'

export default function Contact() {
  const { links } = profile
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard access can be unavailable (older browsers, some embedded
      // views) — the email is still shown as plain selectable text below.
    }
  }

  return (
    <section id={SECTION_ID} className="section section-contact">
      <SectionHeading id={SECTION_ID} />
      <p className="contact-text">
        The best way to reach me is email — I'd love to hear from you.
      </p>
      <div className="contact-email-row">
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <button type="button" className="btn btn-secondary contact-copy" onClick={copyEmail}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      {(links.github || links.linkedin) && (
        <div className="contact-links">
          {links.github && (
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      )}
    </section>
  )
}
