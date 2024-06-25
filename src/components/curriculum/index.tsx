'use client'

import { GrDocumentPdf as IconPdf } from 'react-icons/gr'
import styled from 'styled-components'

import { Link } from '@/commons/link'
import { Text } from '@/commons/text'
import { Theme } from '@/configs/theme'

const SLink = styled(Link)`
  display: flex;

  align-items: center;
  &:hover {
    color: ${Theme.color['secondary-four']};
  }
`

export const Curriculum = () => {
  return (
    <SLink href="">
      <Text as="span">CV:</Text>
      <IconPdf size={20} />
    </SLink>
  )
}
