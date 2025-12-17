import { useLanguage } from '../contexts/LanguageContext'
import MangaEffects from './MangaEffects'
import './Projects.css'

const Projects = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Projects',
      subtitle: 'Selected projects that reflect my interests in language, systems, and thoughtful engineering',
      projects: [
        {
          title: 'Shiritori Game',
          description:
            'A web-based Shiritori game built with React that allows players to practice Japanese vocabulary in an interactive way. The game validates words locally and has been used by over 350+ users. Try it for yourself.',
          tech: ['React', 'JavaScript', 'Japanese Language'],
          image: '../../public/images/shiritori.png',
          link: 'https://shiritori-game-five.vercel.app/'
        },
        {
          title: 'Do You Even LOL?',
          description:
            'A fun Python-based guessing game for League of Legends fans. Players are challenged to identify champion abilities as Passive, Q, W, E, or R. Built using Python with data scraped and processed using BeautifulSoup.',
          tech: ['Python', 'BeautifulSoup', 'Game Logic'],
          image: '../../public/images/lol.png',
          link: 'https://github.com/kaisalayasa/Do-You-Even-LOL-'
        },
        {
          title: 'MOOOVE',
          description:
            'A subleasing platform currently under development. Features a full React frontend with a Node.js backend and MongoDB database, designed to help users create and browse sublease listings easily.',
          tech: ['React', 'Node.js', 'MongoDB', 'Express'],
          image: '../../public/images/mooove.png',
          link: 'https://github.com/kaisalayasa/MOOOVE'
        }
      ]
    },
  
    ja: {
      title: 'プロジェクト',
      subtitle: '言語、システム、そして丁寧なエンジニアリングへの関心を反映したプロジェクト',
      projects: [
        {
          title: 'しりとりゲーム',
          description:
            'Reactで構築した日本語学習向けのしりとりゲームです。ローカル辞書を用いて単語を検証し、これまでに350人以上のユーザーに利用されています。ぜひ実際に遊んでみてください。',
          tech: ['React', 'JavaScript', '日本語'],
          image: '../../public/images/shiritori.png',
          link: 'https://shiritori-game-five.vercel.app/'
        },
        {
          title: 'Do You Even LOL?',
          description:
            'League of Legendsファン向けのPython製クイズゲームです。チャンピオンのスキルがパッシブ、Q、W、E、Rのどれかを当てるゲームで、BeautifulSoupを用いてデータを処理しています。',
          tech: ['Python', 'BeautifulSoup', 'ゲームロジック'],
          image: '../../public/images/lol.png',
          link: 'https://github.com/kaisalayasa/Do-You-Even-LOL-'
        },
        {
          title: 'MOOOVE',
          description:
            '現在開発中のサブリース向けWebプラットフォームです。Reactによるフロントエンドと、Node.js・MongoDBを用いたバックエンドで構成されています。',
          tech: ['React', 'Node.js', 'MongoDB', 'Express'],
          image: '../../public/images/mooove.png',
          link: 'https://github.com/kaisalayasa/MOOOVE'
        }
      ]
    }
  }
  

  const t = content[language]

  return (
    <section id="projects" className="projects manga-panel">
      <div className="page-number">03</div>
      <MangaEffects type="speed-lines" position="bottom-left" />
      <MangaEffects type="impact" position="top-right" />
      <div className="section-header">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>

      <div className="projects-grid">
        {t.projects.map((project, index) => (
          <div key={index} className="project-card">
            <MangaEffects type="dots" position={index % 2 === 0 ? 'top-left' : 'bottom-right'} />
            {project.image && (
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
            )}
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {language === 'en' ? 'View Project →' : 'プロジェクトを見る →'}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
