'use client'

import {
  Inter,
  Roboto_Mono as Roboto,
  Fira_Code as Fira
} from 'next/font/google'
import { ThemeProvider } from 'styled-components'

import { Theme } from '@/configs/theme'

import { StyledComponentsRegistry } from './styled-components-registry'
import { StyledGlobal } from './styled-global'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap'
})
const fira = Fira({
  subsets: ['latin'],
  variable: '--font-fira',
  display: 'swap'
})

export const fonts = [inter, roboto, fira]
  .map((font) => font.variable)
  .join(' ')

export const StyledRegistry = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <StyledGlobal />
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  )
}
