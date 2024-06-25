import { render } from '@/lib/test-utils'

import { Logo } from '.'

const sutRender = () => render(<Logo />)

describe('commons/logo', () => {
  it('should render component', () => {
    const { container } = sutRender()

    expect(container).toBeInTheDocument()
  })
})
