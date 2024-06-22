'use client'

import { useMutation } from '@apollo/client'

import { View } from '@/commons'
import { Login, LoginType } from '@/components'
import { Theme } from '@/configs/theme'
import { LOGIN } from '@/services/auth'

export default function Sign() {
  const [login, { error }] = useMutation(LOGIN)

  function handleSign(data: LoginType) {
    console.log({ data })
    login({
      context: {}
    })
  }

  return (
    <View
      display="flex"
      $justifyContent="center"
      $alignItems="center"
      height="100%"
      background={Theme.color.main}
    >
      <Login onSubmit={handleSign} />
    </View>
  )
}
