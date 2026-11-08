import Section from './Section.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="Grouped by what I actually do.">
      <div className="skill-grid">
        {skills.map((g) => (
          <div key={g.title}>
            <h3>{g.title}</h3>
            <ul>
              {g.items.map(([name, note]) => (
                <li key={name}><strong>{name}</strong><span>{note}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
