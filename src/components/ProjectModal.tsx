import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  X,
  ExternalLink,
  Calendar,
  User,
  CheckCircle2,
  Sparkles,
  Layers,
} from 'lucide-react'
import type { Project } from '../types/project'

function GithubIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { t, i18n } = useTranslation()
  const isKhmer = i18n.language === 'km'

  // Scroll lock and ESC key listener
  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!project) return null

  const title = isKhmer ? project.title.km : project.title.en
  const fullDescription = isKhmer ? project.fullDescription.km : project.fullDescription.en
  const role = project.role ? (isKhmer ? project.role.km : project.role.en) : null
  const keyFeatures = project.keyFeatures
    ? isKhmer
      ? project.keyFeatures.km
      : project.keyFeatures.en
    : []

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-40"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-50 w-full max-w-3xl max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-3xl shadow-[0_0_50px_rgba(239,68,68,0.2)] overflow-hidden flex flex-col my-auto"
          >
            {/* Header / Banner Image */}
            <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-zinc-900 shrink-0">
              <img
                src={project.image}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label={t('projects.close_modal')}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-700/80 text-zinc-300 hover:text-white hover:border-red-500/50 hover:bg-red-500/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg"
              >
                <X size={18} />
              </button>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-500/90 text-white backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.6)]">
                  <Sparkles size={12} />
                  {t('projects.featured_badge')}
                </div>
              )}

              {/* Category Pill */}
              <div className="absolute bottom-4 left-6 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900/90 text-zinc-300 border border-zinc-700/80 backdrop-blur-md">
                <Layers size={12} className="text-red-400" />
                {project.category === 'fullstack' ? 'Full Stack' : project.category === 'uiux' ? 'UI/UX Design' : 'Frontend'}
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-left">
              {/* Title & Metadata */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                  {title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-400">
                  {role && (
                    <span className="inline-flex items-center gap-1.5">
                      <User size={14} className="text-red-500" />
                      <strong className="text-zinc-300">{t('projects.role_label')}:</strong> {role}
                    </span>
                  )}
                  {project.timeline && (
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={14} className="text-red-500" />
                      <strong className="text-zinc-300">{t('projects.year_label')}:</strong> {project.timeline}
                    </span>
                  )}
                </div>
              </div>

              {/* Full Description */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {fullDescription}
              </p>

              {/* Key Features List */}
              {keyFeatures.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center gap-2">
                    <Sparkles size={14} />
                    {t('projects.key_features')}
                  </h4>
                  <ul className="space-y-2.5">
                    {keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 size={16} className="text-red-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Tags */}
              <div className="pt-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  {t('projects.tech_stack')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="p-4 sm:p-6 bg-zinc-900/60 border-t border-zinc-800/80 flex flex-wrap items-center justify-end gap-3 shrink-0">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-zinc-500 transition-all duration-200 shadow-sm"
              >
                <GithubIcon size={16} />
                {t('projects.source_code')}
              </a>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-red-500 hover:bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-200"
              >
                <ExternalLink size={16} />
                {t('projects.live_demo')}
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

