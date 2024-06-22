'use client'
import React, { ComponentProps, forwardRef, ReactNode } from 'react'
import { FieldError } from 'react-hook-form'
import styled, { css } from 'styled-components'

import { Text } from '@/commons/text'
import { View } from '@/commons/view'

const STextarea = styled.textarea<{ $error?: boolean }>`
  ${({ theme, $error }) => css`
    width: 100%;
    border: solid 1px ${theme.color.brand.secondary};
    line-height: 1.3;
    border-radius: 2px;
    padding: 16px;
    background: ${theme.color.main};
    color: ${theme.color['main-contrast']};
    min-height: 100px;

    &,
    &:focus {
      outline: none;
      appearance: none;
    }

    &:focus {
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
  children?: ReactNode
  error?: FieldError
} & Omit<ComponentProps<'textarea'>, 'type'>

export const FieldTextarea = forwardRef<HTMLTextAreaElement, FieldTextProps>(
  ({ children, error, ...props }, ref) => {
    return (
      <SContent>
        {children && <Text as="span">{children}</Text>}
        <STextarea ref={ref} $error={!!error} {...props} />
        {error && (
          <View $top="100%" $right="0" $position="absolute">
            <SError size="sm">{error.message}</SError>
          </View>
        )}
      </SContent>
    )
  }
)

FieldTextarea.displayName = 'FieldTextarea'
