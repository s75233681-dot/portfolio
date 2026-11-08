const links = [['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'],
  ['security', 'Security lab'], ['music', 'Music'], ['contact', 'Contact']]

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a className="brand" href="#top">Simon<span>.</span></a>
        <nav className="links" aria-label="Sections">
          {links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
      </div>
    </header>
  )
}
