import React, { ComponentProps } from 'react'
import styled, { css } from 'styled-components'

import { Theme } from '@/configs/theme'

export type TextSizeType = keyof typeof Theme.text

const SText = styled.p<{ size: TextSizeType }>`
  ${({ theme, size }) => css`
    line-height: 1.6;
    font-size: ${theme.text[size]};
  `}
`

type TextProps = {
  children?: React.ReactNode
  size?: TextSizeType
  as?: keyof JSX.IntrinsicElements
} & ComponentProps<'p'>

export const Text = ({
  children,
  as = 'p',
  size = 'md',
  ...props
}: TextProps) => (
  <SText as={as} size={size} {...props}>
    {children}
  </SText>
)
