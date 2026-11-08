import { useReveal } from '../hooks/useReveal.js'
import { projects } from '../data.js'

export default function Projects() {
  const [ref, seen] = useReveal(0.12)

  return (
    <section id="projects">
      <div ref={ref} className={`wrap sec reveal${seen ? ' is-visible' : ''}`}>
        <header className="sec-head">
          <h2>Projects</h2>
          <p>Seven things I’ve built.</p>
        </header>
        <div className={`cards reveal-stagger${seen ? ' is-visible' : ''}`}>
          {projects.map((p) => (
            <article className="card" key={p.name}>
              <div className={`art v-${p.art}`} aria-hidden="true" />
              <div className="cb">
                <div className="row">
                  <h3>{p.name}</h3>
                  <span className="status">{p.status}</span>
                </div>
                <p>{p.text}</p>
                <ul className="tags">
                  {p.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
