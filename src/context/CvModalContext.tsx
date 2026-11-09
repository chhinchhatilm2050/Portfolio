import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type CvFormat = 'pdf' | 'png'

interface CvModalContextType {
  isCvOpen: boolean
  openCvModal: () => void
  closeCvModal: () => void
  downloadCv: (format?: CvFormat) => void
  downloadPdf: () => void
  downloadPng: () => void
}

const CvModalContext = createContext<CvModalContextType | undefined>(undefined)

export function CvModalProvider({ children }: { children: ReactNode }) {
  const [isCvOpen, setIsCvOpen] = useState(false)

  const openCvModal = useCallback(() => {
    setIsCvOpen(true)
  }, [])

  const closeCvModal = useCallback(() => {
    setIsCvOpen(false)
  }, [])

  const downloadPdf = useCallback(() => {
    const link = document.createElement('a')
    link.href = '/chhat-cv.pdf'
    link.download = 'Chhin_Chhat_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  const downloadPng = useCallback(() => {
    const link = document.createElement('a')
    link.href = '/chhinchat-cv.png'
    link.download = 'Chhin_Chhat_CV.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  const downloadCv = useCallback((format: CvFormat = 'pdf') => {
    if (format === 'png') {
      downloadPng()
    } else {
      downloadPdf()
    }
  }, [downloadPdf, downloadPng])

  return (
    <CvModalContext.Provider
      value={{
        isCvOpen,
        openCvModal,
        closeCvModal,
        downloadCv,
        downloadPdf,
        downloadPng,
      }}
    >
      {children}
    </CvModalContext.Provider>
  )
}

export function useCvModal() {
  const context = useContext(CvModalContext)
  if (!context) {
    throw new Error('useCvModal must be used within a CvModalProvider')
  }
  return context
}
