import React from 'react'
import type { Preview } from '@storybook/react'

import { StyledGlobal } from '../src/lib/styled/styled-global'
import { fonts } from '../src/lib/styled/styled-registry'

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
      <div className={fonts}>
        <div className="font-family">
          <StyledGlobal />
          <Story />
        </div>
      </div>
    )
  ]
}

export default preview
