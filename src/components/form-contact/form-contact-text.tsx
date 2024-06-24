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
        <Text as="span" color="informational">
          {`const `}
        </Text>
        <Text as="span" color="success">
          button
        </Text>
        <Text as="span" color="informational">
          {` = `}
        </Text>
        <Text as="span" color="main-contrast">
          {` document.querySelector(`}
        </Text>
        <Text as="span" color="critical">
          {`'#sendBtn'`}
        </Text>
        <Text as="span" color="main-contrast">
          {`);`}
        </Text>
      </p>
      <p> &nbsp;</p>
      <p>
        <Text as="span" color="informational">
          {`const `}
        </Text>
        <Text as="span" color="success">
          message
        </Text>
        <Text as="span" color="informational">
          {` = `}
        </Text>
        <Text as="span" color="main-contrast">
          {` {`}
        </Text>
      </p>
      <p>
        <Text as="span" style={{ paddingLeft: '16px' }} color="success">
          name:
        </Text>
        <Text as="span" color="critical">{` "${name}"`}</Text>
      </p>
      <p>
        <Text as="span" style={{ paddingLeft: '16px' }} color="success">
          email:
        </Text>
        <Text as="span" color="critical">{` "${email}"`}</Text>
      </p>
      <p>
        <Text as="span" style={{ paddingLeft: '16px' }} color="success">
          message:
        </Text>
        <Text as="span" color="critical">{` "${message}"`}</Text>
      </p>
      <p>
        <Text as="span" color="main-contrast">
          {`};`}
        </Text>
      </p>
      <p>&nbsp;</p>
      <p>
        <Text as="span" color="main-contrast">
          {` button.addEventListener(`}
        </Text>
        <Text as="span" color="critical">
          {`'click'`}
        </Text>
        <Text as="span" color="main-contrast">
          {`, ()`}
        </Text>
        <Text as="span" color="informational">
          {` => `}
        </Text>
        <Text as="span" color="main-contrast">
          {`{}`}
        </Text>
      </p>
      <p>
        <Text as="span" style={{ paddingLeft: '16px' }} color="main-contrast">
          {` form.send(message);`}
        </Text>
      </p>
      <p>
        <Text as="span" color="main-contrast">
          {'});'}
        </Text>
      </p>
    </View>
  )
}
