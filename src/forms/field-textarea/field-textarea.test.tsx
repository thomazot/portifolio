import userEvent from '@testing-library/user-event'
import { FieldError } from 'react-hook-form'

import { Theme } from '@/configs/theme'
import { render, screen, waitFor } from '@/lib/test-utils'

import { FieldTextarea } from '.'

describe('forms/field-textarea', () => {
  it('should render field text', () => {
    render(<FieldTextarea />)

    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
  })

  it('should show label name', () => {
    render(<FieldTextarea>Username</FieldTextarea>)

    const label = screen.getByLabelText('Username')

    expect(label).toBeInTheDocument()
  })

  it('should show error', () => {
    const error: FieldError = {
      type: 'required',
      message: 'required field'
    }
    render(<FieldTextarea error={error}>Username</FieldTextarea>)

    expect(screen.getByText('required field')).toBeInTheDocument()
  })

  it('should in focus color border informational', () => {
    render(<FieldTextarea />)

    const input = screen.getByRole('textbox')
    const value = 'Hello world!!'

    userEvent.type(input, value)
    input.focus()

    waitFor(() => {
      expect(input).toHaveValue(value)
    })

    expect(input).toHaveStyle({
      borderColor: Theme.color['main-contrast']
    })
  })
})
