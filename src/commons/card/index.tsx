'use client'

import React from 'react'
import styled, { css } from 'styled-components'

import { View, ViewProps } from '../view'

const SContent = styled(View)`
  ${({ theme }) => css`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: solid 1px ${theme.color.lines};
    padding: 16px;
    border-radius: 5px;
    color: ${theme.color['secondary-one']};
  `}
`

type CardProps = Omit<ViewProps, 'ref'>
export const Card = ({ children, ...props }: CardProps) => (
  <SContent {...props}>{children}</SContent>
)
