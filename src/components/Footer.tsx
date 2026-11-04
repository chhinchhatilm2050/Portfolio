import { useTranslation } from 'react-i18next'
import { Mail } from 'lucide-react'

// Custom SVG brand icons (Lucide does not include third-party brand logos)
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

function LinkedinIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
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

const SOCIAL_LINKS = [
  { icon: GithubIcon,   href: 'https://github.com/chhinchhatilm2050',    label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/chhin-chhat-7202bb407',  label: 'LinkedIn' },
  { icon: Mail,         href: 'mailto:hello@example.com', label: 'Email' },
]

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-bg-deep">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Branding */}
        <div className="flex flex-col items-center md:items-start gap-1">
          {/* <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-red-600 via-rose-500 to-red-400 p-[1px] shadow-sm shadow-red-500/30">
              <div className="w-full h-full bg-dark-bg rounded-[7px] flex items-center justify-center">
                <span className="font-extrabold text-xs tracking-tight bg-gradient-to-r from-red-400 to-rose-300 bg-clip-text text-transparent">
                  CC
                </span>
              </div>
            </div>
            <span className="text-base font-bold text-white">Chhin Chhat</span>
          </div> */}
          <p className="text-xs text-text-faint">
            © {year} — {t('footer.rights')} Chhin Chhat
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 rounded-xl border border-border text-text-muted
                         hover:text-primary hover:border-primary transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Made with love */}
        <p className="text-xs text-text-faint flex items-center gap-1">
          Don't think it impossible if you haven't tried it yet
        </p>
      </div>
    </footer>
  )
}

