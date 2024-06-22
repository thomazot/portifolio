'use client'
import styled, { css } from 'styled-components'

import { ThemeType } from '@/configs/theme'
import { media } from '@/helpers/device'

const SModifiedButton = {
  transparent: (_: ThemeType) => css`
    background: transparent;
    color: currentColor;
  `,
  default: (theme: ThemeType) => css`
    background: ${theme.color.brand.fourth};
    color: ${theme.color.brand.tertiary};
    border-radius: 5px;

    &:disabled {
      background: ${theme.color.disabled};
      color: ${theme.color['disabled-contrast']};
    }

    ${media.lg(css`
      &:hover {
        background: ${theme.color.main};
        border-color: ${theme.color['main-contrast']};
        box-shadow: 0 0 3px ${theme.color['main-contrast']};
      }
    `)}
  `,
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

const SButton = styled.button<{ $transparent: boolean; $loading?: boolean }>`
  ${({ theme, $transparent, $loading }) => css`
    ${$transparent
      ? SModifiedButton.transparent(theme)
      : SModifiedButton.default(theme)}

    ${$loading === true && SModifiedButton.loading(theme)}

    border: solid 1px ${theme.color.brand.secondary};
    border: 0;
    padding: 8px;
    font-size: ${theme.size.md};
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `}
`

type ButtonProps = {
  children: React.ReactNode
  transparent?: boolean
  loading?: boolean
} & React.ComponentProps<'button'>

export const Button = ({
  children,
  transparent,
  loading,
  ...props
}: ButtonProps) => (
  <SButton {...props} $transparent={!!transparent} $loading={loading}>
    {children}
  </SButton>
)
