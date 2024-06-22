'use client'
import { Logo } from '@/commons/logo'
import { Button } from '@/forms/button'

import { IoMenuSharp as IconMenu } from 'react-icons/io5'
import { IoCloseSharp as IconClose } from 'react-icons/io5'

import { Menu } from '../menu'
import styled, { css } from 'styled-components'
import { media } from '@/helpers/device'
import { useMain } from '@/context'

const SHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    border-bottom: solid 1px ${theme.color.brand.secondary};
    position: relative;
    border-radius: ${theme.rounded.md} 0 ${theme.rounded.md} 0;

    ${media.lg(css`
      overflow: hidden;
    `)}
  `}
`

const SButton = styled(Button)`
  ${media.lg(css`
    display: none;
  `)}
`

export const Header = () => {
  const { openMenu, setOpenMenu } = useMain()
  return (
    <SHeader>
      <Logo />
      <Menu />
      <SButton transparent onClick={() => setOpenMenu((openMenu) => !openMenu)}>
        {openMenu ? <IconClose size="30" /> : <IconMenu size="30" />}
      </SButton>
    </SHeader>
  )
}
