import { render } from '@/lib/test-utils'

import { FormContact } from '.'

describe('components/form-contact', () => {
  it('should render component', () => {
    const { container } = render(<FormContact />)

    expect(container).toBeInTheDocument()
  })
})
