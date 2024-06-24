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
        <div
          style={{
            minHeight: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
          className={fonts}
        >
          <div
            className="font-family"
            style={{
              minHeight: '100%',
              flex: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <StyledGlobal />
            <Story />
          </div>
        </div>
      </StyledRegistry>
    )
  ]
}

export default preview
