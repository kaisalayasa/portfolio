import { useLanguage } from '../contexts/LanguageContext'
import MangaSprite from './MangaSprite'
import MangaEffects from './MangaEffects'
import './Internship.css'

const Internship = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Internship Experience',
      subtitle: 'Professional growth at Augeo',
      company: 'Augeo',
      role: 'Software Engineering Intern',
      description: `During my internship at Augeo, I worked on real-world projects that required applying my technical skills in a production environment. I collaborated with engineers across teams, contributed to internal tools, and gained hands-on experience with modern development and DevOps practices.`,
      achievements: [
        'Revamped Augeo’s internal DevOps website, improving UI responsiveness and overall performance',
        'Implemented Single Sign-On (SSO) using Okta via AWS Cognito to enable secure access to internal resources',
        'Built a Node.js and SQL backend connection for data extraction, processing, and visualization, reducing data access time by 50%',
        'Designed and developed three new internal pages to streamline access to company resources',
        'Documented development progress and contributed to sprints within a Jira-managed workflow',
        'Participated in AI Roundtable discussions, gaining exposure to real-world AI applications'
      ]
    },
    ja: {
      title: 'インターンシップ経験',
      subtitle: 'Augeoでの専門的な成長',
      company: 'Augeo',
      role: 'ソフトウェアエンジニアインターン',
      description: `Augeoでのインターンシップを通じて、本番環境に近い形で技術スキルを活用しました。チーム横断でエンジニアと協力し、社内ツールの開発や改善に携わりながら、モダンな開発およびDevOpsの実践を学びました。`,
      achievements: [
        '社内DevOpsサイトを刷新し、UIのレスポンシブ性と全体的なパフォーマンスを向上',
        'AWS Cognitoを介したOktaによるSSOを実装し、社内リソースへの安全なアクセスを実現',
        'Node.jsとSQLを用いたバックエンド連携を構築し、データ抽出・処理・可視化を最適化（アクセス時間を約50％削減）',
        '社内リソースへのアクセスを効率化する新規ページを3件設計・開発',
        'Jiraで管理されたスプリントに参加し、開発内容のドキュメント作成に貢献',
        'AIラウンドテーブルに参加し、実務におけるAI活用について知見を深めた'
      ]
    }
  };
  

  const t = content[language]

  return (
    <section id="internship" className="internship manga-panel">
      <div className="page-number">02</div>
      <MangaEffects type="speed-lines" position="top-left" />
      <MangaEffects type="dots" position="bottom-right" />
      <div className="section-header">
        <div className="section-sprite">
          <MangaSprite type="coding" />
        </div>
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
      </div>

      <div className="internship-content">
        <div className="internship-card">
          <div className="internship-header">
            <h3 className="company-name">{t.company}</h3>
            <MangaSprite type="excited" />
          </div>
          <p className="internship-role">{t.role}</p>
          <p className="internship-description">{t.description}</p>
          
          <div className="achievements">
            <h4 className="achievements-title">
              {language === 'en' ? 'Key Achievements:' : '主な成果:'}
            </h4>
            <ul className="achievements-list">
              {t.achievements.map((achievement, index) => (
                <li key={index} className="achievement-item">
                  <span className="achievement-bullet"></span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Internship
