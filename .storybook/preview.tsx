import React from 'react'
import type { Preview } from '@storybook/react'

import { Inter, Roboto_Mono } from 'next/font/google'

import { StyledGlobal } from '../src/lib/styled/styled-global'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap'
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => (
      <div className={`${inter.variable} ${roboto_mono.variable}`}>
        <div className="font-family">
          <StyledGlobal />
          <Story />
        </div>
      </div>
    )
  ]
}

export default preview
