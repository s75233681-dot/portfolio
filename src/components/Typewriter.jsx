import { useEffect, useState } from 'react'

// Types a phrase, holds it, erases it, then moves to the next one.
export default function Typewriter({ phrases, type = 70, erase = 35, hold = 1600 }) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = phrases[i]
    let delay = deleting ? erase : type
    if (!deleting && text === full) delay = hold
    if (deleting && text === '') delay = 350
    const t = setTimeout(() => {
      if (!deleting && text === full) setDeleting(true)
      else if (deleting && text === '') { setDeleting(false); setI((i + 1) % phrases.length) }
      else setText(full.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, i, phrases, type, erase, hold])

  return <span className="tw">{text}<i className="cur" /></span>
}
