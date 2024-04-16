import { Theme } from '@/configs/theme'
import { render, screen } from '@/lib/test-utils'

import { Title, TitleProps, TitleSizeType } from '.'

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

  it.each([
    ['h2', Theme.heading.h2],
    ['h3', Theme.heading.h3],
    ['h4', Theme.heading.h4]
  ])('should title size %s to size equal %s', (size, fontSize) => {
    const text = `Title ${size} to size equal ${fontSize}`
    sutRender({ children: text, size: size as TitleSizeType })
    const title = screen.getByRole('heading', {
      level: Number(size.slice(1, 2))
    })

    expect(title).toBeInTheDocument()
    expect(title).toHaveStyle({ fontSize: fontSize, fontWeight: 'bold' })
  })

  it(`shoud subtitle h5 to size equal ${Theme.heading.subtitle}`, () => {
    const text = `Subtitle to size equal ${Theme.heading.subtitle}`
    sutRender({ children: text, size: 'subtitle' })

    const title = screen.getByRole('heading', {
      level: 5
    })
    expect(title).toBeInTheDocument()

    expect(title).toHaveStyle({
      fontSize: Theme.heading.subtitle,
      fontWeight: 'normal'
    })
  })
})
