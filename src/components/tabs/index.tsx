'use client'

import React from 'react'
import { IoCloseSharp as IconClose } from 'react-icons/io5'
import styled, { css } from 'styled-components'

import { View } from '@/commons/view'

const STabs = styled.div`
  ${({ theme }) => css`
    border-bottom: solid 1px ${theme.color.brand.secondary};
  `}
`
const STab = styled.span`
  ${({ theme }) => css`
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    gap: ${theme.gap}px;
    border-right: solid 1px ${theme.color.brand.secondary};
    padding: ${theme.gap}px;
  `}
`

type NoteProps = {
  children: React.ReactNode
  title?: string
} & React.ComponentProps<'div'>

export const Tabs = React.forwardRef<HTMLDivElement, NoteProps>(
  ({ children, title, style, ...props }, ref) => {
    return (
      <View
        $display="flex"
        $flexDirection="column"
        ref={ref}
        style={{
          height: '100%',
          ...(style ?? {})
        }}
        {...props}
      >
        {title && (
          <STabs>
            <STab>
              {title}
              <IconClose size={16} />
            </STab>
          </STabs>
        )}
        {children}
      </View>
    )
  }
)

Tabs.displayName = 'Tabs'
