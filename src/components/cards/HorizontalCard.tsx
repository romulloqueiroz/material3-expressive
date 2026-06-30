'use client'

import { useMaterial3 } from '../../context/Material3Provider'
import { Text } from '../display'
import { MoreOptionsMenu } from '../navigation'
import { HorizontalCardProps } from './types'

export const HorizontalCard = ({
  title,
  description,
  subtitle,
  date,
  imageUrl,
  linkUrl,
  menuActions,
}: HorizontalCardProps) => {
  const { Link, Image } = useMaterial3()

  return (
    <Link href={linkUrl} prefetch={false}>
      <div className='group relative bg-[var(--md-sys-color-surface-container-low)] rounded-[var(--md-sys-shape-corner-large)] flex h-[120px] hover:shadow-md transition-shadow duration-medium-2'>
        <span className='absolute inset-0 bg-[var(--md-sys-color-on-surface)] opacity-0 group-hover:opacity-[0.04] rounded-[var(--md-sys-shape-corner-large)] transition-opacity duration-short-2' />
        <div className='relative w-[120px] flex-shrink-0 rounded-[var(--md-sys-shape-corner-large)] overflow-hidden'>
          {imageUrl ? (
            <Image src={imageUrl} alt={title} fill sizes='120px' className='object-cover' />
          ) : (
            <div className='w-full h-full bg-[var(--md-sys-color-surface-container)] flex items-center justify-center' />
          )}
        </div>
        <div className='flex-grow min-w-0 p-16dp flex flex-col justify-center'>
          <Text type='headline' size='small' className='text-[var(--md-sys-color-on-surface)] mb-4dp truncate'>
            {title}
          </Text>
          {description && (
            <Text type='body' size='medium' className='text-[var(--md-sys-color-on-surface-variant)] mb-8dp line-clamp-1'>
              {description}
            </Text>
          )}
          <div className='flex justify-between items-center'>
            <Text type='label' size='medium' className='text-[var(--md-sys-color-on-surface-variant)]'>
              {subtitle}
            </Text>
            <Text type='label' size='small' className='text-[var(--md-sys-color-on-surface-variant)]'>
              {date.toLocaleDateString()}
            </Text>
          </div>
        </div>
        {menuActions.length > 0 && (
          <MoreOptionsMenu actions={menuActions} className='absolute top-8dp right-8dp' />
        )}
      </div>
    </Link>
  )
}
