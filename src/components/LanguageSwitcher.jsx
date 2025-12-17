import { useLanguage } from '../contexts/LanguageContext'
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button 
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label="Switch language"
    >
      <div className="speech-bubble">
        <span className="bubble-text">{language === 'en' ? 'EN' : '日本語'}</span>
        <div className="bubble-tail"></div>
      </div>
      <div className="switch-indicator">
        <span className="indicator-dot"></span>
      </div>
    </button>
  )
}

export default LanguageSwitcher
