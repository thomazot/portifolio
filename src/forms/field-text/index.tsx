import React, { ComponentProps } from 'react'
import { FieldError } from 'react-hook-form'
import styled, { css } from 'styled-components'

import { Text } from '@/commons/text'
import { View } from '@/commons/view'

const SInput = styled.input<{ error?: boolean }>`
  ${({ theme, error }) => css`
    width: 100%;
    border: solid 1px rgba(0, 0, 0, 0.1);
    line-height: 36px;
    border-radius: 2px;
    padding: 0 16px;

    &:focus {
      outline: none;
      border-color: ${theme.color.informational};
    }

    ${error &&
    css`
      border-color: ${theme.color.critical};
    `}
  `}
`

const SContent = styled.label`
  ${({ theme }) => css`
    position: relative;
    display: block;
    margin: ${theme.gap}px 0;
  `}
`

const SError = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.color.critical};
  `}
`

type FieldTextProps = {
  children?: React.ReactNode
  error?: FieldError
} & ComponentProps<'input'>

export const FieldText = ({ children, error, ...props }: FieldTextProps) => {
  return (
    <SContent>
      {children && <Text as="span">{children}</Text>}
      <SInput error={!!error} {...props} />
      {error && (
        <View top="100%" right="0" position="absolute">
          <SError size="sm">{error.message}</SError>
        </View>
      )}
    </SContent>
  )
}
