import { Meta, StoryObj } from '@storybook/react'

import { Card } from '.'

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Commons/Card'
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    children: 'Text default'
  }
}
