import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Briefcase, Calendar, Award } from 'lucide-react'

interface RoleItem {
  period: string
  title: string
  company: string
  desc: string
  skills: string[]
}

export default function ExperienceSection() {
  const { t } = useTranslation()

  const rawRoles = t('experience.roles', { returnObjects: true }) as RoleItem[]
  const roles: RoleItem[] = Array.isArray(rawRoles) ? rawRoles : []

  return (
    <section
      id="experience"
      className="relative py-24 px-6 sm:px-10 lg:px-12 w-full bg-zinc-950/60 border-t border-zinc-800/60 overflow-hidden"
    >
      {/* Background Ambient Red Glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-red-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-400 mb-4 shadow-sm shadow-red-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            {t('experience.title')}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('experience.subtitle')}
          </h2>
        </motion.div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Central Vertical Axis Line in Dark Red (#EF4444/30) */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-red-500/50 via-red-500/25 to-red-500/5 pointer-events-none" />

          {/* Timeline Nodes & Cards */}
          <div className="flex flex-col gap-12 sm:gap-16">
            {roles.map((role, index) => {
              const isEven = index % 2 === 0
              const isPresent = role.period.toLowerCase().includes('present') || role.period.includes('បច្ចុប្បន្ន')

              return (
                <div
                  key={`${role.company}-${index}`}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      {isPresent && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                      )}
                      <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500 border-2 border-zinc-950 shadow-[0_0_12px_#EF4444]" />
                    </span>
                  </div>

                  {/* Card Container (takes half width on sm+ viewports) */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pl-10' : 'sm:pr-10'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                      whileHover={{ y: -4 }}
                      className="group relative p-6 sm:p-7 rounded-2xl bg-zinc-950/90 border border-zinc-800/80
                                 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.18)]
                                 transition-all duration-300 shadow-xl"
                    >
                      {/* Period Pill & Company */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-500/10 text-red-400 border border-red-500/20">
                          <Calendar size={13} />
                          {role.period}
                        </span>

                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400">
                          <Briefcase size={13} className="text-red-500" />
                          {role.company}
                        </span>
                      </div>

                      {/* Job Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors mb-3">
                        {role.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                        {role.desc}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-zinc-900 text-zinc-300 border border-zinc-800 group-hover:border-zinc-700 transition-colors"
                          >
                            <Award size={11} className="text-red-400" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop Alternate Grid */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

