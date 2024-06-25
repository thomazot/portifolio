import type { Metadata } from 'next'

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
            <MainProvider>{children}</MainProvider>
          </StyledRegistry>
        </ApolloWrapper>
      </body>
    </html>
  )
}
