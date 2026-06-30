'use client'

import { cn } from '../../utils'
import { useMaterial3 } from '../../context/Material3Provider'
import { CardImageProps } from './types'

export const CardImage = ({
  imageUrl,
  title,
  isPriority,
  variant,
}: CardImageProps) => {
  const { Image } = useMaterial3()

  // Validate image URL format
  const isValidImageUrl = (url: string) =>
    url.startsWith('/') || url.startsWith('http://') || url.startsWith('https://')

  return (
    <div
      className={cn(
        'bg-[var(--md-sys-color-surface-container-low)] relative overflow-hidden rounded-[var(--md-sys-shape-corner-medium)]',
        variant === 'book' ? 'aspect-[2/3]' : 'aspect-video'
      )}
    >
      {imageUrl && isValidImageUrl(imageUrl) ? (
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover rounded-[var(--md-sys-shape-corner-medium)]'
          priority={isPriority}
        />
      ) : (
        <div className='w-full h-full flex items-center justify-center rounded-[var(--md-sys-shape-corner-medium)]'>
          <span className='material-symbols-outlined text-6xl text-[var(--md-sys-color-on-surface-variant)]'>
            article
          </span>
        </div>
      )}
    </div>
  )
}
