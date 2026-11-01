import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Code2, Server, Palette, Zap, CheckCircle2 } from 'lucide-react'

export default function AboutSection() {
  const { t } = useTranslation()

  const stats = [
    { value: t('about.stats.exp_val'), label: t('about.stats.exp_lbl') },
    { value: t('about.stats.proj_val'), label: t('about.stats.proj_lbl') },
    { value: t('about.stats.sat_val'), label: t('about.stats.sat_lbl') },
  ]

  const competencies = [
    {
      icon: Code2,
      title: t('about.comp_frontend'),
      desc: t('about.comp_frontend_desc'),
      tags: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
    },
    {
      icon: Server,
      title: t('about.comp_backend'),
      desc: t('about.comp_backend_desc'),
      tags: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
    },
    {
      icon: Palette,
      title: t('about.comp_uiux'),
      desc: t('about.comp_uiux_desc'),
      tags: ['Framer Motion', 'Figma', 'Responsive', 'Micro-interactions'],
    },
    {
      icon: Zap,
      title: t('about.comp_perf'),
      desc: t('about.comp_perf_desc'),
      tags: ['Vite', 'SEO', 'Accessibility', 'Clean Code'],
    },
  ]

  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 bg-dark-bg/60 border-t border-border/40"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            {t('about.title')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('about.subtitle')}
          </h2>
        </motion.div>

        {/* Top Grid: Bio Narrative & High-Impact Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Bio Story Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-dark-card/80 border border-border/80 hover:border-red-500/30 transition-all shadow-xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-red-500">#</span> Engineering with Precision & Passion
              </h3>
              <p className="text-text-muted leading-relaxed text-base sm:text-lg mb-6">
                {t('about.description')}
              </p>
            </div>

            <div className="pt-6 border-t border-border/60 flex flex-wrap gap-4 text-xs font-medium text-text-muted">
              <span className="flex items-center gap-1.5 text-white">
                <CheckCircle2 size={16} className="text-red-500" />
                Modern Stack Architecture
              </span>
              <span className="flex items-center gap-1.5 text-white">
                <CheckCircle2 size={16} className="text-red-500" />
                Pixel-Perfect Delivery
              </span>
              <span className="flex items-center gap-1.5 text-white">
                <CheckCircle2 size={16} className="text-red-500" />
                Scalable & Clean Code
              </span>
            </div>
          </motion.div>

          {/* High-Impact Stat Badges (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="p-5 rounded-2xl bg-gradient-to-br from-surface to-dark-card border border-border/80 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10 transition-all flex items-center justify-between"
              >
                <div>
                  <span className="block text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-text-muted mt-1 block">
                    {stat.label}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Bottom Section: Core Competencies Grid */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t('about.competencies_title')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competencies.map((comp, i) => {
              const Icon = comp.icon

              return (
                <motion.div
                  key={comp.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative p-6 rounded-2xl bg-dark-card border border-border hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/10 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Icon with crimson glow on hover */}
                    <div className="w-12 h-12 rounded-xl bg-surface border border-border group-hover:border-red-500/40 group-hover:bg-red-500/10 flex items-center justify-center text-red-500 group-hover:shadow-[0_0_16px_rgba(239,68,68,0.3)] transition-all mb-5">
                      <Icon size={24} />
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                      {comp.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                      {comp.desc}
                    </p>
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                    {comp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-surface text-text-faint group-hover:text-white group-hover:bg-red-500/10 border border-border/40 group-hover:border-red-500/20 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

