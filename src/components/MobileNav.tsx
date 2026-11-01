import { useEffect } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Sun, Moon, Globe, ArrowRight } from 'lucide-react'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  links: Array<{ key: string; href: string }>
  activeSection: string
  onNavigate: (href: string) => void
  currentLang: 'EN' | 'KM'
  onToggleLang: () => void
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const drawerVariants: Variants = {
  hidden: { x: '100%', opacity: 0.8 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 320,
      damping: 32,
    },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.25, ease: 'easeInOut' },
  },
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
}

export default function MobileNav({
  isOpen,
  onClose,
  links,
  activeSection,
  onNavigate,
  currentLang,
  onToggleLang,
  theme,
  onToggleTheme,
}: MobileNavProps) {
  const { t } = useTranslation()

  // Scroll lock on body element when drawer is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalStyle
      }
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            key="mobile-backdrop"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/75 backdrop-blur-md md:hidden"
            aria-hidden="true"
          />

          {/* Full Height Drawer */}
          <motion.aside
            key="mobile-drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-dark-bg/95 backdrop-blur-xl
                       border-l border-red-500/20 shadow-2xl flex flex-col pt-20 pb-8 px-6 md:hidden"
          >
            {/* Header / Brand label in drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-border/80">
              <span className="text-sm font-semibold tracking-wider uppercase text-text-muted">
                Navigation
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Live
              </span>
            </div>

            {/* Staggered Navigation Links */}
            <motion.nav
              className="mt-6 flex-1 overflow-y-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <ul className="flex flex-col gap-2">
                {links.map((link) => {
                  const isActive = activeSection === link.href

                  return (
                    <motion.li key={link.key} variants={itemVariants}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault()
                          onNavigate(link.href)
                          onClose()
                        }}
                        className={`group relative flex items-center justify-between px-4 py-3.5 rounded-xl font-medium text-base transition-all ${
                          isActive
                            ? 'text-white bg-gradient-to-r from-red-500/20 to-red-500/5 border border-red-500/40 shadow-sm shadow-red-500/10'
                            : 'text-text-muted hover:text-white hover:bg-surface border border-transparent'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {isActive && (
                            <span className="w-1.5 h-4 rounded-full bg-red-500 shadow-[0_0_8px_#EF4444]" />
                          )}
                          <span className={isActive ? 'font-semibold' : ''}>
                            {t(link.key)}
                          </span>
                        </span>

                        <ArrowRight
                          size={16}
                          className={`transition-transform duration-200 ${
                            isActive
                              ? 'text-red-400 translate-x-0'
                              : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-text-faint'
                          }`}
                        />
                      </a>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.nav>

            {/* Bottom Controls: Language & Theme Switcher */}
            <div className="pt-6 border-t border-border/80 flex flex-col gap-3">
              {/* Language Pill Switcher */}
              <div className="flex items-center justify-between p-1.5 rounded-xl bg-surface border border-border">
                <span className="flex items-center gap-2 pl-2 text-xs font-medium text-text-muted">
                  <Globe size={14} className="text-red-400" />
                  Language
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => {
                      if (currentLang !== 'EN') onToggleLang()
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      currentLang === 'EN'
                        ? 'bg-red-500 text-white shadow-sm shadow-red-500/30'
                        : 'text-text-muted hover:text-white'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (currentLang !== 'KM') onToggleLang()
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      currentLang === 'KM'
                        ? 'bg-red-500 text-white shadow-sm shadow-red-500/30'
                        : 'text-text-muted hover:text-white font-khmer'
                    }`}
                  >
                    ខ្មែរ
                  </button>
                </div>
              </div>

              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={onToggleTheme}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-surface border border-border
                           text-xs font-medium text-text-muted hover:text-white hover:border-red-500/30 transition-all"
              >
                <span className="flex items-center gap-2">
                  {theme === 'dark' ? (
                    <Moon size={15} className="text-red-400" />
                  ) : (
                    <Sun size={15} className="text-amber-400" />
                  )}
                  <span>{theme === 'dark' ? t('theme.dark') : t('theme.light')}</span>
                </span>
                <span className="text-[11px] font-semibold text-text-faint uppercase tracking-wider">
                  {theme}
                </span>
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
