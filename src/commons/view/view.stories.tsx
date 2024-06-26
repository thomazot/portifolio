import { Meta, StoryObj } from '@storybook/react'

import { Text } from '../text'
import { Title } from '../title'
import { View } from '.'

const meta: Meta<typeof View> = {
  component: View,
  title: 'Commons/View'
}

export default meta

type Story = StoryObj<typeof View>

export const Default: Story = {
  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        mattis ac arcu sit amet aliquam. Suspendisse ullamcorper fermentum
        justo, porttitor porttitor elit malesuada at. Nam hendrerit in lectus in
        iaculis. Phasellus tristique nibh mauris, eget dictum tellus ultricies
        in. Mauris fringilla consequat lacinia. Vestibulum efficitur quis arcu
        quis dapibus. Aenean rhoncus est ac urna pharetra pulvinar. Maecenas
        condimentum massa eu euismod pulvinar. Sed et rhoncus elit. Nam aliquam
        viverra elit at aliquet. Fusce sit amet tellus auctor, elementum nisl
        vitae, scelerisque tortor. Suspendisse at est ultricies dui vulputate
        venenatis eu sed velit.
      </Text>
    )
  }
}

export const Multiple: Story = {
  name: 'Multiple Tags',
  args: {
    children: (
      <>
        <Title>Title</Title>
        <Title size="subtitle">Subtitle</Title>
      </>
    )
  }
}
