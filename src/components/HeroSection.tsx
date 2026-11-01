import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Mail, Sparkles, Globe } from 'lucide-react'
import { useTypingAnimation } from '../hooks/useTypingAnimation'
import heroImg from '../assets/hero.png'

// SVG Brand Icons for the social row
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

function LinkedinIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function TwitterIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
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
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  )
}

export default function HeroSection() {
  const { t } = useTranslation()

  // Directly pass a clean array of strings to test
  const words = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'React & TypeScript Specialist',
  ]

  const { text: typedRole } = useTypingAnimation(words, {
    typingSpeed: 85,
    deletingSpeed: 45,
    pauseDuration: 2000,
  })

  const socialLinks = [
    { icon: GithubIcon,   href: 'https://github.com',    label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://linkedin.com',  label: 'LinkedIn' },
    { icon: TwitterIcon,  href: 'https://twitter.com',   label: 'X (Twitter)' },
    { icon: Mail,         href: 'mailto:hello@example.com', label: 'Email' },
    { icon: Globe,        href: '#',                     label: 'Portfolio' },
  ]

  const stats = [
    { val: '3+',  lbl: 'Years of Experience' },
    { val: '25+', lbl: 'Projects Completed' },
    { val: '15+', lbl: 'Technologies Mastered' },
    { val: '100%', lbl: 'Satisfied Clients' },
  ]

  return (
    <section
      id="home"
      className="max-w-7xl mx-auto relative min-h-[92vh] flex flex-col justify-center pt-12 sm:pt-18 pb-12 px-6 sm:px-10 lg:px-15 overflow-hidden"
    >
      {/* Background Soft Red Radial Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[480px] h-[480px] bg-red-600/15 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-10 w-[520px] h-[520px] bg-red-500/15 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Main 2-Column Hero Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center flex-1 my-auto relative z-10">
        
        {/* LEFT COLUMN */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-start items-center order-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="relative group w-70 sm:w-88 h-[380px] sm:h-[440px]">
            
            {/* Ambient Shadow Blur precisely matching the card shape */}
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-b from-red-500/30 via-red-600/20 to-rose-600/10 rounded-[50px] sm:rounded-[100px] blur-2xl sm:blur-3xl group-hover:from-red-500/40 group-hover:via-red-600/30 group-hover:to-rose-600/20 transition-all duration-500 -z-0 pointer-events-none" />

            <div className="relative w-full h-full rounded-[50px] sm:rounded-[100px] p-[3.25px] overflow-hidden shadow-2xl">
              <motion.div
                className="absolute -inset-[100%] rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, #EF4444 0%, #F43F5E 25%, transparent 45%, #EF4444 70%, #991B1B 85%, #EF4444 100%)',
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              <div className="relative w-full h-full rounded-[50px] sm:rounded-[200px] bg-zinc-950/95 backdrop-blur-xl overflow-hidden flex flex-col items-center justify-between p-5 border border-white/5">
                
                <div className="relative w-full flex-1 rounded-[50px] sm:rounded-[200px] overflow-hidden bg-zinc-900/60 border border-zinc-800 shadow-inner group-hover:scale-[1.02] transition-transform duration-500 flex items-center justify-center">
                  <img
                    src={heroImg}
                    alt="Profile"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-75" />
                </div>

                <div className="w-full mt-4 flex items-center justify-between p-3 :sm:py-3 sm:px-10 rounded-xl bg-zinc-950/90 border border-zinc-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                      <Sparkles size={16} />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs font-bold text-white tracking-tight">Full Stack Craft</span>
                      <span className="text-[10px] text-zinc-500 tracking-normal">Web & Mobile Apps</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md border border-red-500/40 text-red-400 text-xs font-semibold">
                    Pro
                  </span>
                </div>

              </div>
            </div>

            {/* <div className="absolute -bottom-3 -right-3 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 shadow-xl flex items-center gap-2 text-xs font-medium text-white backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#EF4444]" />
              <span>React + TypeScript</span>
            </div> */}

          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="lg:col-span-7 relative flex flex-col items-center lg:items-start text-center lg:text-left w-full order-2"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          {/* Ambient Red Glow Blur behind text content */}
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[440px] sm:w-[520px] h-[380px] sm:h-[440px] bg-gradient-to-br from-red-600/18 via-rose-600/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

          <span className="text-lg sm:text-xl font-medium text-zinc-300 mb-1">
            {t('hero.greeting', 'Hi, I’m')}
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-2 drop-shadow-[0_0_40px_rgba(239,68,68,0.22)]">
            {t('hero.name', 'Chhin Chhat')}
          </h1>

          <div className="h-10 sm:h-12 flex items-center gap-2 text-xl sm:text-3xl font-bold mb-4">
            <span className="text-zinc-300 font-semibold">And I'm a</span>
            <span 
              className="text-red-500"
              style={{ textShadow: '0 0 20px rgba(239, 68, 68, 0.4)' }}
            >
              {typedRole}
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.85, repeat: Infinity, ease: 'linear' }}
              className="w-[3px] h-7 bg-red-500 inline-block shadow-[0_0_8px_#EF4444]"
            />
          </div>

          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mb-6 leading-relaxed">
            {t('hero.tagline', 'Building robust and scalable web applications with clean code and modern architecture.')}
          </p>

          <div className="flex items-center gap-3 mb-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-red-500/60
                           text-zinc-400 hover:text-white hover:bg-red-500/10 hover:shadow-[0_0_15px_rgba(239,68,68,0.25)]
                           flex items-center justify-center transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-semibold text-sm shadow-[0_4px_25px_rgba(239,68,68,0.4)] hover:shadow-[0_6px_30px_rgba(239,68,68,0.55)] transition-all"
            >
              <span>{t('hero.cta_projects', 'View Projects')}</span>
              <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white font-semibold text-sm shadow-md shadow-black/40 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all"
            >
              <Mail size={16} className="text-zinc-400" />
              <span>{t('hero.cta_contact', 'Contact Me')}</span>
            </motion.a>
          </div>
        </motion.div>

      </div>

      <motion.div
        className="max-w-7xl mx-auto w-full mt-12 pt-8 border-t border-zinc-800/60"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-zinc-800/80">
          {stats.map((stat, i) => (
            <div
              key={stat.lbl}
              className={`flex items-center justify-center gap-3 ${
                i !== 0 ? 'md:pl-8' : ''
              } pt-4 md:pt-0`}
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {stat.val}
              </span>
              <span className="text-xs sm:text-sm text-zinc-400 font-medium leading-tight max-w-[120px]">
                {stat.lbl}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}