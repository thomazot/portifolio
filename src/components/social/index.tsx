'use client'

import {
  FaGithub as IconGithub,
  FaLinkedin as IconLinkedin
} from 'react-icons/fa'
import { IoMdMail as IconMail } from 'react-icons/io'
import styled, { css } from 'styled-components'

import { Link } from '@/commons/link'
import { Text } from '@/commons/text'
import { View } from '@/commons/view'
import { Theme } from '@/configs/theme'
import { media } from '@/helpers/device'

const DATA = [
  {
    href: 'mailto:contato@thomazot.com.br',
    icon: <IconMail size={25} />,
    title: 'contato@thomazot.com.br'
  },
  {
    href: 'https://www.linkedin.com/in/thomazot/',
    icon: <IconLinkedin size={25} />,
    title: '@thomazot',
    target: '_blank'
  },
  {
    href: 'https://www.github.com/thomazot',
    icon: <IconGithub size={25} />,
    title: '@thomazot',
    target: '_blank'
  }
]

const SLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: solid 1px ${theme.color.lines};
    height: 50px;
    min-width: 50px;
    color: ${theme.color['secondary-one']};
    font-size: ${theme.size.lables};

    span {
      display: none;
    }

    &:hover {
      color: ${theme.color['secondary-four']};
    }
  `}
`
const SSocial = styled.section`
  ${({ theme }) => css`
    display: flex;

    > :nth-child(2) {
      margin-left: auto;
    }

    ${media.lg(css`
      :nth-child(2) {
        margin-left: 0;
      }
      a:nth-last-child(2) {
        border-right: solid 1px ${theme.color.lines};
      }
      > :last-child {
        margin-left: auto;
        gap: ${theme.gap};
        padding: 0 ${theme.gap};

        span {
          display: block;
        }
      }

      span {
        display: block;
      }

      :not(:last-child) {
        transition: all 300ms ease-in-out;
        span {
          display: inline-block;
          overflow: hidden;
          visibility: hidden;
          max-width: 0;
          transition: all 300ms ease-in-out;
          white-space: nowrap;
        }
        /* &:hover {
          gap: ${theme.gap}px;
          span {
            max-width: 100%;
            visibility: visible;
          }
        } */
      }
    `)}
  `}
`

export const Social = () => (
  <SSocial>
    <Text size="lables" style={{ padding: Theme.gap }}>
      find me in:
    </Text>
    {DATA.map(({ icon, ...props }, index) => (
      <SLink key={index} {...props}>
        <View as="span">{props.title}</View>
        {icon}
      </SLink>
    ))}
  </SSocial>
)
