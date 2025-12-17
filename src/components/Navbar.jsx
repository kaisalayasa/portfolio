import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import './Navbar.css'

const Navbar = () => {
  const { language } = useLanguage()
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sections = ['about', 'internship', 'projects', 'hobbies']
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const content = {
    en: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      about: 'About',
      internship: 'Internship',
      projects: 'Projects',
      hobbies: 'Hobbies'
    },
    ja: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      about: '自己紹介',
      internship: 'インターンシップ',
      projects: 'プロジェクト',
      hobbies: '趣味'
    }
  }

  const t = content[language]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-sections">
          <button
            onClick={() => scrollToSection('about')}
            className={`nav-section-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            {t.about}
          </button>
          <button
            onClick={() => scrollToSection('internship')}
            className={`nav-section-link ${activeSection === 'internship' ? 'active' : ''}`}
          >
            {t.internship}
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`nav-section-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            {t.projects}
          </button>
          <button
            onClick={() => scrollToSection('hobbies')}
            className={`nav-section-link ${activeSection === 'hobbies' ? 'active' : ''}`}
          >
            {t.hobbies}
          </button>
        </div>
        <div className="navbar-links">
          <a 
            href="https://github.com/kaisalayasa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link"
          >
            {t.github}
          </a>
          <a 
            href="https://www.linkedin.com/in/qais-alayasa-204b121a2/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link"
          >
            {t.linkedin}
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
