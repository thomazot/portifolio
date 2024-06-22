'use client'

import styled, { css } from 'styled-components'
import { Text } from '../text'
import { Link } from '../link'
import { usePathname } from 'next/navigation'

const SH1 = styled.h1`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: ${theme.gap}px;
    font-weight: 400;
    width: 100%;
    max-width: 250px;
  `}
`

export const Logo = () => {
  const pathname = usePathname()
  const hasHome = pathname === '/'

  return (
    <SH1 as={!hasHome ? 'h2' : 'h1'}>
      {!hasHome ? (
        <Link href="/">
          <Text size="lg" as="span">
            thomazot
          </Text>
        </Link>
      ) : (
        <Text size="lg" as="span">
          thomazot
        </Text>
      )}
    </SH1>
  )
}
