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
  gap: calc(${(props) => props.theme.gap} / 2);
`

const SError = styled(Text)`
  ${({ theme }) => css`
    color: ${theme.color['accent-three']};
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
    border: solid 1px ${theme.color.lines};
    color: ${theme.color['secondary-one']};

    &:before {
      content: '';
      display: block;
      width: ${SCheckboxHeight - 2}px;
      height: ${SCheckboxHeight - 2}px;
      border-radius: 50%;
      background: ${theme.color['secondary-one']};
      position: absolute;
      left: 0;
      top: 0;
      transition: all 200ms linear;
    }

    ${SInput}:checked + & {
      &:before {
        background: ${theme.color['accent-two']};
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
        {children && (
          <Text color="secondary-one" as="span" size="code">
            {children}
          </Text>
        )}
        {error && (
          <View
            style={{
              position: 'absolute',
              left: 0,
              top: 'calc(100% + 3px)',
              fontSize: '11px'
            }}
          >
            <SError size="code">{error.message}</SError>
          </View>
        )}
      </SContent>
    )
  }
)

FieldCheckbox.displayName = 'FieldCheckbox'
