'use client'
import React, { ComponentProps } from 'react'
import { FieldError } from 'react-hook-form'
import styled, { css } from 'styled-components'

import { Text } from '@/commons/text'
import { View } from '@/commons/view'

const SInput = styled.input<{ $error?: boolean }>`
  ${({ theme, $error }) => css`
    width: 100%;
    border: solid 1px ${theme.color.brand.secondary};
    line-height: 36px;
    border-radius: 2px;
    padding: 0 16px;
    background: ${theme.color.main};
    color: ${theme.color['main-contrast']};

    &:focus {
      outline: none;
      border-color: ${theme.color['main-contrast']};
      box-shadow: 0 0 3px ${theme.color['main-contrast']};
    }

    ${$error &&
    css`
      border-color: ${theme.color.critical};
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
    color: ${theme.color.critical};
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
        {children && <Text as="span">{children}</Text>}
        <SInput type={type} ref={ref} $error={!!error} {...props} />
        {error && (
          <View $top="100%" $right="0" $position="absolute">
            <SError size="sm">{error.message}</SError>
          </View>
        )}
      </SContent>
    )
  }
)

FieldText.displayName = 'FieldText'
