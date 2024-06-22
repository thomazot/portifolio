import { Meta, StoryObj } from '@storybook/react'

import { Link } from '.'

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Commons/Link'
}

export default meta

type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: {
    children: 'Link default',
    href: '/home'
  }
}
