import { Meta, StoryObj } from '@storybook/react'

import { View } from '@/commons/view'
import { MainProvider } from '@/context'

import { Base } from '../base'
import { Header } from '.'

const meta: Meta<typeof Header> = {
  component: () => (
    <MainProvider>
      <Base>
        <View style={{ height: '500px' }}>
          <Header />
        </View>
      </Base>
    </MainProvider>
  ),
  title: 'Components/Header'
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {}
