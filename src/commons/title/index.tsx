import React from 'react'
import styled, { css } from 'styled-components'
import { DefaultTheme } from 'styled-components/dist/types'

export type TitleSizeType = 'h1' | 'h2' | 'h3' | 'h4' | 'subtitle'

const DictionarySize = {
  h1: (theme: DefaultTheme) => css`
    font-size: ${theme.heading.h1};
  `,
  h2: (theme: DefaultTheme) => css`
    font-size: ${theme.heading.h2};
  `,
  h3: (theme: DefaultTheme) => css`
    font-size: ${theme.heading.h3};
  `,
  h4: (theme: DefaultTheme) => css`
    font-size: ${theme.heading.h4};
  `
}

const STitle = styled.h1<{ size: TitleSizeType }>`
  ${({ theme, size }) => css`
    ${size !== 'subtitle'
      ? css`
          font-weight: bold;
          ${DictionarySize[size](theme)}
        `
      : css`
          font-weight: normal;
          font-size: ${theme.heading.subtitle};
        `}
  `}
`

export type TitleProps = {
  children: React.ReactNode
  size?: TitleSizeType
}

export const Title = ({ children, size = 'h1' }: TitleProps) => (
  <STitle size={size} as={size === 'subtitle' ? 'h5' : size}>
    {children}
  </STitle>
)
