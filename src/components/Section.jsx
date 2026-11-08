import { useReveal } from '../hooks/useReveal.js'

export default function Section({ id, title, intro, children }) {
  const [ref, seen] = useReveal(0.12)

  return (
    <section id={id} className={`section section-${id}`}>
      <div ref={ref} className={`wrap sec reveal${seen ? ' is-visible' : ''}`}>
        <header className="sec-head">
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </header>
        <div>{children}</div>
      </div>
    </section>
  )
}
