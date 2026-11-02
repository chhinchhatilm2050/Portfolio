import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ExternalLink, Sparkles, ArrowRight } from 'lucide-react'
import type { Project } from '../types/project'

function GithubIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
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

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const { t, i18n } = useTranslation()
  const isKhmer = i18n.language === 'km'

  const title = isKhmer ? project.title.km : project.title.en
  const description = isKhmer ? project.description.km : project.description.en

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between rounded-2xl bg-zinc-950/90 border border-zinc-800/80
                 hover:border-red-500/50 hover:shadow-[0_0_35px_rgba(239,68,68,0.22)]
                 transition-all duration-300 overflow-hidden text-left"
    >
      {/* Top Media Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900">
        <img
          src={project.image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
        />

        {/* Dark Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Featured Ribbon Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-red-500 text-white shadow-[0_0_12px_rgba(239,68,68,0.6)]">
            <Sparkles size={11} />
            {t('projects.featured_badge')}
          </div>
        )}

        {/* Quick External Links Overlay */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} Github source code`}
            onClick={(e) => e.stopPropagation()}
            className="w-9 h-9 rounded-full bg-zinc-950/85 hover:bg-zinc-900 border border-zinc-700 hover:border-red-500/50 text-zinc-300 hover:text-white flex items-center justify-center backdrop-blur-md transition-all shadow-md"
          >
            <GithubIcon size={15} />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} Live demo`}
            onClick={(e) => e.stopPropagation()}
            className="w-9 h-9 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-md shadow-red-500/30"
          >
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Tags List */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-zinc-900 text-zinc-400 border border-zinc-800"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-zinc-900/60 text-zinc-500 border border-zinc-800/60">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3
            onClick={() => onSelect(project)}
            className="text-lg sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors cursor-pointer mb-2 line-clamp-1"
          >
            {title}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-2 mb-4">
            {description}
          </p>
        </div>

        {/* Bottom Detail Action Bar */}
        <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 group-hover:text-red-300 hover:underline cursor-pointer transition-colors"
          >
            <span>{t('projects.view_detail')}</span>
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </button>

          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
            {project.category}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

