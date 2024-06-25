import { Meta, StoryObj } from '@storybook/react'

import { View } from '@/commons/view'

import { Login } from '.'

const meta: Meta<typeof Login> = {
  component: () => (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flex: '1'
      }}
      radial
    >
      <Login />
    </View>
  ),
  title: 'Components/Login'
}

export default meta

type Story = StoryObj<typeof Login>

export const Default: Story = {
  args: {}
}
