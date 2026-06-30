import { MenuAction } from '../navigation'

export interface CardProps {
  id: string
  title: string
  description: string | null
  language: string
  uploadedAt: Date
  linkPrefix?: string
  className?: string
  imageUrl?: string | null
  /** Menu actions to render. Wrap/intercept them in the consumer before passing. */
  menuActions?: MenuAction[]
  showMenu?: boolean
  variant?: 'lesson' | 'book'
  isPriority?: boolean
  /** Hover handler — consumers can wire prefetching here. */
  onMouseEnter?: () => void
}

export interface CardImageProps {
  imageUrl: string | null | undefined
  title: string
  isPriority: boolean
  variant: 'lesson' | 'book'
}

export interface CardContentProps {
  title: string
  description: string | null
  language: string
  uploadedAt: Date
}

export interface CardMenuProps {
  showMenu: boolean
  actions: MenuAction[]
}

export interface HorizontalCardProps {
  id: string
  title: string
  description: string | null
  subtitle: string
  date: Date
  imageUrl?: string | null
  linkUrl: string
  menuActions: MenuAction[]
}
