'use client'

import React from 'react'
import styled, { css } from 'styled-components'

import { ColorType, SizeType } from '@/@types'

const STitle = styled.h1<{
  $size: SizeType
  $color: ColorType
}>`
  ${({ theme, $size, $color }) => css`
    font-size: ${theme.size[$size]};
    font-weight: 400;
    color: ${theme.color[$color]};
  `}
`

export type TitleProps = {
  children: React.ReactNode
  size?: SizeType
  color?: ColorType
  as?: React.ElementType
}
export const Title = ({
  children,
  size = 'title',
  color = 'secondary-four',
  as = 'h1',
  ...props
}: TitleProps) => (
  <STitle as={as} $size={size} $color={color} {...props}>
    {children}
  </STitle>
)
