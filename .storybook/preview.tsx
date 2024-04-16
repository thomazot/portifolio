import React from 'react'
import type { Preview } from '@storybook/react'

import { StyledGlobal } from '../src/lib/styled/styled-global'
import { StyledRegistry, fonts } from '../src/lib/styled/styled-registry'

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
      <StyledRegistry>
        <div className={fonts}>
          <div className="font-family">
            <StyledGlobal />
            <Story />
          </div>
        </div>
      </StyledRegistry>
    )
  ]
}

export default preview
