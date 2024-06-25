import { render } from '@/lib/test-utils'

import { Curriculum } from '.'

describe('components/curriculum', () => {
  it('should render component', () => {
    const { container } = render(<Curriculum />)

    expect(container).toBeInTheDocument()
  })
})
