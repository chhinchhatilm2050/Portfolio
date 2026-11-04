import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Mail, Globe } from 'lucide-react'
import { useTypingAnimation } from '../hooks/useTypingAnimation'
import heroImg from '../assets/chinchhat.png'

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

// Defined outside the component so positions stay stable across
// re-renders (the typing animation re-renders the parent constantly)
const embers = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 29 + 7) % 100}%`,
  size: 2 + (i % 4),
  duration: 9 + (i % 6) * 2,
  delay: (i % 9) * 0.9,
  sway: 14 + (i % 4) * 8,
  color: i % 3 === 0 ? '#FB7185' : i % 3 === 1 ? '#EF4444' : '#F97316',
}))

const streaks = [
  { id: 0, left: '8%',  top: '-10%', delay: 1,  repeatDelay: 7 },
  { id: 1, left: '42%', top: '-15%', delay: 4,  repeatDelay: 9 },
  { id: 2, left: '70%', top: '-10%', delay: 7,  repeatDelay: 8 },
]

const AnimatedBackground = memo(function AnimatedBackground() {
  const reduceMotion = useReducedMotion()
  const loop = (duration: number, extra = {}) => ({
    duration,
    repeat: Infinity,
    ease: 'easeInOut' as const,
    ...extra,
  })

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Aurora blobs: large, colorful, blended light */}
      <motion.div
        className="absolute -top-[10%] -left-[10%] w-[620px] h-[620px] rounded-full blur-[130px] mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.55), transparent 70%)' }}
        animate={reduceMotion ? undefined : { x: [0, 160, 40, 0], y: [0, 90, 200, 0], scale: [1, 1.25, 0.95, 1] }}
        transition={loop(20)}
      />
      <motion.div
        className="absolute top-[5%] right-[-8%] w-[600px] h-[600px] rounded-full blur-[130px] mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(244,63,94,0.5), transparent 70%)' }}
        animate={reduceMotion ? undefined : { x: [0, -170, -40, 0], y: [0, 140, 40, 0], scale: [1, 0.9, 1.2, 1] }}
        transition={loop(24)}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[30%] w-[560px] h-[560px] rounded-full blur-[140px] mix-blend-screen"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.35), transparent 70%)' }}
        animate={reduceMotion ? undefined : { x: [0, 120, -140, 0], y: [0, -80, 20, 0], scale: [1, 1.15, 0.9, 1] }}
        transition={loop(26)}
      />

      {/* 2. Slow rotating light sweep */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-[1400px] h-[1400px] rounded-full blur-3xl opacity-80"
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0deg, rgba(239,68,68,0.20) 45deg, transparent 100deg, transparent 190deg, rgba(244,63,94,0.14) 240deg, transparent 295deg)',
            maskImage: 'radial-gradient(circle, black 15%, transparent 65%)',
            WebkitMaskImage: 'radial-gradient(circle, black 15%, transparent 65%)',
          }}
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* 3. Ripple rings pulsing out from behind the profile card */}
      {!reduceMotion && (
        <div className="absolute top-1/2 left-[22%] hidden lg:block">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-red-500/40"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: [0.6, 2.4], opacity: [0.55, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeOut', delay: i * 2.3 }}
            />
          ))}
        </div>
      )}

      {/* 4. Light streaks crossing the screen */}
      {!reduceMotion &&
        streaks.map((s) => (
          <motion.div
            key={s.id}
            className="absolute"
            style={{ left: s.left, top: s.top }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: [0, 700], y: [0, 700], opacity: [0, 1, 0] }}
            transition={{ duration: 2.8, delay: s.delay, repeat: Infinity, repeatDelay: s.repeatDelay, ease: 'easeIn' }}
          >
            <div
              className="w-[2px] h-44 -rotate-45"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(248,113,113,0.9), transparent)', boxShadow: '0 0 14px rgba(239,68,68,0.8)' }}
            />
          </motion.div>
        ))}

      {/* 5. Glowing embers rising upward */}
      {!reduceMotion &&
        embers.map((p) => (
          <motion.span
            key={p.id}
            className="absolute bottom-0 rounded-full"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              background: p.color,
              boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            }}
            animate={{
              y: ['0vh', '-100vh'],
              x: [0, p.sway, -p.sway, 0],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }}
          />
        ))}

      {/* Soft vignette so text stays readable */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(9,9,11,0.55) 100%)' }}
      />
    </div>
  )
})

// Looping video background. Put your file at public/bg-video.mp4
// (if the file is missing, the animated glow underneath still shows)
const VideoBackground = memo(function VideoBackground() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Fallback / base layer */}
      <AnimatedBackground />

      {/* The video */}
      {!reduceMotion && (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src="/bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      )}

      {/* Overlay keeps the text readable */}
      <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/40 to-zinc-950/80" />
    </div>
  )
})

export default function HeroSection() {
  const { t } = useTranslation()

  const words = [
    'Aspiring Full Stack Dev',
    'Year 2, Semester 2',
    'MIS Major (SETEC)',
    'Vue.js & Node.js Developer',
  ]

  const { text: typedRole } = useTypingAnimation(words, {
    typingSpeed: 85,
    deletingSpeed: 45,
    pauseDuration: 2000,
  })

  const socialLinks = [
    { icon: GithubIcon,   href: 'https://github.com/chhinchhatilm2050',       label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/chhin-chhat-7202bb407',     label: 'LinkedIn' },
    { icon: TwitterIcon,  href: 'https://twitter.com',      label: 'X (Twitter)' },
    { icon: Mail,         href: 'mailto:[chhinchhat.ilm2050@gmail.com]', label: 'Email' },
  ]

  const stats = [
    { val: 'Year', lbl: '2 Semester 2 at SETEC' },
    { val: '4+',    lbl: 'Projects Completed' },
    { val: '15+',    lbl: 'Technologies' },
    { val: '100%',   lbl: 'Passion & Growth' },
  ]

  return (
    <section id="home" className="relative w-full overflow-hidden">
      {/* Full-width video background */}
      <VideoBackground />

      <div className="max-w-7xl mx-auto relative z-10 min-h-[92vh] flex flex-col justify-center pt-12 sm:pt-18 pb-12 px-6 sm:px-10 lg:px-12">

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

            <div className="relative w-full h-full rounded-[50px] sm:rounded-[140px] p-[3.25px] overflow-hidden shadow-2xl">
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

              <div className="relative w-full h-full rounded-[50px] sm:rounded-[200px] bg-black/50 backdrop-blur-xl overflow-hidden flex flex-col items-center justify-between p-3 border border-white/5">

                <div className="relative w-full flex-1 rounded-[50px] sm:rounded-[200px] overflow-hidden bg-zinc-900/60 border border-zinc-800 shadow-inner group-hover:scale-[1.02] transition-transform duration-500 flex items-center justify-center">
                  <img
                    src={heroImg}
                    alt="Profile"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-75" />
                </div>
              </div>
            </div>

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

          <p className="text-sm sm:text-base text-white max-w-xl mb-6 leading-relaxed">
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
              className="inline-flex animate-pulse items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-semibold text-sm shadow-[0_4px_25px_rgba(239,68,68,0.4)] hover:shadow-[0_6px_30px_rgba(239,68,68,0.55)] transition-all"
            >
              <span>{t('hero.cta_projects', 'View Projects')}</span>
              <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex animate-pulse items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-white font-semibold text-sm shadow-md shadow-black/40 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all"
            >
              <Mail size={16} className="text-zinc-400" />
              <span>{t('hero.cta_contact', 'Contact Me')}</span>
            </motion.a>
          </div>
        </motion.div>

      </div>

      {/* Stats row */}
      <motion.div
        className="max-w-7xl mx-auto w-full mt-12 pt-8 border-t border-zinc-800/60 relative z-10"
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

      </div>
    </section>
  )
}