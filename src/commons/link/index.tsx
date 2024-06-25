'use client'

import LinkNext, { LinkProps as LinkNextProps } from 'next/link'
import { HTMLAttributeAnchorTarget } from 'react'
import styled, { css } from 'styled-components'

import { ColorType, SizeType } from '@/@types'
import { COLORS, SIZES } from '@/helpers'

type SLinkProps = {
  $color?: ColorType
  $fontSize?: SizeType
}

const SLink = styled(LinkNext)<SLinkProps>`
  ${({ $fontSize, $color }) => css`
    text-decoration: none;
    font-weight: normal;
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

export type LinkProps = LinkNextProps & {
  children?: React.ReactNode
  target?: HTMLAttributeAnchorTarget
  color?: ColorType
  size?: SizeType
}

export const Link = ({
  children,
  color = 'current-color',
  size = 'body',
  ...props
}: LinkProps) => (
  <SLink $color={color} $fontSize={size} {...props}>
    {children}
  </SLink>
)
