import { render, screen } from '@/lib/test-utils'

import { Title, TitleProps } from '.'

const sutRender = (props: TitleProps) => render(<Title {...props} />)

describe('commons/title', () => {
  it('should render component', () => {
    const { container } = sutRender({ children: 'Title Render' })

    expect(container).toBeInTheDocument()
  })

  it('should default value equal h1', () => {
    sutRender({ children: 'Title default value' })
    const title = screen.getByRole('heading', { level: 1 })

    expect(title).toBeInTheDocument()
  })
})
