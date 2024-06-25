import { Meta, StoryObj } from '@storybook/react'

import { Text } from '@/commons/text'
import { View } from '@/commons/view'

import { Base } from '.'

const meta: Meta<typeof Base> = {
  component: Base,
  title: 'Components/Base'
}

export default meta

type Story = StoryObj<typeof Base>

export const Default: Story = {
  args: {
    children: (
      <View style={{ padding: '16px' }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          mattis ac arcu sit amet aliquam. Suspendisse ullamcorper fermentum
          justo, porttitor porttitor elit malesuada at. Nam hendrerit in lectus
          in iaculis. Phasellus tristique nibh mauris, eget dictum tellus
          ultricies in. Mauris fringilla consequat lacinia. Vestibulum efficitur
          quis arcu quis dapibus. Aenean rhoncus est ac urna pharetra pulvinar.
          Maecenas condimentum massa eu euismod pulvinar. Sed et rhoncus elit.
          Nam aliquam viverra elit at aliquet. Fusce sit amet tellus auctor,
          elementum nisl vitae, scelerisque tortor. Suspendisse at est ultricies
          dui vulputate venenatis eu sed velit.
        </Text>
      </View>
    )
  }
}
