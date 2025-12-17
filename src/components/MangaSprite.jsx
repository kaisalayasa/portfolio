import './MangaSprite.css'

const MangaSprite = ({ type = 'wave' }) => {
  const sprites = {
    wave: (
      <svg className="manga-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="35" r="12" fill="currentColor" opacity="0.9"/>
        <circle cx="70" cy="35" r="12" fill="currentColor" opacity="0.9"/>
        <path d="M 25 60 Q 50 75 75 60" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M 20 50 Q 50 40 80 50" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    thinking: (
      <svg className="manga-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="10" fill="currentColor" opacity="0.9"/>
        <circle cx="70" cy="30" r="10" fill="currentColor" opacity="0.9"/>
        <path d="M 30 50 Q 50 60 70 50" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <circle cx="50" cy="70" r="3" fill="currentColor" opacity="0.6"/>
        <circle cx="45" cy="75" r="2" fill="currentColor" opacity="0.5"/>
        <circle cx="55" cy="75" r="2" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
    excited: (
      <svg className="manga-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="10" fill="currentColor" opacity="0.9"/>
        <circle cx="70" cy="30" r="10" fill="currentColor" opacity="0.9"/>
        <path d="M 25 55 Q 50 70 75 55" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M 20 45 Q 50 35 80 45" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M 15 20 L 25 15 M 85 20 L 75 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    reading: (
      <svg className="manga-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="35" y="25" width="30" height="40" rx="2" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="2"/>
        <line x1="40" y1="35" x2="60" y2="35" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="40" y1="42" x2="60" y2="42" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="40" y1="49" x2="55" y2="49" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="30" cy="20" r="8" fill="currentColor" opacity="0.9"/>
        <circle cx="70" cy="20" r="8" fill="currentColor" opacity="0.9"/>
      </svg>
    ),
    coding: (
      <svg className="manga-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="30" width="40" height="30" rx="3" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2"/>
        <line x1="35" y1="40" x2="45" y2="40" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="35" y1="47" x2="50" y2="47" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="35" y1="54" x2="48" y2="54" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="25" cy="25" r="7" fill="currentColor" opacity="0.9"/>
        <circle cx="75" cy="25" r="7" fill="currentColor" opacity="0.9"/>
      </svg>
    ),
    music: (
      <svg className="manga-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M 35 30 L 35 60 Q 35 70 45 70 Q 55 70 55 60 Q 55 50 45 50" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M 55 30 L 55 60 Q 55 70 65 70 Q 75 70 75 60 Q 75 50 65 50" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <circle cx="30" cy="20" r="7" fill="currentColor" opacity="0.9"/>
        <circle cx="70" cy="20" r="7" fill="currentColor" opacity="0.9"/>
        <path d="M 30 50 Q 50 45 70 50" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    )
  }

  return (
    <span className={`manga-sprite manga-sprite-${type}`}>
      {sprites[type] || sprites.wave}
    </span>
  )
}

export default MangaSprite
