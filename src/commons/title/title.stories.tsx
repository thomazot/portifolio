import { Meta, StoryObj } from '@storybook/react'

import { Title } from '.'

const meta: Meta<typeof Title> = {
  component: Title,
  title: 'Commons/Title'
}

export default meta

type Story = StoryObj<typeof Title>

export const Default: Story = {
  args: {
    children: 'Title H1'
  }
}
