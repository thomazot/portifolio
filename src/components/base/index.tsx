'use client'

import styled, { css } from 'styled-components'

import { View } from '@/commons/view'
import { Theme } from '@/configs/theme'

const SContent = styled(View)`
  ${({ theme }) => css`
    display: flex;
    height: 100%;
    padding: ${theme.gap};
    width: ${theme.media.xxl};
    max-width: 100%;
    margin: 0 auto;
  `}
`

export const Base = ({ children }: { children: React.ReactNode }) => (
  <SContent>
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: `solid 1px ${Theme.color.lines}`,
        borderRadius: Theme.rounded.md,
        flex: '1',
        height: '100%',
        overflow: 'hidden'
      }}
      radial
    >
      {children}
    </View>
  </SContent>
)
