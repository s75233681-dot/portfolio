const items = ['Cybersecurity', 'Artificial intelligence', 'Software development', 'Robotics',
  'Music technology', 'Long vehicles', 'Hardware and software troubleshooting']

export default function Ticker() {
  const row = [...items, ...items]
  return (
    <div className="ticker" aria-label={`Interests: ${items.join(', ')}`}>
      <div aria-hidden="true">{row.map((t, i) => <span key={i}>{t}</span>)}</div>
    </div>
  )
}
