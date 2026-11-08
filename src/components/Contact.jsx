import Section from './Section.jsx'
import { profile } from '../data.js'

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch" intro="Email is the best way to reach me.">
      <p className="big">
        Have a project in mind, or a bit of advice for a student heading into cybersecurity? I’d like to hear it.
      </p>
      <a className="mail" href={`mailto:${profile.email}`}>
        <span>{profile.email}</span>
        <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M5 15 15 5M6 5h9v9" /></svg>
      </a>
      <p className="elsewhere">
        Code and experiments:
        <a href={profile.github} target="_blank" rel="noreferrer">
          <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M7 16c-4 1-4-2-6-2m12 4v-3.1a2.7 2.7 0 0 0-.8-2.1c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 16.4 4 4.3 4.3 0 0 0 16.3 1S15.3.7 13 2.4a12 12 0 0 0-6 0C4.7.7 3.7 1 3.7 1A4.3 4.3 0 0 0 3.6 4 4.7 4.7 0 0 0 2.3 7.8c0 4.7 2.8 5.7 5.5 6A2.7 2.7 0 0 0 7 16.1V18" /></svg>
          GitHub
          <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M5 15 15 5M6 5h9v9" /></svg>
        </a>
      </p>
      <ul className="reasons">
        <li>Building a website or app together</li>
        <li>Mentorship or advice on starting in cybersecurity</li>
        <li>Robotics, music tech, or a game idea</li>
      </ul>
    </Section>
  )
}
