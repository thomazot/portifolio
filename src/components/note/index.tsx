'use client'

import React from 'react'
import { IoCloseSharp as IconClose } from 'react-icons/io5'
import styled, { css } from 'styled-components'

import { View } from '@/commons/view'

const SNote = styled.article<{ $number: boolean }>`
  ${({ theme, $number }) => css`
    counter-reset: section;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: ${theme.gap}px;
    max-height: max-content;
    overflow-y: auto;
    height: 100%;
    display: flex;
    flex-direction: column;

    p {
      position: relative;
      padding-left: 45px;

      ${$number &&
      css`
        &:before {
          counter-increment: section;
          content: counter(section);
          display: inline-block;
          position: absolute;
          left: 0;
          top: 0;
        }
      `}
    }
  `}
`
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
  number?: boolean
} & React.ComponentProps<'div'>

export const Note = React.forwardRef<HTMLDivElement, NoteProps>(
  ({ children, number, title, style, ...props }, ref) => {
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
        <SNote $number={!!number}>{children}</SNote>
      </View>
    )
  }
)

Note.displayName = 'Note'
