'use client'

import React from 'react'
import styled, { css } from 'styled-components'

const SNote = styled.article<{ $number: boolean }>`
  ${({ theme, $number }) => css`
    counter-reset: section;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: ${theme.gap};
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

type NoteProps = {
  children: React.ReactNode
  title?: string
  number?: boolean
}

export const Note = ({ children, number }: NoteProps) => {
  return <SNote $number={!!number}>{children}</SNote>
}
