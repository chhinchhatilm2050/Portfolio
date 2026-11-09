import { useEffect, useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  X,
  Download,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  FileText,
  Sparkles,
  FileCheck2,
  Eye,
  ChevronDown,
  Check,
} from 'lucide-react'
import { useCvModal } from '../context/CvModalContext'
import cvImage from '../assets/chhinchat-cv.png'

export default function CvModal() {
  const { isCvOpen, closeCvModal, downloadPdf, downloadPng } = useCvModal()
  const { t } = useTranslation()
  const [zoomLevel, setZoomLevel] = useState(100)
  const [isMobile, setIsMobile] = useState(false)
  const [viewMode, setViewMode] = useState<'image' | 'pdf'>('image')
  const [downloadMenuOpen, setDownloadMenuOpen] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState<'pdf' | 'png' | null>(null)
  const downloadRef = useRef<HTMLDivElement>(null)

  // Detect mobile device or narrow screen on mount and resize
  useEffect(() => {
    const checkIsMobile = () => {
      const mobile =
        window.innerWidth < 768 ||
        /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
      // Mobile browsers block PDF inside iframe — default to clean image view on mobile
      if (mobile) {
        setViewMode('image')
      }
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // Close download menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (downloadRef.current && !downloadRef.current.contains(e.target as Node)) {
        setDownloadMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Reset zoom & view mode whenever modal opens
  useEffect(() => {
    if (isCvOpen) {
      setZoomLevel(100)
      setDownloadMenuOpen(false)
      setDownloadSuccess(null)
      if (window.innerWidth < 768) {
        setViewMode('image')
      }
    }
  }, [isCvOpen])

  // ESC key listener & body scroll lock
  useEffect(() => {
    if (!isCvOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCvModal()
      }
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isCvOpen, closeCvModal])

  const handleZoomIn = useCallback(() => {
    setZoomLevel((prev) => Math.min(prev + 20, 180))
  }, [])

  const handleZoomOut = useCallback(() => {
    setZoomLevel((prev) => Math.max(prev - 20, 60))
  }, [])

  const handleZoomReset = useCallback(() => {
    setZoomLevel(100)
  }, [])

  const triggerDownload = (format: 'pdf' | 'png') => {
    if (format === 'pdf') {
      downloadPdf()
    } else {
      downloadPng()
    }
    setDownloadSuccess(format)
    setDownloadMenuOpen(false)
    setTimeout(() => setDownloadSuccess(null), 3000)
  }

  return (
    <AnimatePresence>
      {isCvOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden"
        >
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCvModal}
            className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            className="relative w-full max-w-5xl h-[92vh] flex flex-col rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden z-10" data-cv-modal="true"
          >
            {/* ── Modal Header Bar ── */}
            <div className="relative z-30 flex flex-wrap items-center justify-between gap-3 px-3 sm:px-6 py-3 border-b border-zinc-800/80 bg-zinc-950/98 backdrop-blur-md">
              {/* Left: Title & Badges */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shadow-sm shadow-red-500/10 shrink-0">
                  <FileText size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <h3 id="cv-modal-title" className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {t('cv.preview_title', 'Curriculum Vitae (CV)')}
                    </h3>
                    {/* <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-500/15 text-red-400 border border-red-500/30">
                      <GraduationCap size={11} />
                      GPA 3.95 / 4.0
                    </span>
                    <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-zinc-800 text-zinc-300 border border-zinc-700">
                      <Award size={11} className="text-amber-400" />
                      BACII Grade B
                    </span> */}
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-400">
                    Chhin Chhat • Web Developer • SETEC MIS Year 2
                  </p>
                </div>
              </div>

              {/* Right: Actions (View Switcher on desktop, Zoom, Open Tab, Download Dropdown, Close) */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Desktop View Switcher (Document vs PDF) */}
                {!isMobile && (
                  <div className="hidden sm:flex items-center p-0.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setViewMode('image')}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                        viewMode === 'image'
                          ? 'bg-red-500 text-white shadow-sm shadow-red-500/30'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                      title="View Document"
                    >
                      <Eye size={13} />
                      <span>Document</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('pdf')}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                        viewMode === 'pdf'
                          ? 'bg-red-500 text-white shadow-sm shadow-red-500/30'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                      title="View PDF Reader"
                    >
                      <FileCheck2 size={13} />
                      <span>PDF</span>
                    </button>
                  </div>
                )}

                {/* Zoom Controls (Image mode) */}
                {viewMode === 'image' && (
                  <div className="hidden sm:flex items-center rounded-lg bg-zinc-900 border border-zinc-800 p-0.5 text-xs text-zinc-300">
                    <button
                      type="button"
                      onClick={handleZoomOut}
                      disabled={zoomLevel <= 60}
                      className="p-1.5 hover:text-white hover:bg-zinc-800 rounded disabled:opacity-40 transition-colors cursor-pointer"
                      title={t('cv.zoom_out', 'Zoom Out')}
                      aria-label="Zoom Out"
                    >
                      <ZoomOut size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={handleZoomReset}
                      className="px-2 py-1 font-mono text-[11px] hover:text-white transition-colors cursor-pointer"
                      title={t('cv.reset_zoom', 'Reset Zoom')}
                    >
                      {zoomLevel}%
                    </button>
                    <button
                      type="button"
                      onClick={handleZoomIn}
                      disabled={zoomLevel >= 180}
                      className="p-1.5 hover:text-white hover:bg-zinc-800 rounded disabled:opacity-40 transition-colors cursor-pointer"
                      title={t('cv.zoom_in', 'Zoom In')}
                      aria-label="Zoom In"
                    >
                      <ZoomIn size={14} />
                    </button>
                  </div>
                )}

                {/* Open in New Tab (Direct PDF URL) */}
                <a
                  href="/chhat-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                  title={t('cv.open_tab', 'Open PDF in New Tab')}
                  aria-label="Open CV PDF in new tab"
                >
                  <ExternalLink size={15} />
                </a>

                {/* ── Choose Format Download Dropdown (PDF & PNG) ── */}
                <div ref={downloadRef} className="relative z-50">
                  <div className="inline-flex rounded-lg shadow-md shadow-red-500/20">
                    {/* Primary quick download (PDF) */}
                    <button
                      type="button"
                      onClick={() => triggerDownload('pdf')}
                      className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-l-lg bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer"
                      title="Download as PDF"
                    >
                      {downloadSuccess ? (
                        <>
                          <Check size={14} className="text-white" />
                          <span>Downloaded {downloadSuccess.toUpperCase()}</span>
                        </>
                      ) : (
                        <>
                          <Download size={14} />
                          <span>{t('cv.download_cv', 'Download CV')}</span>
                        </>
                      )}
                    </button>

                    {/* Chevron to pick PNG or PDF */}
                    <button
                      type="button"
                      onClick={() => setDownloadMenuOpen((prev) => !prev)}
                      className="px-2 py-1.5 sm:py-2 rounded-r-lg bg-red-600 hover:bg-red-700 text-white border-l border-red-700/60 transition-all cursor-pointer flex items-center justify-center"
                      title="Choose format (PDF or PNG)"
                      aria-expanded={downloadMenuOpen}
                      aria-haspopup="true"
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${downloadMenuOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {downloadMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute -right-9 sm:right-0 top-full mt-2 w-56 p-1.5 rounded-xl bg-zinc-900 border border-zinc-700 shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-50 flex flex-col gap-1 backdrop-blur-2xl"
                      >
                        <div className="px-2.5 py-1 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                          Choose Download Format
                        </div>

                        {/* PDF Option */}
                        <button
                          type="button"
                          onClick={() => triggerDownload('pdf')}
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-xs font-semibold text-white hover:bg-red-500/10 hover:text-red-400 border border-transparent hover:border-red-500/20 transition-all cursor-pointer group"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-md bg-red-500/15 text-red-500 flex items-center justify-center font-bold text-[11px]">
                              PDF
                            </div>
                            <div className="flex flex-col">
                              <span>PDF Document</span>
                              <span className="text-[10px] text-zinc-400 font-normal">Official • Best for ATS</span>
                            </div>
                          </div>
                          <Download size={13} className="text-zinc-500 group-hover:text-red-400" />
                        </button>

                        {/* PNG Option */}
                        <button
                          type="button"
                          onClick={() => triggerDownload('png')}
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-xs font-semibold text-white hover:bg-red-500/10 hover:text-red-400 border border-transparent hover:border-red-500/20 transition-all cursor-pointer group"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-md bg-zinc-800 text-zinc-300 flex items-center justify-center font-bold text-[11px]">
                              PNG
                            </div>
                            <div className="flex flex-col">
                              <span>Image Format</span>
                              <span className="text-[10px] text-zinc-400 font-normal">High-Res PNG</span>
                            </div>
                          </div>
                          <Download size={13} className="text-zinc-500 group-hover:text-red-400" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeCvModal}
                  aria-label="Close CV Modal"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* ── Modal Viewport ── */}
            <div className="relative z-10 flex-1 overflow-hidden bg-zinc-950/95 flex items-center justify-center">
              {viewMode === 'pdf' && !isMobile ? (
                /* Desktop PDF View */
                <div className="w-full h-full p-2 sm:p-4">
                  <iframe
                    src="/chhat-cv.pdf#view=FitH"
                    title="Chhin Chhat - Professional CV PDF"
                    className="w-full h-full border-0 rounded-xl bg-white shadow-2xl"
                  />
                </div>
              ) : (
                /* Document View: Crisp, 100% Mobile & Desktop Compatible (No Chrome Blocking) */
                <div className="w-full h-full overflow-auto flex items-start justify-center p-3 sm:p-6 md:p-8 select-none">
                  <div
                    style={{
                      width: `${zoomLevel}%`,
                      maxWidth: zoomLevel <= 100 ? '780px' : `${zoomLevel * 8}px`,
                      transition: 'width 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="relative my-auto rounded-xl shadow-[0_15px_60px_-15px_rgba(0,0,0,0.85)] overflow-hidden border border-zinc-800 bg-white"
                  >
                    <img
                      src={cvImage}
                      alt="Chhin Chhat - Professional Curriculum Vitae (CV)"
                      className="w-full h-auto block object-contain"
                      loading="eager"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ── Modal Footer Bar ── */}
            <div className="flex items-center justify-between px-3.5 sm:px-6 py-2.5 border-t border-zinc-800/80 bg-zinc-950 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                <Sparkles size={12} className="text-red-500 shrink-0" />
                <span className="truncate">{t('hero.available', 'Available for internships & projects')}</span>
              </span>
              <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs shrink-0">
                <span>+855 60 600 705</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">Phnom Penh, Cambodia</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
