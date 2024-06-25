import { render } from '@/lib/test-utils'

import { Card } from '.'

describe('commons/card', () => {
  it('should render component card', () => {
    const { container } = render(<Card>Card</Card>)
    expect(container).toBeInTheDocument()
  })
})
