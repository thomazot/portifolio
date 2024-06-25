import { View } from '@/commons/view'
import { Base } from '@/components/base'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Base>
      <Header />
      <View
        as="main"
        style={{
          display: 'flex',
          alignItems: 'stretch',
          flex: '1',
          overflow: 'hidden'
        }}
      >
        <View style={{ flex: '1' }}>{children}</View>
      </View>
      <Footer />
    </Base>
  )
}
