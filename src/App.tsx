import { useTranslation } from 'react-i18next'
import Layout from './components/Layout'

function App() {
  const { t } = useTranslation()

  return (
    <Layout>
      {/* ── Placeholder sections (filled in Day 3–6) ── */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center border-b border-border/30 px-4"
      >
        <div className="text-center max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20 mb-4">
            Day 2 Complete: Navbar & Mobile Drawer
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            {t('hero.greeting')}{' '}
            <span className="bg-gradient-to-r from-red-500 via-rose-500 to-red-400 bg-clip-text text-transparent">
              Chhin Chhat
            </span>
          </h1>
          <p className="text-base sm:text-lg text-text-muted">
            {t('hero.tagline')}
          </p>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center border-b border-border/30"
      >
        <h2 className="text-3xl font-bold text-white/50">{t('about.title')} (Day 3)</h2>
      </section>

      <section
        id="skills"
        className="min-h-screen flex items-center justify-center border-b border-border/30"
      >
        <h2 className="text-3xl font-bold text-white/50">{t('skills.title')} (Day 4)</h2>
      </section>

      <section
        id="experience"
        className="min-h-screen flex items-center justify-center border-b border-border/30"
      >
        <h2 className="text-3xl font-bold text-white/50">{t('experience.title')} (Day 4)</h2>
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center border-b border-border/30"
      >
        <h2 className="text-3xl font-bold text-white/50">{t('projects.title')} (Day 5)</h2>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-3xl font-bold text-white/50">{t('contact.title')} (Day 6)</h2>
      </section>
    </Layout>
  )
}

export default App
