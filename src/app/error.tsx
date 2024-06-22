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
      <View
        $display="flex"
        $flexDirection="column"
        $alignItems="center"
        $gap={`${Theme.gap}px`}
      >
        <Title weight={600}>ERROR</Title>
        <Title size="subtitle" weight={400}>
          Something went wrong!
        </Title>
      </View>
    </View>
  )
}
