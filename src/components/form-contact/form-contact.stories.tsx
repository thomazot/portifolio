import { Meta, StoryObj } from '@storybook/react'

import { Base } from '../base'
import { FormContact } from '.'

const meta: Meta<typeof FormContact> = {
  component: () => (
    <Base>
      <FormContact />
    </Base>
  ),
  title: 'Components/FormContact'
}

export default meta

type Story = StoryObj<typeof FormContact>

export const Default: Story = {}
