'use client'

import { Link } from '@/commons/link'
import { View } from '@/commons/view'
import { Theme } from '@/configs/theme'
import { useMain } from '@/context'
import { media } from '@/helpers/device'
import { useOutsideClick } from '@/hooks/use-outside-click'
import { usePathname } from 'next/navigation'
import styled, { RuleSet, css } from 'styled-components'

const DATA_MENU = [
  {
    href: '/',
    label: '_hello'
  },
  {
    href: '/about',
    label: '_about-me'
  },
  // {
  //   href: '/projects',
  //   label: '_projects'
  // },
  {
    href: '/contact-me',
    label: '_contact-me'
  }
]

const SLink: RuleSet<object> = css`
  padding: ${Theme.gap}px;
  position: relative;

  &:after {
    content: '';
    height: 2px;
    background: ${Theme.color.warning};
    width: 100%;
    max-height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 300ms ease-in-out;
    opacity: 0.6;
  }
`

const SNav = styled.nav<{ $open: boolean }>`
  ${({ theme, $open }) => css`
    border: solid 1px ${theme.color.brand.secondary};
    width: 100%;
    max-width: 300px;
    position: absolute;
    top: 100%;
    height: calc(100vh - 154px);
    background: ${theme.color.brand.primary};
    transform: translateX(-${theme.gap}px);
    opacity: 0;
    transition: all 200ms ease-in-out;
    visibility: hidden;
    z-index: 100;

    a {
      display: block;
      border-bottom: solid 1px ${theme.color.brand.secondary};
    }

    [data-actived='true'] {
      box-shadow: inset 2px 0 0 ${theme.color.warning};
    }

    ${$open &&
    css`
      opacity: 1;
      transform: translateX(0);
      visibility: visible;
    `}

    ${media.lg(css`
      position: static;
      border: none;
      max-width: none;
      height: 100%;
      opacity: 1;
      transform: translateX(0);
      transition: none;
      visibility: visible;

      [data-actived='true'] {
        box-shadow: inset 0 -2px 0 ${theme.color.warning};
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: none;
        line-height: 1;
        box-shadow:
          1px 0 0 ${theme.color.brand.secondary},
          -1px 0 0 ${theme.color.brand.secondary};
        height: 100%;

        &:hover {
          &:after {
            max-height: 2px;
          }
        }
      }
    `)};
  `}
`
const SList = styled.ul`
  height: 100%;
  ${media.lg(css`
    display: flex;
  `)}
`

export const Menu = () => {
  const { openMenu, setOpenMenu } = useMain()
  const ref = useOutsideClick(() => setOpenMenu(false))

  const pathname = usePathname()

  function handleCloseMenu() {
    setOpenMenu(false)
  }

  return (
    <SNav $open={openMenu} ref={ref}>
      <SList>
        {DATA_MENU.map(({ label, ...props }, index) => (
          <View
            key={label}
            as="li"
            style={{
              marginLeft: index !== DATA_MENU.length - 1 ? '0' : 'auto'
            }}
            data-actived={pathname === props.href}
          >
            <Link
              onClick={handleCloseMenu}
              style={SLink}
              color="tertiary"
              {...props}
            >
              {label}
            </Link>
          </View>
        ))}
      </SList>
    </SNav>
  )
}
