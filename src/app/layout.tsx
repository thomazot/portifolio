import type { Metadata } from 'next'

import { View } from '@/commons/view'
import { Base } from '@/components/base'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Theme } from '@/configs/theme'
import { MainProvider } from '@/context'
import { ApolloWrapper } from '@/lib/apollo-wrapper'
import { fonts, StyledRegistry } from '@/lib/styled/styled-registry'

export const metadata: Metadata = {
  title: 'thomazot - Front End Developer - React,Javascript,Typescript',
  description:
    "Hello, I'm a Front-End developer with more than 14 years of development as a developer today focused on development with React, NextJS."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={fonts}>
        <ApolloWrapper>
          <StyledRegistry>
            <MainProvider>
              <Base>
                <Header />
                <View
                  $display="flex"
                  $alignItems="stretch"
                  as="main"
                  style={{
                    flex: '1',
                    color: Theme.color['main-contrast'],
                    overflow: 'hidden'
                  }}
                >
                  <View style={{ flex: '1' }}>{children}</View>
                </View>
                <Footer />
              </Base>
            </MainProvider>
          </StyledRegistry>
        </ApolloWrapper>
      </body>
    </html>
  )
}
