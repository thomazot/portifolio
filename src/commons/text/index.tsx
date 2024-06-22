'use client'

import React, { ComponentProps } from 'react'
import styled, { css } from 'styled-components'

import { Theme } from '@/configs/theme'
import { ColorType, SizeType } from '@/@types'
import { COLORS, SIZES } from '@/helpers'

const SText = styled.p<{ $size: SizeType; $color: ColorType }>`
  ${({ theme, $size, $color }) => css`
    line-height: 1.6;
    font-size: ${SIZES[$size]};
    color: ${COLORS[$color]};
  `}
`

type TextProps = {
  children?: React.ReactNode
  size?: SizeType
  as?: keyof JSX.IntrinsicElements
  color?: ColorType
} & ComponentProps<'p'>

export const Text = ({
  children,
  as = 'p',
  size = 'md',
  color = 'currentColor',
  ...props
}: TextProps) => (
  <SText as={as} $size={size} $color={color} {...props}>
    {children}
  </SText>
)
