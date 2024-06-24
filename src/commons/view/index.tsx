'use client'

import React, { ComponentProps } from 'react'
import styled, { css } from 'styled-components'

type SViewType = {
  radial?: boolean
}

export const SView = styled.div<{ $radial: boolean }>`
  ${({ theme, $radial }) => css`
    ${$radial &&
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
        ${theme.color['primary-two']};
    `}
    list-style: none;
    color: currentColor;
  `}
`

export type ViewProps = {
  children?: React.ReactNode
  as?: React.ElementType
} & ComponentProps<'div'> &
  SViewType

export const View = React.forwardRef<HTMLDivElement, ViewProps>(
  ({ children, as = 'div', radial, ...props }, ref) => (
    <SView $radial={radial} as={as} ref={ref} {...props}>
      {children}
    </SView>
  )
)

View.displayName = 'View'
