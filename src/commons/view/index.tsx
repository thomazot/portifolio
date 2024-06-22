'use client'

import { Property } from 'csstype'
import React, { ComponentProps } from 'react'
import styled, { css } from 'styled-components'

type SViewType = {
  $position?: Property.Position
  $top?: Property.Top
  $left?: Property.Left
  $right?: Property.Right
  $bottom?: Property.Bottom
  $display?: Property.Display
  $justifyContent?: Property.JustifyContent
  $flexDirection?: Property.FlexDirection
  $alignItems?: Property.AlignItems
  $gap?: Property.Gap
  $height?: Property.Height
  $background?: Property.Background
  $radial?: 'true' | 'false'
}

export const SView = styled.div<SViewType>`
  ${({
    $position,
    $top,
    $bottom,
    $left,
    $right,
    $display,
    $justifyContent,
    $flexDirection,
    $alignItems,
    $height,
    $gap,
    $background,
    $radial
  }) => css`
    ${$display &&
    css`
      display: ${$display};
    `}
    ${$justifyContent &&
    css`
      justify-content: ${$justifyContent};
    `}
    ${$flexDirection &&
    css`
      flex-direction: ${$flexDirection};
    `}
    ${$alignItems &&
    css`
      align-items: ${$alignItems};
    `}
    ${$height &&
    css`
      min-height: ${$height};
    `}
    ${$gap &&
    css`
      gap: ${$gap};
    `}
    ${$background &&
    css`
      background: ${$background};
    `}
    ${$position &&
    css`
      position: ${$position};
    `}
    ${$top &&
    css`
      top: ${$top};
    `}
    ${$bottom &&
    css`
      bottom: ${$bottom};
    `}
    ${$left &&
    css`
      left: ${$left};
    `}
    ${$right &&
    css`
      right: ${$right};
    `}
    ${$radial === 'true' &&
    $background &&
    css`
      background:
        radial-gradient(
            300px circle at 40% 40%,
            rgba(67, 217, 173, 0.1),
            transparent
          )
          0%,
        radial-gradient(
            300px circle at 60% 60%,
            rgba(77, 91, 206, 0.1),
            transparent
          )
          0%,
        ${$background};
    `}
    list-style: none;
    color: currentColor;
  `}
`

export type ViewProps = {
  children?: React.ReactNode
  as?: React.ElementType
  ref?: React.RefObject<HTMLDivElement>
} & ComponentProps<'div'> &
  SViewType

export const View = ({ children, as = 'div', ...props }: ViewProps) => (
  <SView as={as} {...props}>
    {children}
  </SView>
)
