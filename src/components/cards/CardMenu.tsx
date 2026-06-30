import { MoreOptionsMenu } from '../navigation'
import { CardMenuProps } from './types'

export const CardMenu = ({ showMenu, actions }: CardMenuProps) =>
  showMenu && actions.length > 0 ? (
    <MoreOptionsMenu actions={actions} className='absolute top-2 right-2' />
  ) : null
