import { Meta, StoryObj } from '@storybook/react'

import { FieldText } from '.'

const meta: Meta<typeof FieldText> = {
  component: FieldText,
  title: 'Forms/FieldText'
}

export default meta

type Story = StoryObj<typeof FieldText>

export const Default: Story = {
  args: {
    children: 'Username:'
  }
}

export const Error: Story = {
  args: {
    children: 'Username:',
    error: {
      type: 'required',
      message: 'Username is required'
    }
  }
}
