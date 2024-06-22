import React, { ComponentProps } from 'react'
import { FieldError } from 'react-hook-form'
import styled, { css } from 'styled-components'

import { Text } from '@/commons/text'
import { View } from '@/commons/view'

const SInput = styled.input<{ $error?: boolean }>`
  display: none;
`

const SContent = styled.label`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.theme.gap / 2}px;
`

const SError = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.color.critical};
  `}
`

const SCheckboxWidth = 40
const SCheckboxHeight = 20

const SCheckbox = styled.span`
  ${({ theme }) => css`
    position: relative;
    display: block;
    padding: 1px;
    height: ${SCheckboxHeight}px;
    width: ${SCheckboxWidth}px;
    border-radius: 48px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;

    &:before {
      content: '';
      display: block;
      width: ${SCheckboxHeight - 2}px;
      height: ${SCheckboxHeight - 2}px;
      border-radius: 50%;
      background: ${theme.color.disabled};
      position: absolute;
      left: 1px;
      transition: all 200ms linear;
    }

    ${SInput}:checked + & {
      &:before {
        background: ${theme.color.main};
        left: calc(100% - ${SCheckboxHeight}px);
      }
    }
  `}
`

type FieldTextProps = {
  children?: React.ReactNode
  error?: FieldError
} & Omit<ComponentProps<'input'>, 'type'>

export const FieldCheckbox = React.forwardRef<HTMLInputElement, FieldTextProps>(
  ({ children, error, ...props }, ref) => {
    return (
      <SContent>
        <SInput type="checkbox" ref={ref} $error={!!error} {...props} />
        <SCheckbox />
        {children && <Text as="span">{children}</Text>}
        {error && (
          <View $top="100%" $right="0" $position="absolute">
            <SError size="sm">{error.message}</SError>
          </View>
        )}
      </SContent>
    )
  }
)

FieldCheckbox.displayName = 'FieldCheckbox'
