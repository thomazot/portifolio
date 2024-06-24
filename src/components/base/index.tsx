'use client'

import { View } from '@/commons/view'
import { Theme } from '@/configs/theme'

export const Base = ({ children }: { children: React.ReactNode }) => (
  <View
    style={{
      display: 'flex',
      padding: Theme.gap,
      height: '100%'
    }}
  >
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: `solid 1px ${Theme.color.lines}`,
        borderRadius: Theme.rounded.md,
        flex: '1',
        height: '100%'
      }}
      radial
    >
      {children}
    </View>
  </View>
)
