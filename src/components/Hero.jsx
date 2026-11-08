import { phrases, profile } from '../data.js'
import Typewriter from './Typewriter.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-art" aria-hidden="true">
      </div>
      <div className="wrap">
        <div className="hero-content">
          <p className="eyebrow fade" style={{ '--d': '.05s' }}>Hi, I’m Simon</p>
          <h1 aria-label={`${profile.name}, computing enthusiast`}>
            <span style={{ '--d': '.1s' }}>Computing</span>
            <span style={{ '--d': '.28s' }}>Enthusiast</span>
          </h1>
          <p className="role fade" style={{ '--d': '.45s' }} aria-label="Developer, cybersecurity learner, student and keyboard player">
            <Typewriter phrases={phrases} />
          </p>
          <p className="lede fade" style={{ '--d': '.55s' }}>
            I make useful things for the web, explore how systems work, and learn how to keep them secure.
          </p>
          <div className="cta fade" style={{ '--d': '.65s' }}>
            <a className="btn solid" href="#projects">
              Explore my work
              <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M5 15 15 5M6 5h9v9" /></svg>
            </a>
            <a className="btn" href="#contact">Say hello</a>
          </div>
        </div>
        <dl className="meta fade" style={{ '--d': '1.2s' }}>
          <div><dt>Goal</dt><dd>Cybersecurity analyst</dd></div>
          <div><dt>Projects built</dt><dd>7</dd></div>
          <div><dt>Currently</dt><dd>Learning Kali Linux</dd></div>
        </dl>
      </div>
    </section>
  )
}
