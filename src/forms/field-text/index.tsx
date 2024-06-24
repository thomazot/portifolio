'use client'
import React, { ComponentProps } from 'react'
import { FieldError } from 'react-hook-form'
import styled, { css } from 'styled-components'

import { Text } from '@/commons/text'
import { View } from '@/commons/view'

const SInput = styled.input<{ $error?: boolean }>`
  ${({ theme, $error }) => css`
    width: 100%;
    border: solid 1px ${theme.color.lines};
    line-height: 36px;
    border-radius: 2px;
    padding: 0 16px;
    background: ${theme.color['primary-one']};
    color: ${theme.color['secondary-one']};

    &:focus {
      outline: none;
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
  children?: React.ReactNode
  error?: FieldError
  type?: 'password' | 'text'
} & Omit<ComponentProps<'input'>, 'type'>

export const FieldText = React.forwardRef<HTMLInputElement, FieldTextProps>(
  ({ children, error, type = 'text', ...props }, ref) => {
    return (
      <SContent>
        {children && (
          <Text size="code" as="span">
            {children}
          </Text>
        )}
        <SInput type={type} ref={ref} $error={!!error} {...props} />
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

FieldText.displayName = 'FieldText'
