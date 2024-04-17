import React from 'react'
import styled, { css } from 'styled-components'

import { Theme } from '@/configs/theme'

export type TitleSizeType = keyof typeof Theme.heading

const STitle = styled.h1<{ size: TitleSizeType }>`
  ${({ theme, size }) => css`
    font-size: ${theme.heading[size]};
    font-weight: ${size !== 'subtitle' ? 'bold' : 'normal'};
  `}
`

export type TitleProps = {
  children: React.ReactNode
  size?: TitleSizeType
}

export const Title = ({ children, size = 'h1' }: TitleProps) => (
  <STitle size={size} as={size === 'subtitle' ? 'h5' : size}>
    {children}
  </STitle>
)
