'use client'

import { View } from '@/commons/view'
import { Theme } from '@/configs/theme'

export const Base = ({ children }: { children: React.ReactNode }) => (
  <View
    $display="flex"
    $background={Theme.color.main}
    $height="100%"
    style={{
      padding: `${Theme.gap}px`,
      color: Theme.color['main-contrast'],
      height: '100%'
    }}
  >
    <View
      style={{
        border: `solid 1px ${Theme.color.brand.secondary}`,
        borderRadius: Theme.rounded.md,
        flex: '1',
        height: '100%'
      }}
      $radial="true"
      $display="flex"
      $flexDirection="column"
      $background={Theme.color.brand.primary}
      $height="100%"
    >
      {children}
    </View>
  </View>
)
