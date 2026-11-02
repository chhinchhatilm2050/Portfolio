export type ProjectCategory = 'all' | 'fullstack' | 'mobile' | 'web3' | 'design'

export interface LocalizedString {
  en: string
  km: string
}

export interface LocalizedStringArray {
  en: string[]
  km: string[]
}

export interface Project {
  id: string
  title: LocalizedString
  description: LocalizedString
  fullDescription: LocalizedString
  category: 'fullstack' | 'mobile' | 'web3' | 'design'
  tags: string[]
  image: string
  githubUrl: string
  liveUrl: string
  featured: boolean
  timeline?: string
  role?: LocalizedString
  keyFeatures?: LocalizedStringArray
}

