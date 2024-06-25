import { View } from '@/commons/view'
import { Login } from '@/components/login'

export default function SignIn() {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
      radial
    >
      <Login />
    </View>
  )
}
