'use client'
import styled, { css } from 'styled-components'

import { ThemeType } from '@/configs/theme'

type ButtonThemeType = 'default' | 'primary' | 'ghost' | 'transparent'

const SModifiedButton = {
  transparent: (_: ThemeType) => css`
    background: transparent;
    color: currentColor;
  `,
  default: (theme: ThemeType) => css(theme.button.default),
  primary: (theme: ThemeType) => css(theme.button.primary),
  ghost: (theme: ThemeType) => css(theme.button.ghost),
  loading: (_: ThemeType) => css`
    @keyframes pulse {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
        opacity: 0.3;
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        opacity: 0.1;
      }

      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        opacity: 0.3;
      }
    }
    opacity: 0.1;
    pointer-events: none;
    transform: scale(1);
    animation: pulse 1s infinite;
  `
}

const SButton = styled.button<{
  $loading?: boolean
  $buttonTheme: ButtonThemeType
}>`
  ${({ theme, $buttonTheme, $loading }) => css`
    border: 0;
    padding: 8px 16px;

    ${SModifiedButton?.[$buttonTheme] && SModifiedButton[$buttonTheme](theme)}
    ${$loading === true && SModifiedButton.loading(theme)}

    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `}
`

type ButtonProps = {
  children: React.ReactNode
  loading?: boolean
  buttonTheme?: ButtonThemeType
} & React.ComponentProps<'button'>

export const Button = ({
  children,
  loading,
  buttonTheme = 'default',
  ...props
}: ButtonProps) => (
  <SButton {...props} $buttonTheme={buttonTheme} $loading={loading}>
    {children}
  </SButton>
)
