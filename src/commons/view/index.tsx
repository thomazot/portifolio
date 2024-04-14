import React, { ComponentProps } from 'react'
import styled from 'styled-components'

const SView = styled.div``

type ViewProps = {
  children?: React.ReactNode
} & ComponentProps<'div'>

export const View = ({ children, ...props }: ViewProps) => (
  <SView {...props}>{children}</SView>
)
