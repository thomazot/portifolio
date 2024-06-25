'use client'

import React from 'react'
import { IoCloseSharp as IconClose } from 'react-icons/io5'
import styled, { css } from 'styled-components'

import { View } from '@/commons/view'

const STabs = styled.div`
  ${({ theme }) => css`
    border-bottom: solid 1px ${theme.color.lines};
  `}
`
const STab = styled.span`
  ${({ theme }) => css`
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    gap: ${theme.gap};
    border-right: solid 1px ${theme.color.lines};
    padding: 12px ${theme.gap};
    font-size: ${theme.size.lables};
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
        ref={ref}
        style={{
          display: 'flex',
          flexDirection: 'column',
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
