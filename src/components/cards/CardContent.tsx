import { CardContentProps } from './types'
import { Text } from '../display'

export const CardContent = ({ title, description, language, uploadedAt }: CardContentProps) => (
  <div className='p-16dp'>
    <Text
      type='title'
      size='medium'
      className='text-[var(--md-sys-color-on-surface)] mb-1 truncate'
    >
      {title}
    </Text>
    <div className='min-h-[40px]'>
      {description && (
        <Text
          type='body'
          size='medium'
          className='text-[var(--md-sys-color-on-surface-variant)] mb-2 line-clamp-2'
        >
          {description}
        </Text>
      )}
    </div>
    <div className='flex justify-between items-center mt-2'>
      <Text
        type='label'
        size='medium'
        className='text-[var(--md-sys-color-on-surface-variant)]'
      >
        {language}
      </Text>
      <Text
        type='label'
        size='small'
        className='text-[var(--md-sys-color-on-surface-variant)]'
      >
        {uploadedAt.toLocaleDateString()}
      </Text>
    </div>
  </div>
)
