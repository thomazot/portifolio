import { render } from '@/lib/test-utils'

import { Footer } from '.'

describe('components/footer', () => {
  it('should render component', () => {
    const { container } = render(<Footer />)

    expect(container).toBeInTheDocument()
  })
})
