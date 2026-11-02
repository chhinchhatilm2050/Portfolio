import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FolderGit2 } from 'lucide-react'
import type { Project, ProjectCategory } from '../types/project'
import { PROJECTS_DATA } from '../data/projectsData'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function ProjectsSection() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all')
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const filterTabs: { key: ProjectCategory; label: string }[] = [
    { key: 'all',       label: t('projects.filter_all') },
    { key: 'fullstack', label: t('projects.filter_fullstack') },
    { key: 'mobile',    label: t('projects.filter_mobile') },
    { key: 'web3',      label: t('projects.filter_web3') },
    { key: 'design',    label: t('projects.filter_design') },
  ]

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory)

  return (
    <section
      id="projects"
      className="relative py-24 px-6 sm:px-10 lg:px-12 w-full bg-dark-bg border-t border-zinc-800/60 overflow-hidden"
    >
      {/* Ambient Crimson Glows in Background */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-red-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400 mb-4 shadow-sm shadow-red-500/10">
            <FolderGit2 size={13} className="text-red-500" />
            {t('projects.title')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('projects.subtitle')}
          </h2>
        </motion.div>

        {/* Category Filter Bar */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md">
            {filterTabs.map((tab) => {
              const isSelected = selectedCategory === tab.key

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setSelectedCategory(tab.key)}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                    isSelected ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{tab.label}</span>
                  {isSelected && (
                    <motion.div
                      layoutId="active-project-pill"
                      className="absolute inset-0 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.4)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setActiveProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        isOpen={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
      />
    </section>
  )
}

