import { useLanguage } from '../contexts/LanguageContext'
import './Footer.css'

const Footer = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      text: 'Designed and built with attention to detail and cultural nuance.',
      year: new Date().getFullYear()
    },
    ja: {
      text: '細部と文化的ニュアンスに注意を払って設計・構築されました。',
      year: new Date().getFullYear()
    }
  }

  const t = content[language]

  return (
    <footer className="footer">
      <p className="footer-text">{t.text}</p>
      <p className="footer-year">© {t.year}</p>
    </footer>
  )
}

export default Footer
