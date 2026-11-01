import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Moon, Sun, Globe } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import MobileNav from './MobileNav'

const NAV_LINKS = [
  { key: 'nav.home',       href: '#home' },
  { key: 'nav.about',      href: '#about' },
  { key: 'nav.skills',     href: '#skills' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.projects',   href: '#projects' },
  { key: 'nav.contact',    href: '#contact' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  const currentLang = i18n.language === 'km' ? 'KM' : 'EN'

  const toggleLang = () => {
    const next = i18n.language === 'en' ? 'km' : 'en'
    i18n.changeLanguage(next)
    localStorage.setItem('language', next)
  }

  // Handle scroll detection for subtle glassmorphism elevation & active section spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section spy
      const sections = NAV_LINKS.map(link => link.href.slice(1))
      const scrollPosition = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i]
        const element = document.getElementById(sectionId)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(`#${sectionId}`)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigate = (href: string) => {
    setActiveSection(href)
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* ── Sticky Glassmorphic Navbar ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-bg/85 backdrop-blur-md border-b border-red-500/20 shadow-lg shadow-black/40'
            : 'bg-dark-bg/60 backdrop-blur-sm border-b border-red-500/10'
        }`}
      >
        <nav
          className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* Dynamic Logo with Red Gradient Fill & Subtle Hover Scale */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavigate('#home')
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="group relative flex items-center gap-2 cursor-pointer focus:outline-none"
            aria-label="Chhin Chhat — Home"
          >
            {/* Glowing Accent Ring on Hover */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 via-rose-500 to-red-400 p-[1.5px] shadow-sm shadow-red-500/30 group-hover:shadow-red-500/60 transition-shadow">
              <div className="w-full h-full bg-dark-bg rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-sm tracking-tight bg-gradient-to-r from-red-400 to-rose-300 bg-clip-text text-transparent">
                  CC
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-red-400 transition-colors">
                Chhin Chhat
              </span>
              <span className="text-[10px] text-text-faint -mt-1 tracking-wider uppercase">
                POSIBLE ALL TIME
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links with Animated Floating Active Pill */}
          <ul
            className="hidden md:flex items-center gap-1 p-1 rounded-full bg-surface/50 border border-white/5 backdrop-blur-sm"
            onMouseLeave={() => setHoveredSection(null)}
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href
              const isHovered = hoveredSection === link.href

              return (
                <li key={link.key} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigate(link.href)
                    }}
                    onMouseEnter={() => setHoveredSection(link.href)}
                    className={`relative z-10 block px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-text-muted hover:text-white'
                    }`}
                  >
                    {t(link.key)}
                  </a>

                  {/* Active Link Indicator (layoutId="active-pill") */}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-red-500 shadow-md shadow-red-500/30 -z-0"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover Highlight (when not active) */}
                  {!isActive && isHovered && (
                    <motion.div
                      layoutId="hover-pill"
                      className="absolute inset-0 rounded-full bg-red-500/10 border border-red-500/20 -z-0"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </li>
              )
            })}
          </ul>

          {/* Right Side Controls: Language Switcher, Theme Toggle, Mobile Hamburger */}
          <div className="flex items-center gap-2">
            {/* Desktop Language Switcher (EN | KM pill toggle) */}
            <div className="hidden sm:flex items-center p-1 rounded-full bg-surface/70 border border-border">
              <button
                type="button"
                onClick={() => {
                  if (currentLang !== 'EN') toggleLang()
                }}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                  currentLang === 'EN'
                    ? 'bg-red-500 text-white shadow-sm shadow-red-500/30'
                    : 'text-text-muted hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                <Globe size={11} />
                EN
              </button>
              <button
                type="button"
                onClick={() => {
                  if (currentLang !== 'KM') toggleLang()
                }}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                  currentLang === 'KM'
                    ? 'bg-red-500 text-white shadow-sm shadow-red-500/30'
                    : 'text-text-muted hover:text-white font-khmer'
                }`}
                aria-label="Switch to Khmer"
              >
                ខ្មែរ
              </button>
            </div>

            {/* Dark / Light Theme Switch */}
            <motion.button
              type="button"
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              aria-label={theme === 'dark' ? t('theme.light') : t('theme.dark')}
              className="p-2 rounded-xl text-text-muted hover:text-white bg-surface/60 hover:bg-surface border border-border
                         hover:border-red-500/30 hover:shadow-[0_0_12px_rgba(239,68,68,0.2)] transition-all"
            >
              {theme === 'dark' ? (
                <Sun size={16} className="text-amber-400" />
              ) : (
                <Moon size={16} className="text-red-400" />
              )}
            </motion.button>

            {/* Mobile Animated Morphing Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileOpen}
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center rounded-xl bg-surface/60 border border-border hover:border-red-500/40 text-text transition-colors focus:outline-none"
            >
              <span className="sr-only">Toggle navigation menu</span>
              <div className="w-5 h-4 relative flex flex-col justify-between">
                {/* Top line morphs */}
                <motion.span
                  animate={
                    mobileOpen
                      ? { rotate: 45, y: 7, backgroundColor: '#EF4444' }
                      : { rotate: 0, y: 0, backgroundColor: '#FAFAFA' }
                  }
                  transition={{ duration: 0.25 }}
                  className="w-full h-0.5 rounded-full origin-center"
                />
                {/* Middle line fades */}
                <motion.span
                  animate={
                    mobileOpen
                      ? { opacity: 0, x: -8 }
                      : { opacity: 1, x: 0, backgroundColor: '#FAFAFA' }
                  }
                  transition={{ duration: 0.2 }}
                  className="w-full h-0.5 rounded-full"
                />
                {/* Bottom line morphs */}
                <motion.span
                  animate={
                    mobileOpen
                      ? { rotate: -45, y: -7, backgroundColor: '#EF4444' }
                      : { rotate: 0, y: 0, backgroundColor: '#FAFAFA' }
                  }
                  transition={{ duration: 0.25 }}
                  className="w-full h-0.5 rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Navigation Drawer ── */}
      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        currentLang={currentLang}
        onToggleLang={toggleLang}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    </>
  )
}
