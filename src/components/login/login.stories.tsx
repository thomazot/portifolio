import { Meta, StoryObj } from '@storybook/react'

import { Login } from '.'

const meta: Meta<typeof Login> = {
  component: Login,
  title: 'Components/Login'
}

export default meta

type Story = StoryObj<typeof Login>

export const Default: Story = {
  args: {
    onSubmit: (data) => console.info(data)
  }
}
