import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Code2,
  Server,
  Wrench,
  Layers,
  Cpu,
  Database,
  Globe,
  Terminal,
  Container,
  Palette,
  GitBranch,
  ShieldCheck,
} from 'lucide-react'

type Category = 'all' | 'frontend' | 'backend' | 'tools'

interface SkillItem {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'tools'
  levelKey: 'level_expert' | 'level_adv' | 'level_prof'
  percent: number
  icon: React.ComponentType<{ size?: number; className?: string }>
}

const SKILLS_DATA: SkillItem[] = [
  // Frontend
  { id: 'react', name: 'React 19 & Next.js', category: 'frontend', levelKey: 'level_expert', percent: 95, icon: Code2 },
  { id: 'ts', name: 'TypeScript', category: 'frontend', levelKey: 'level_expert', percent: 92, icon: Cpu },
  { id: 'tailwind', name: 'Tailwind CSS v4', category: 'frontend', levelKey: 'level_expert', percent: 96, icon: Palette },
  { id: 'framer', name: 'Framer Motion', category: 'frontend', levelKey: 'level_adv', percent: 88, icon: Layers },
  { id: 'htmlcss', name: 'HTML5 & Modern CSS', category: 'frontend', levelKey: 'level_expert', percent: 98, icon: Globe },
  { id: 'vue', name: 'Vue.js / Nuxt', category: 'frontend', levelKey: 'level_prof', percent: 80, icon: Code2 },

  // Backend
  { id: 'node', name: 'Node.js & Express', category: 'backend', levelKey: 'level_adv', percent: 90, icon: Server },
  { id: 'postgres', name: 'PostgreSQL & SQL', category: 'backend', levelKey: 'level_adv', percent: 86, icon: Database },
  { id: 'mongodb', name: 'MongoDB & Mongoose', category: 'backend', levelKey: 'level_prof', percent: 82, icon: Database },
  { id: 'api', name: 'REST & GraphQL APIs', category: 'backend', levelKey: 'level_adv', percent: 90, icon: Server },
  { id: 'auth', name: 'JWT & OAuth Security', category: 'backend', levelKey: 'level_adv', percent: 85, icon: ShieldCheck },
  { id: 'prisma', name: 'Prisma ORM', category: 'backend', levelKey: 'level_prof', percent: 84, icon: Database },

  // Tools & DevOps
  { id: 'git', name: 'Git & GitHub Workflows', category: 'tools', levelKey: 'level_expert', percent: 95, icon: GitBranch },
  { id: 'docker', name: 'Docker Containers', category: 'tools', levelKey: 'level_prof', percent: 80, icon: Container },
  { id: 'vite', name: 'Vite & Webpack', category: 'tools', levelKey: 'level_adv', percent: 90, icon: Wrench },
  { id: 'figma', name: 'Figma to Code', category: 'tools', levelKey: 'level_adv', percent: 86, icon: Palette },
  { id: 'linux', name: 'Linux CLI & Scripting', category: 'tools', levelKey: 'level_prof', percent: 82, icon: Terminal },
  { id: 'postman', name: 'Postman & CI/CD', category: 'tools', levelKey: 'level_adv', percent: 88, icon: Wrench },
]

export default function SkillsSection() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')

  const categories: { key: Category; label: string }[] = [
    { key: 'all',      label: t('skills.cat_all') },
    { key: 'frontend', label: t('skills.cat_frontend') },
    { key: 'backend',  label: t('skills.cat_backend') },
    { key: 'tools',    label: t('skills.cat_tools') },
  ]

  const filteredSkills =
    selectedCategory === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedCategory)

  const getLevelBadgeColor = (levelKey: SkillItem['levelKey']) => {
    switch (levelKey) {
      case 'level_expert':
        return 'bg-red-500/15 text-red-400 border-red-500/30'
      case 'level_adv':
        return 'bg-rose-500/15 text-rose-300 border-rose-500/20'
      case 'level_prof':
        return 'bg-zinc-800 text-zinc-300 border-zinc-700'
      default:
        return 'bg-zinc-800 text-zinc-400 border-zinc-700'
    }
  }

  return (
    <section
      id="skills"
      className="relative py-24 px-6 sm:px-10 lg:px-12 w-full bg-dark-bg border-t border-zinc-800/60 overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

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
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            {t('skills.title')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('skills.subtitle')}
          </h2>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.key

              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                    isSelected ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{cat.label}</span>
                  {isSelected && (
                    <motion.div
                      layoutId="active-skill-tab"
                      className="absolute inset-0 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.4)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon
              const badgeStyle = getLevelBadgeColor(skill.levelKey)

              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  whileHover={{ y: -4 }}
                  className="group relative p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80
                             hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]
                             transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top: Icon, Name & Level Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      {/* Icon */}
                      <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-500
                                      group-hover:bg-red-500/10 group-hover:border-red-500/30 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all">
                        <Icon size={22} />
                      </div>

                      {/* Level Badge */}
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${badgeStyle} tracking-wide`}>
                        {t(`skills.${skill.levelKey}`)}
                      </span>
                    </div>

                    {/* Skill Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-1">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Bottom: Animated Progress Bar */}
                  <div className="mt-5 pt-3 border-t border-zinc-800/60">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-zinc-500 font-medium capitalize">
                        {skill.category}
                      </span>
                      <span className="text-zinc-400 font-bold">
                        {skill.percent}%
                      </span>
                    </div>

                    {/* Track */}
                    <div className="w-full h-1.5 rounded-full bg-zinc-900 overflow-hidden">
                      {/* Fill */}
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-red-600 to-red-400 shadow-[0_0_8px_#EF4444]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

