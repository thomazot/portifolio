'use client'
import { Title } from '@/commons/title'
import { View } from '@/commons/view'
import { Theme } from '@/configs/theme'

export default function Error() {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%'
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: Theme.gap
        }}
      >
        <Title color="secondary-one" as="h1">
          ERROR
        </Title>
        <Title color="secondary-one" size="subtitle" as="h2">
          Something went wrong!
        </Title>
      </View>
    </View>
  )
}
