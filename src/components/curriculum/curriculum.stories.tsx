import { Meta, StoryObj } from '@storybook/react'

import { Curriculum } from '.'

const meta: Meta<typeof Curriculum> = {
  component: Curriculum,
  title: 'Components/Curriculum'
}

export default meta

type Story = StoryObj<typeof Curriculum>

export const Default: Story = {}
