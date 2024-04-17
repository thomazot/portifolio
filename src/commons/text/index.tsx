import React, { ComponentProps } from 'react'
import styled, { css } from 'styled-components'

import { Theme } from '@/configs/theme'

export type TextSizeType = keyof typeof Theme.text

const SText = styled.p<{ size: TextSizeType }>`
  ${({ theme, size }) => css`
    font-size: ${theme.text[size]};
  `}
`

type TextProps = {
  children?: React.ReactNode
  size?: TextSizeType
} & ComponentProps<'p'>

export const Text = ({ children, size = 'md', ...props }: TextProps) => (
  <SText size={size} {...props}>
    {children}
  </SText>
)
