'use client'

import React from 'react'
import styled from 'styled-components'

import { View, ViewProps } from '../view'

const SContent = styled(View)`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 16px;
  border-radius: 5px;
  background: #fff;
`

type CardProps = Omit<ViewProps, 'ref'>
export const Card = ({ children, ...props }: CardProps) => (
  <SContent {...props}>{children}</SContent>
)
