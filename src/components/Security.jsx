import { useEffect, useState } from 'react'
import Section from './Section.jsx'
import { useReveal } from '../hooks/useReveal.js'

const lines = [
  ['cmd', 'whoami'],
  ['out', 'student. builder. future security analyst.'],
  ['cmd', 'cat mindset.txt'],
  ['out', '- understand a system before trying to protect it'],
  ['out', '- change one thing at a time, then test'],
  ['warn', '- only touch systems I own or have permission to test'],
  ['cmd', 'ls ~/learning'],
  ['out', 'kali-linux/  network-security/  operating-systems/  boot-repair/'],
  ['cmd', './next --status'],
  ['out', 'fundamentals first. certifications: planned, none earned yet.'],
]

const path = [
  ['done', 'Installing operating systems', 'Including multi-boot setups and the boot problems they cause.'],
  ['done', 'Managing disks from the terminal', 'Partitions and drives using Windows terminal tools.'],
  ['now', 'Kali Linux and network security', 'Learning the concepts and practising on my own machines.'],
  ['next', 'Deeper networking, then certification', 'Planned. Nothing earned yet.'],
]

function Prompt() { return <b className="ps">simon@kali:~$</b> }

export default function Security() {
  const [ref, seen] = useReveal()
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!seen || n >= lines.length) return
    const t = setTimeout(() => setN(n + 1), lines[n][0] === 'cmd' ? 750 : 260)
    return () => clearTimeout(t)
  }, [seen, n])

  return (
    <Section id="security" title="Security lab" intro="Where I’m heading, and how I practise.">
      <div className="lab">
        <div className="term" ref={ref}>
          <div className="term-bar"><span>simon@kali: ~</span><span className="live">session open</span></div>
          <div className="term-body" aria-label="Terminal showing my security mindset">
            {lines.slice(0, n).map(([k, t], i) =>
              k === 'cmd'
                ? <div key={i}><Prompt /> {t}</div>
                : <div key={i} className={k}>{t}</div>)}
            <div><Prompt /> <span className="cur" /></div>
          </div>
        </div>
        <ol className="path">
          {path.map(([state, title, text]) => (
            <li key={title} className={state}>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
