'use client'
import React, { ComponentProps, forwardRef, ReactNode } from 'react'
import { FieldError } from 'react-hook-form'
import styled, { css } from 'styled-components'

import { Text } from '@/commons/text'
import { View } from '@/commons/view'

const STextarea = styled.textarea<{ $error?: boolean }>`
  ${({ theme, $error }) => css`
    width: 100%;
    border: solid 1px ${theme.color.lines};
    line-height: 1.3;
    border-radius: 2px;
    padding: 16px;
    background: ${theme.color['primary-one']};
    color: ${theme.color['secondary-one']};
    min-height: 100px;

    &,
    &:focus {
      outline: none;
      appearance: none;
    }

    &:focus {
      border-color: ${theme.color['secondary-one']};
      box-shadow: 0 0 3px ${theme.color['secondary-one']};
    }

    ${$error &&
    css`
      border-color: ${theme.color['accent-three']};
    `}
  `}
`

const SContent = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const SError = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.color['accent-three']};
  `}
`

type FieldTextProps = {
  children?: ReactNode
  error?: FieldError
} & Omit<ComponentProps<'textarea'>, 'type'>

export const FieldTextarea = forwardRef<HTMLTextAreaElement, FieldTextProps>(
  ({ children, error, ...props }, ref) => {
    return (
      <SContent>
        {children && (
          <Text size="code" as="span">
            {children}
          </Text>
        )}
        <STextarea ref={ref} $error={!!error} {...props} />
        {error && (
          <View
            style={{ position: 'absolute', right: 0, top: 'calc(100% + 3px)' }}
          >
            <SError size="code">{error.message}</SError>
          </View>
        )}
      </SContent>
    )
  }
)

FieldTextarea.displayName = 'FieldTextarea'
