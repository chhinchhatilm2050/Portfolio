import { useTranslation } from 'react-i18next'
import Layout from './components/Layout'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'

function App() {
  const { t } = useTranslation()

  return (
    <Layout>
      {/* Day 3: Hero Section */}
      <HeroSection />

      {/* Day 3: About Me Section */}
      <AboutSection />

      {/* Day 4: Interactive Skills Grid */}
      <SkillsSection />

      {/* Day 4: Vertical Experience Timeline */}
      <ExperienceSection />

      {/* ── Remaining Milestone Sections (Day 5–6) ── */}
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
