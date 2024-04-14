import { render, screen } from '@testing-library/react'

import { View } from '.'

describe('commons/view', () => {
  it('should render', () => {
    const { container } = render(<View />)

    expect(container).toBeInTheDocument()
  })

  it('should render children string', () => {
    render(<View>Children string</View>)
    expect(screen.getByText('Children string')).toBeInTheDocument()
  })

  it('should render children tags', () => {
    render(
      <View>
        <h1>Title</h1>
        <h2>Subtitle</h2>
      </View>
    )

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })
})
