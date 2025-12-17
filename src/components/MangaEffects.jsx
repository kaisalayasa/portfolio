import './MangaEffects.css'

const MangaEffects = ({ type = 'speed-lines', position = 'top-right' }) => {
  if (type === 'speed-lines') {
    return (
      <div className={`manga-speed-lines manga-speed-lines-${position}`}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="200" y2="200" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
          <line x1="20" y1="0" x2="200" y2="180" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
          <line x1="40" y1="0" x2="200" y2="160" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
          <line x1="0" y1="20" x2="180" y2="200" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
          <line x1="0" y1="40" x2="160" y2="200" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
        </svg>
      </div>
    )
  }
  
  if (type === 'dots') {
    return (
      <div className={`manga-dots manga-dots-${position}`}>
        <div className="dot-pattern"></div>
      </div>
    )
  }

  if (type === 'impact') {
    return (
      <div className={`manga-impact manga-impact-${position}`}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.4"/>
          <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
        </svg>
      </div>
    )
  }

  return null
}

export default MangaEffects
