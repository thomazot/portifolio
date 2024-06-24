import { useFormContext } from 'react-hook-form'

import { Text } from '@/commons/text'
import { View } from '@/commons/view'

import { FormContactType } from '.'

export const FormContactText = () => {
  const { watch } = useFormContext<FormContactType>()
  const name = watch('name')
  const email = watch('email')
  const message = watch('message')

  return (
    <View style={{ maxWidth: '470px', wordBreak: 'break-all' }}>
      <p>
        <Text as="span" color="accent-four">
          {`const `}
        </Text>
        <Text as="span" color="secondary-three">
          button
        </Text>
        <Text as="span" color="accent-four">
          {` = `}
        </Text>
        <Text as="span" color="accent-three">
          {` document.querySelector(`}
        </Text>
        <Text as="span" color="secondary-one">
          {`'#sendBtn'`}
        </Text>
        <Text as="span" color="accent-three">
          {`);`}
        </Text>
      </p>
      <p> &nbsp;</p>
      <p>
        <Text as="span" color="accent-four">
          {`const `}
        </Text>
        <Text as="span" color="secondary-three">
          message
        </Text>
        <Text as="span" color="accent-four">
          {` = `}
        </Text>
        <Text as="span" color="accent-three">
          {` {`}
        </Text>
      </p>
      <p>
        <Text as="span" style={{ paddingLeft: '16px' }} color="secondary-three">
          name:
        </Text>
        <Text as="span" color="secondary-one">{` "${name}"`}</Text>
      </p>
      <p>
        <Text as="span" style={{ paddingLeft: '16px' }} color="secondary-three">
          email:
        </Text>
        <Text as="span" color="secondary-one">{` "${email}"`}</Text>
      </p>
      <p>
        <Text as="span" style={{ paddingLeft: '16px' }} color="secondary-three">
          message:
        </Text>
        <Text as="span" color="secondary-one">{` "${message}"`}</Text>
      </p>
      <p>
        <Text as="span" color="accent-three">
          {`};`}
        </Text>
      </p>
      <p>&nbsp;</p>
      <p>
        <Text as="span" color="accent-three">
          {` button.addEventListener(`}
        </Text>
        <Text as="span" color="secondary-one">
          {`'click'`}
        </Text>
        <Text as="span" color="accent-three">
          {`, ()`}
        </Text>
        <Text as="span" color="accent-four">
          {` => `}
        </Text>
        <Text as="span" color="accent-three">
          {`{`}
        </Text>
      </p>
      <p>
        <Text as="span" style={{ paddingLeft: '16px' }} color="accent-three">
          {` form.send(message);`}
        </Text>
      </p>
      <p>
        <Text as="span" color="accent-three">
          {'});'}
        </Text>
      </p>
    </View>
  )
}
