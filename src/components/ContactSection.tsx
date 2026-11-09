import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Phone,
  MapPin,
  Mail,
} from 'lucide-react'

// ── Replace with your real EmailJS credentials ─────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactSection() {
  const { t } = useTranslation()
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormStatus>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ mode: 'onTouched' })

  const onSubmit = async (_data: ContactFormData) => {
    if (!formRef.current) return
    setStatus('submitting')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      reset()
      setTimeout(() => setStatus('idle'), 6000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  const inputBase =
    'w-full rounded-lg bg-zinc-900/60 border border-zinc-700/60 text-sm text-white placeholder-zinc-500 px-4 py-3 outline-none transition-all duration-200 focus:ring-2 focus:ring-red-500/40 focus:border-red-500/50 hover:border-zinc-600'

  const fieldClass = (hasError: boolean) =>
    `${inputBase} ${hasError ? 'border-red-500/60 bg-red-500/5' : ''}`

  const infoCards = [
    {
      icon: Phone,
      label: t('contact.info_call'),
      lines: ['+855 60 600 705'],
    },
    {
      icon: Mail,
      label: t('contact.info_email'),
      lines: ['chhinchhat.ilm2050@gmail.com'],
    },
    {
      icon: MapPin,
      label: t('contact.info_location'),
      lines: ['Terk Thla, Phnom Penh, Cambodia'],
    },
  ]

  return (
    <section
      id="contact"
      className="relative py-24 px-6 sm:px-10 lg:px-12 w-full bg-dark-bg border-t border-zinc-800/60 overflow-hidden"
    >
      {/* Ambient Crimson Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto w-full">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            {t('contact.title')}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            {t('contact.desc')}
          </p>
        </motion.div>

        {/* ── Info Cards Row ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14"
        >
          {infoCards.map(({ icon: Icon, label, lines }) => (
            <div
              key={label}
              className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80
                         hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(239,68,68,0.1)]
                         transition-all duration-300 group"
            >
              {/* Icon Circle */}
              <div className="shrink-0 w-11 h-11 rounded-full bg-red-500/15 border border-red-500/25 flex items-center justify-center text-red-400 group-hover:bg-red-500/25 transition-colors">
                <Icon size={18} />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <p className="text-xs font-bold text-zinc-300 mb-0.5 truncate">{label}</p>
                {lines.map((line) => (
                  <p key={line} className="text-xs text-zinc-500 truncate">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── "Get In Touch" + Form ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-8">
            {t('contact.get_in_touch')}
          </h3>

          {/* Status Alerts */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3 px-5 py-3.5 mb-6 rounded-xl bg-green-500/15 border border-green-500/30 text-green-400 text-sm font-semibold"
              >
                <CheckCircle2 size={17} className="shrink-0" />
                {t('contact.success')}
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3 px-5 py-3.5 mb-6 rounded-xl bg-red-500/15 border border-red-500/40 text-red-400 text-sm font-semibold"
              >
                <AlertCircle size={17} className="shrink-0" />
                {t('contact.error')}
              </motion.div>
            )}
          </AnimatePresence>

          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-4"
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <input
                  type="text"
                  placeholder={t('contact.name')}
                  autoComplete="name"
                  className={fieldClass(!!errors.name)}
                  {...register('name', {
                    required: 'Name is required',
                    minLength: { value: 2, message: 'At least 2 characters' },
                  })}
                />
                {errors.name && (
                  <p className="text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle size={10} />{errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <input
                  type="email"
                  placeholder={t('contact.email')}
                  autoComplete="email"
                  className={fieldClass(!!errors.email)}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-400 flex items-center gap-1">
                    <AlertCircle size={10} />{errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-1">
              <input
                type="text"
                placeholder={t('contact.subject')}
                className={fieldClass(!!errors.subject)}
                {...register('subject', {
                  required: 'Subject is required',
                  minLength: { value: 5, message: 'At least 5 characters' },
                })}
              />
              {errors.subject && (
                <p className="text-[11px] text-red-400 flex items-center gap-1">
                  <AlertCircle size={10} />{errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-1">
              <textarea
                rows={6}
                placeholder={t('contact.message')}
                className={`${fieldClass(!!errors.message)} resize-none leading-relaxed`}
                {...register('message', {
                  required: 'Message is required',
                  minLength: { value: 20, message: 'At least 20 characters' },
                })}
              />
              {errors.message && (
                <p className="text-[11px] text-red-400 flex items-center gap-1">
                  <AlertCircle size={10} />{errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button — centered */}
            <div className="flex justify-center pt-2">
              <motion.button
                type="submit"
                disabled={status === 'submitting'}
                whileHover={{ scale: status === 'submitting' ? 1 : 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex animate-pulse items-center gap-2.5 px-10 py-3 rounded-lg font-bold text-sm text-white
                           bg-red-500 hover:bg-red-600 disabled:bg-zinc-700 disabled:cursor-not-allowed
                           shadow-[0_0_22px_rgba(239,68,68,0.45)] hover:shadow-[0_0_32px_rgba(239,68,68,0.6)]
                           disabled:shadow-none transition-all duration-200"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    {t('contact.send')}
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  )
}
