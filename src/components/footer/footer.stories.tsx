import { Meta, StoryObj } from '@storybook/react'

import { Base } from '../base'
import { Footer } from '.'

const meta: Meta<typeof Footer> = {
  component: () => (
    <Base>
      <Footer />
    </Base>
  ),
  title: 'Components/Footer'
}

export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {}
