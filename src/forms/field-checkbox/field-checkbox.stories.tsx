import { Meta, StoryObj } from '@storybook/react'

import { FieldCheckbox } from '.'

const meta: Meta<typeof FieldCheckbox> = {
  component: FieldCheckbox,
  title: 'Forms/FieldCheckbox'
}

export default meta

type Story = StoryObj<typeof FieldCheckbox>

export const Default: Story = {
  args: {
    children: 'Remember me'
  }
}

export const Error: Story = {
  args: {
    children: 'Remember me',
    error: {
      type: 'required',
      message: 'Username is required'
    }
  }
}
