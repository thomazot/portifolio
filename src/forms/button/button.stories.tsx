import { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Forms/Button'
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button'
  }
}
