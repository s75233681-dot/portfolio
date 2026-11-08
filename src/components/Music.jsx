import { useRef } from 'react'
import Section from './Section.jsx'

// White keys C4 to E5. `sharp` is the black key to the right of that white key.
const keys = [
  ['C', 261.63, 277.18], ['D', 293.66, 311.13], ['E', 329.63], ['F', 349.23, 369.99],
  ['G', 392.0, 415.3], ['A', 440.0, 466.16], ['B', 493.88], ['C', 523.25, 554.37],
  ['D', 587.33, 622.25], ['E', 659.25],
]

export default function Music() {
  const ctxRef = useRef(null)

  const play = (freq) => {
    if (!ctxRef.current) ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
    const ctx = ctxRef.current
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'triangle'
    osc.frequency.value = freq
    gain.gain.setValueAtTime(0.2, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.3)
    osc.connect(gain).connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 1.4)
  }

  return (
    <Section id="music" title="Keys and code" intro="I play keyboard. Try the one below.">
      <div className="kb" role="group" aria-label="Playable keyboard">
        {keys.map(([note, f, sharp], i) => (
          <div className="kw" key={i}>
            <button className="wk" aria-label={note} onPointerDown={() => play(f)} />
            {sharp && <button className="bk" aria-label={`${note} sharp`} onPointerDown={() => play(sharp)} />}
          </div>
        ))}
      </div>
      <p className="hint">Click or tap the keys. It’s a small oscillator running in your browser.</p>
      <dl className="roles three">
        <div><dt>Music</dt><dd>Practice, timing, and listening closely.</dd></div>
        <div><dt>Technology</dt><dd>Stamic Music GH is where I connect the keyboard to code.</dd></div>
        <div><dt>Creativity</dt><dd>Songs and software both start with a blank space and a decision.</dd></div>
      </dl>
    </Section>
  )
}
