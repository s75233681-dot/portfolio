import Section from './Section.jsx'

const roles = [
  ['Student', 'I study at Wesley Grammar Senior High School, so the problems I build for are close to home.'],
  ['Developer', 'I’ve built and deployed websites, made an app version of School Connect, and finished a run of other projects.'],
  ['Cybersecurity learner', 'I work with Kali Linux and network security concepts, with the goal of becoming a cybersecurity analyst.'],
  ['Problem solver', 'Troubleshooting runs through everything I do, from stubborn multi-boot failures to broken code.'],
]

export default function About() {
  return (
    <Section id="about" title="About" intro="How I got here.">
      <p className="big">
        I learn best by building and fixing real things. Some of it ships as a website, some of it as an
        app, and some of it is just a computer that finally boots.
      </p>
      <dl className="roles">
        {roles.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
      </dl>
      <p className="aside">
        Away from the screen: robotics, music, and a plan to drive long vehicles one day.
      </p>
    </Section>
  )
}
