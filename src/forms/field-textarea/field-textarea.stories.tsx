import { Meta, StoryObj } from '@storybook/react'

import { FieldTextarea } from '.'

const meta: Meta<typeof FieldTextarea> = {
  component: FieldTextarea,
  title: 'Forms/FieldTextarea'
}

export default meta

type Story = StoryObj<typeof FieldTextarea>

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
