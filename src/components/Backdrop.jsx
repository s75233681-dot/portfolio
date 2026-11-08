import { useEffect, useRef } from 'react'

function computer(c, s) {
  c.strokeRect(0, 0, 56 * s, 38 * s)
  c.strokeRect(5 * s, 5 * s, 46 * s, 26 * s)
  c.beginPath()
  c.moveTo(28 * s, 38 * s); c.lineTo(28 * s, 48 * s)
  c.moveTo(16 * s, 48 * s); c.lineTo(40 * s, 48 * s)
  c.stroke()
}

function piano(c, s) {
  const w = 64 * s, h = 30 * s
  c.strokeRect(0, 0, w, h)
  c.beginPath()
  for (let i = 1; i < 8; i++) { c.moveTo((i * w) / 8, 0); c.lineTo((i * w) / 8, h) }
  c.stroke()
  for (const i of [1, 2, 4, 5, 6]) c.fillRect((i * w) / 8 - 3 * s, 0, 6 * s, h * 0.6)
}

function ribbons(c, W, H, t) {
  c.save()
  c.lineWidth = 2
  c.shadowColor = '#2a6bff'
  c.shadowBlur = 24
  for (let k = 0; k < 3; k++) {
    c.beginPath()
    for (let x = 0; x <= W; x += 12) {
      const y = H * (0.3 + k * 0.17) + Math.sin(x / 190 + t / 1400 + k * 1.7) * 60 + Math.sin(x / 70 - t / 900 + k) * 14
      if (x) c.lineTo(x, y); else c.moveTo(x, y)
    }
    c.strokeStyle = `rgba(42,107,255,${0.4 - k * 0.1})`
    c.stroke()
  }
  c.restore()
}

// Slow-drifting line drawings of computers and pianos behind the whole page.
export default function Backdrop() {
  const ref = useRef(null)

  useEffect(() => {
    const cv = ref.current
    const c = cv.getContext('2d')
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let W = 0, H = 0, raf = 0, items = []

    const resize = () => {
      const d = Math.min(window.devicePixelRatio || 1, 2)
      W = window.innerWidth; H = window.innerHeight
      cv.width = W * d; cv.height = H * d
      c.setTransform(d, 0, 0, d, 0, 0)
      const n = Math.max(8, Math.round(W / 140))
      items = Array.from({ length: n }, (_, i) => ({
        kind: i % 2, x: Math.random() * W, y: Math.random() * H,
        s: 0.8 + Math.random() * 0.9, v: 0.15 + Math.random() * 0.25, r: (Math.random() - 0.5) * 0.4,
      }))
    }

    const frame = (t = 0) => {
      c.clearRect(0, 0, W, H)
      ribbons(c, W, H, t)
      for (const it of items) {
        if (!still) it.y -= it.v
        if (it.y < -90) { it.y = H + 60; it.x = Math.random() * W }
        const a = 0.28 * Math.min(1, Math.max(0, it.y / 200))
        c.save()
        c.translate(it.x, it.y); c.rotate(it.r)
        c.lineWidth = 1.2
        c.strokeStyle = it.kind ? `rgba(143,180,255,${a})` : `rgba(42,107,255,${a * 1.4})`
        c.fillStyle = c.strokeStyle
        it.kind ? piano(c, it.s) : computer(c, it.s)
        c.restore()
      }
      if (!still) raf = requestAnimationFrame(frame)
    }

    resize(); frame()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={ref} className="backdrop" aria-hidden="true" />
}
