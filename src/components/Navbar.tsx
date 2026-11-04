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
  { key: 'nav.education',  href: '#education' },
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

  // Active section spy & scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = NAV_LINKS.map(link => link.href.slice(1))
      const scrollPosition = window.scrollY + 140

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
      {/* ── Sticky Navbar (Red bottom border ONLY when scrolled to top) ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300  ${
          scrolled
            ? 'bg-dark-bg/95 backdrop-blur-md border-transparent shadow-lg shadow-black/60 py-3'
            : 'bg-dark-bg/80 backdrop-blur-md border-red-500/40 py-4'
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* Left: Brand Logo (CC in red border box + Title & Subtitle) */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavigate('#home')
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 cursor-pointer focus:outline-none group"
            aria-label="Chhin Chhat — Home"
          >
            {/* Outlined CC box */}
            <div className="w-10 h-10 rounded-xl border border-red-500 flex items-center justify-center text-red-500 font-bold text-sm tracking-wider shadow-[0_0_12px_rgba(239,68,68,0.25)] group-hover:shadow-[0_0_18px_rgba(239,68,68,0.5)] transition-all">
              CC
            </div>
            {/* Title & Subtitle */}
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-red-400 transition-colors">
                Chhin Chhat
              </span>
              <span className="text-[10px] text-zinc-500 font-semibold tracking-wider uppercase -mt-0.5">
                POSIBLE ALL TIME
              </span>
            </div>
          </motion.a>

          {/* Center: Desktop Navigation Links Capsule Pill */}
          <ul
            className="hidden md:flex items-center gap-1 p-1 rounded-full bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md shadow-inner"
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
                    className={`relative z-10 block px-4 py-1.5 rounded-full text-xs transition-colors duration-200 ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-zinc-400 hover:text-white font-medium'
                    }`}
                  >
                    {t(link.key)}
                  </a>

                  {/* Active Link Solid Red Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute animate-pulse inset-0 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.45)] -z-0"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}

                  {/* Hover Pill (when not active) */}
                  {!isActive && isHovered && (
                    <motion.div
                      layoutId="hover-pill"
                      className="absolute inset-0 rounded-full bg-white/5 -z-0"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}
                </li>
              )
            })}
          </ul>

          {/* Right: Controls (Language Switcher & Theme Toggle) */}
          <div className="flex items-center gap-2.5">
            {/* Desktop Language Switcher Pill */}
            <div className="hidden sm:flex items-center p-1 rounded-full bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md">
              <button
                type="button"
                onClick={() => {
                  if (currentLang !== 'EN') toggleLang()
                }}
                className={`flex items-center gap-1 px-3 cursor-pointer py-1 rounded-full text-xs font-bold transition-all ${
                  currentLang === 'EN'
                    ? 'bg-red-500 text-white shadow-[0_0_10px_rgba(239,68,68,0.4)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                <Globe size={12} />
                EN
              </button>
              <button
                type="button"
                onClick={() => {
                  if (currentLang !== 'KM') toggleLang()
                }}
                className={`flex items-center gap-1 px-2.5 py-1 cursor-pointer rounded-full text-xs font-bold transition-all ${
                  currentLang === 'KM'
                    ? 'bg-red-500 text-white shadow-[0_0_10px_rgba(239,68,68,0.4)]'
                    : 'text-zinc-400 hover:text-white font-khmer'
                }`}
                aria-label="Switch to Khmer"
              >
                ខ្មែរ
              </button>
            </div>

            {/* Circular Theme Toggle Button */}
            <motion.button
              type="button"
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              aria-label={theme === 'dark' ? t('theme.light') : t('theme.dark')}
              className="w-9 cursor-pointer h-9 rounded-full bg-zinc-950/80 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700
                         flex items-center justify-center text-amber-400 hover:text-amber-300 transition-all shadow-sm"
            >
              {theme === 'dark' ? (
                <Sun size={15} className="text-amber-400 animate-spin" />
              ) : (
                <Moon size={15} className="text-red-400 animate-none" />
              )}
            </motion.button>

            {/* Mobile Animated Morphing Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileOpen}
              className="md:hidden cursor-pointer relative w-10 h-10 flex flex-col items-center justify-center rounded-xl bg-zinc-950/80 border border-zinc-800 text-white transition-colors focus:outline-none"
            >
              <span className="sr-only">Toggle navigation menu</span>
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <motion.span
                  animate={
                    mobileOpen
                      ? { rotate: 45, y: 7, backgroundColor: '#EF4444' }
                      : { rotate: 0, y: 0, backgroundColor: '#FAFAFA' }
                  }
                  transition={{ duration: 0.25 }}
                  className="w-full h-0.5 rounded-full origin-center"
                />
                <motion.span
                  animate={
                    mobileOpen
                      ? { opacity: 0, x: -8 }
                      : { opacity: 1, x: 0, backgroundColor: '#FAFAFA' }
                  }
                  transition={{ duration: 0.2 }}
                  className="w-full h-0.5 rounded-full"
                />
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
