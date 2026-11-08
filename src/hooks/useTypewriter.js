import { useEffect, useRef, useState } from 'react'

// Types `text` while `active` is true, erases it quickly when it turns false.
export function useTypewriter(text, { active = true, delay = 0, speed = 45, erase = 10 } = {}) {
  const [out, setOut] = useState('')
  const len = useRef(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      len.current = active ? text.length : 0
      setOut(text.slice(0, len.current))
      return
    }
    let id
    const tick = () => {
      if (active && len.current < text.length) len.current += 1
      else if (!active && len.current > 0) len.current -= 1
      else return
      setOut(text.slice(0, len.current))
      id = setTimeout(tick, active ? speed : erase)
    }
    id = setTimeout(tick, active ? delay : 0)
    return () => clearTimeout(id)
  }, [text, active, delay, speed, erase])

  return out
}
