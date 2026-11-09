import Layout from './components/Layout'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import EducationSection from './components/EducationSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import CvModal from './components/CvModal'
import { CvModalProvider } from './context/CvModalContext'

function App() {
  return (
    <CvModalProvider>
      <Layout>
        {/* Day 3: Hero Section */}
        <HeroSection />

        {/* Day 3: About Me Section */}
        <AboutSection />

        {/* Day 4: Interactive Skills Grid */}
        <SkillsSection />

        {/* Day 4: Vertical Education Timeline */}
        <EducationSection />

        {/* Day 5: Project Showcase & Detail Modal */}
        <ProjectsSection />

        {/* Day 6: Contact Form & Validation */}
        <ContactSection />
      </Layout>

      {/* Global Interactive CV Modal */}
      <CvModal />
    </CvModalProvider>
  )
}

export default App
