import { useLanguage } from '../contexts/LanguageContext'
import MangaEffects from './MangaEffects'
import './Hobbies.css'
import AnkiImg from '../../public/images/anki.png';
import MusicImg from '../../public/images/music.png';
import SportsImg from '../../public/images/sports.png';

const Hobbies = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Hobbies & Interests',
      subtitle: 'Personal pursuits that shape my perspective',
      hobbies: [
        {
          title: 'Languages',
          description:
            'I speak Arabic, English, and Japanese. I learned Japanese primarily through self-study, using Anki and consistent reading and listening practice. Language learning is both a technical and cultural pursuit for me.',
          image: AnkiImg
        },
        {
          title: 'Music',
          description:
            'I play guitar and oud, and music is an important creative outlet. I especially enjoy Japanese music, with Spitz as my favorite band, using music as a way to engage with culture.',
          image: MusicImg
        },
        {
          title: 'Sports',
          description:
            'I stay active through regular sports participation and currently serve as the volleyball convener. I enjoy playing badminton, table tennis, pickleball, soccer, and volleyball.',
          image: SportsImg
        }
      ]
    },
    ja: {
      title: '趣味と興味',
      subtitle: '私の視点を形作る個人的な活動',
      hobbies: [
        {
          title: '言語',
          description:
            'アラビア語、英語、日本語の三言語を話します。日本語は主に独学で学び、Ankiを活用しながら読解とリスニングを続けてきました。言語学習は文化的な探求でもあります。',
          image: AnkiImg
        },
        {
          title: '音楽',
          description:
            'ギターとウードを演奏しています。特に日本の音楽が好きで、最も好きなバンドはスピッツです。音楽を通して文化と関わっています。',
          image: MusicImg
        },
        {
          title: 'スポーツ',
          description:
            '活動的な生活を心がけ、現在はバレーボールのコンビーナーを務めています。バドミントン、卓球、ピックルボール、サッカー、バレーボールを楽しんでいます。',
          image: SportsImg
        }
      ]
    }
  };
  
  

  const t = content[language]

  return (
    <section id="hobbies" className="hobbies manga-panel">
      <div className="page-number">04</div>
      <MangaEffects type="speed-lines" position="bottom-right" />
      <MangaEffects type="dots" position="top-left" />
      <div className="section-header">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>

      <div className="hobbies-grid">
        {t.hobbies.map((hobby, index) => (
          <div key={index} className="hobby-panel">
            <MangaEffects type="dots" position={index % 2 === 0 ? 'top-right' : 'bottom-left'} />
            {hobby.image && (
              <div className="hobby-image-container">
                <img 
                  src={hobby.image} 
                  alt={hobby.title}
                  className="hobby-image"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
            )}
            <div className="hobby-content">
              <h3 className="hobby-title">{hobby.title}</h3>
              <p className="hobby-description">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="spitz-note">
        <div className="spitz-content">
          <p className="spitz-text">
            {language === 'en' 
              ? 'Favorite band: Spitz — a long-standing appreciation for their thoughtful lyrics and melodic sensibility.'
              : '好きなバンド：スピッツ — 思慮深い歌詞とメロディックな感性への長年の愛好。'
            }
          </p>
          <a 
            href="https://www.youtube.com/watch?v=51CH3dPaWXc&list=RD51CH3dPaWXc&start_radio=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="spitz-link"
          >
            {language === 'en' ? 'Listen to recent favorite →' : '最近のお気に入りを聴く →'}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hobbies
