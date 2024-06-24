'use client'

import { usePathname } from 'next/navigation'
import styled, { css } from 'styled-components'

import { Link } from '../link'
import { Text } from '../text'

const SH1 = styled.h1`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: calc(${theme.gap} / 2);
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
          <Text as="span">thomazot</Text>
        </Link>
      ) : (
        <Text as="span">thomazot</Text>
      )}
    </SH1>
  )
}
