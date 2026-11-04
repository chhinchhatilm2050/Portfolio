export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'uiux'

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
  category: 'fullstack' | 'frontend' | 'uiux'
  tags: string[]
  image: string
  githubUrl: string
  liveUrl: string
  featured: boolean
  timeline?: string
  role?: LocalizedString
  keyFeatures?: LocalizedStringArray
}

