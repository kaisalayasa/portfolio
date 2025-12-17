import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import MangaSprite from './MangaSprite'
import MangaEffects from './MangaEffects'
import './Hero.css'
import portrait from '../../public/images/portrait.jpg'

const Hero = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Software Engineer',
      subtitle: 'At the intersection of technology, language, and culture',
      description: `I'm a software engineer who operates in multilingual environments, 
        bridging technical expertise with cultural understanding. My work reflects a 
        commitment to thoughtful design, clear communication, and continuous learning.`,
      description2: `This portfolio is designed as an experience—a reflection of how I think, 
        work, and communicate. Rather than a simple résumé, it's a narrative that combines 
        professional skills with personal expression.`
    },
    ja: {
      title: 'ソフトウェアエンジニア',
      subtitle: 'テクノロジー、言語、文化の交差点で',
      description: `多言語環境で活動するソフトウェアエンジニアとして、技術的な専門知識と文化的理解を橋渡ししています。
        私の仕事は、思慮深いデザイン、明確なコミュニケーション、そして継続的な学習への取り組みを反映しています。`,
      description2: `このポートフォリオは、体験として設計されています—私の思考、仕事、コミュニケーション方法の反映です。
        単純な履歴書ではなく、専門的なスキルと個人的な表現を組み合わせた物語です。`
    }
  }

  const t = content[language]

  return (
    <section id="about" className="hero manga-panel">
      <div className="page-number">01</div>
      <MangaEffects type="speed-lines" position="top-right" />
      <MangaEffects type="dots" position="bottom-left" />
      <div className="hero-container">
        <div className="hero-portrait">
          <div className="portrait-frame">
            <div className="portrait-placeholder">
              <div className="portrait-icon"><img src={portrait} alt="portrait" /></div>
            </div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-sprite">
            <MangaSprite type="wave" />
          </div>
          <h1 className="hero-title">{t.title}</h1>
          <p className="hero-subtitle">{t.subtitle}</p>
          
          <div className="hero-text">
            <p>{t.description}</p>
            <p className="hero-text-secondary">{t.description2}</p>
          </div>
        </div>
        <div className="language-switcher-wrapper">
          <LanguageSwitcher />
        </div>
      </div>
    </section>
  )
}

export default Hero
