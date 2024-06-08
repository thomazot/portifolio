import { Property } from 'csstype'
import React, { ComponentProps } from 'react'
import styled, { css } from 'styled-components'

type SViewType = {
  position?: Property.Position
  top?: Property.Top
  left?: Property.Left
  right?: Property.Right
  bottom?: Property.Bottom
}

const SView = styled.div<SViewType>`
  ${({ position, top, bottom, left, right }) => css`
    ${position &&
    css`
      position: ${position};
    `}
    ${top &&
    css`
      top: ${top};
    `}
    ${bottom &&
    css`
      bottom: ${bottom};
    `}
    ${left &&
    css`
      left: ${left};
    `}
    ${right &&
    css`
      right: ${right};
    `}
  `}
`

type ViewProps = {
  children?: React.ReactNode
} & ComponentProps<'div'> &
  SViewType

export const View = ({ children, ...props }: ViewProps) => (
  <SView {...props}>{children}</SView>
)
