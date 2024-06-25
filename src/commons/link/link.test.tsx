import { render } from '@/lib/test-utils'

import { Link } from '.'

const sutRender = () => render(<Link href="">Link</Link>)

describe('commons/link', () => {
  it('should render component', () => {
    const { container } = sutRender()

    expect(container).toBeInTheDocument()
  })
})
