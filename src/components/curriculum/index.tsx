'use client'
import { GrDocumentPdf as IconPdf } from 'react-icons/gr'
import { css } from 'styled-components'

import { Link } from '@/commons/link'
import { Text } from '@/commons/text'
import { Theme } from '@/configs/theme'

export const Curriculum = () => {
  return (
    <Link
      style={css`
        display: flex;
        align-items: center;
        &:hover {
          color: ${Theme.color['secondary-four']};
        }
      `}
      href=""
    >
      <Text as="span">CV:</Text>
      <IconPdf size={20} />
    </Link>
  )
}
