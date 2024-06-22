'use client'

import LinkNext, { LinkProps as LinkNextProps } from 'next/link'
import { HTMLAttributeAnchorTarget } from 'react'
import styled, { css, RuleSet } from 'styled-components'

import { ColorType, SizeType } from '@/@types'
import { COLORS, SIZES } from '@/helpers'

type SLinkProps = {
  $style?: RuleSet<object>
  $color?: ColorType
  $fontSize?: SizeType
}

const SLink = styled(LinkNext)<SLinkProps>`
  ${({ $style, $fontSize, $color }) => css`
    text-decoration: none;
    ${$style && $style}
    ${$color
      ? css`
          color: ${COLORS[$color]};
        `
      : css`
          color: currentColor;
        `}
    ${$fontSize &&
    css`
      font-size: ${SIZES[$fontSize]};
    `}

    &:active, &:focus {
      outline: none;
    }
  `}
`

export type LinkProps = {
  children?: React.ReactNode
  target?: HTMLAttributeAnchorTarget
  color?: ColorType
  size?: SizeType
  style?: RuleSet<object>
} & LinkNextProps

export const Link = ({
  children,
  color = 'currentColor',
  size = 'md',
  style,
  ...props
}: LinkProps) => (
  <SLink $color={color} $fontSize={size} $style={style} {...props}>
    {children}
  </SLink>
)
