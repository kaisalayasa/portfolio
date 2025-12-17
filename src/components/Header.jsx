import { useLanguage } from '../contexts/LanguageContext'
import './Header.css'

const Header = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      nav: {
        about: 'About',
        projects: 'Projects',
        hobbies: 'Hobbies',
      }
    },
    ja: {
      nav: {
        about: '自己紹介',
        projects: 'プロジェクト',
        hobbies: '趣味',
      }
    }
  }

  const t = content[language]

  return (
    <header className="header">
      <nav className="nav">
        <a href="#about" className="nav-link">{t.nav.about}</a>
        <a href="#projects" className="nav-link">{t.nav.projects}</a>
        <a href="#hobbies" className="nav-link">{t.nav.hobbies}</a>
      </nav>
    </header>
  )
}

export default Header
