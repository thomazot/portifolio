'use client'

import { Title } from '@/commons/title'
import { View } from '@/commons/view'
import { Theme } from '@/configs/theme'

export default function Error() {
  return (
    <View
      $display="flex"
      $justifyContent="center"
      $alignItems="center"
      $height="100%"
    >
      <View $display="flex" $alignItems="center" $gap={`${Theme.gap}px`}>
        <Title weight={600}>404</Title>
        <Title size="subtitle" weight={400}>
          This page could not be found.
        </Title>
      </View>
    </View>
  )
}
