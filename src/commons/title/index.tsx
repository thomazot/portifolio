'use client'

import React from 'react'
import styled, { css } from 'styled-components'

import { Theme } from '@/configs/theme'
import { Property } from 'csstype'
import { ColorType } from '@/@types'
import { COLORS } from '@/helpers'

export type TitleSizeType = keyof typeof Theme.heading

const STitle = styled.h1<{
  $size: TitleSizeType
  $weight: Property.FontWeight
  $color: ColorType
}>`
  ${({ theme, $size, $weight, $color }) => css`
    font-size: ${theme.heading[$size]};
    ${$weight &&
    css`
      font-weight: ${$weight};
    `}

    color: ${COLORS[$color]};
  `}
`

export type TitleProps = {
  children: React.ReactNode
  size?: TitleSizeType
  weight?: Property.FontWeight
  color?: ColorType
}

export const Title = ({
  children,
  size = 'h1',
  weight = 'bold',
  color = 'currentColor'
}: TitleProps) => (
  <STitle
    $size={size}
    as={size === 'subtitle' ? 'h5' : size}
    $weight={weight}
    $color={color}
  >
    {children}
  </STitle>
)
