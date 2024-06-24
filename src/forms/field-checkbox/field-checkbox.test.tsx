import { FieldError } from 'react-hook-form'

import { render, screen } from '@/lib/test-utils'

import { FieldCheckbox } from '.'

describe('forms/field-checkbox', () => {
  it('should render field checkebox', () => {
    render(<FieldCheckbox>Username</FieldCheckbox>)

    const input = screen.getByRole('checkbox', { hidden: true })

    expect(input).toBeInTheDocument()
  })

  it('should show label name', () => {
    render(<FieldCheckbox>Username</FieldCheckbox>)

    const label = screen.getByLabelText('Username')

    expect(label).toBeInTheDocument()
  })

  it('should show error', () => {
    const error: FieldError = {
      type: 'required',
      message: 'required field'
    }
    render(<FieldCheckbox error={error}>Username</FieldCheckbox>)

    expect(screen.getByText('required field')).toBeInTheDocument()
  })
})
