'use client'

import styled, { css } from 'styled-components'

import { Social } from '../social'

const SFooter = styled.footer`
  ${({ theme }) => css`
    border-top: solid 1px ${theme.color.brand.secondary};
  `}
`

export const Footer = () => (
  <SFooter>
    <Social />
  </SFooter>
)
