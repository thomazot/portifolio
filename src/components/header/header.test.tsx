import { render, screen, userEvent, waitFor } from '@/lib/test-utils'

import { Header } from '.'

describe('components/header', () => {
  it('should render component', () => {
    const { container } = render(<Header />)

    expect(container).toBeInTheDocument()
  })
  it('should mobile menu', () => {
    window.innerWidth = 500
    render(<Header />)

    const buttonMenu = screen.getByRole('button')
    expect(buttonMenu).toBeInTheDocument()
  })
  it('should mobile open menu', async () => {
    window.innerWidth = 500
    render(<Header />)

    const buttonMenu = screen.getByRole('button')
    expect(buttonMenu).toBeInTheDocument()

    userEvent.click(buttonMenu)

    await waitFor(() => {
      const menu = screen.queryByRole('navigation')
      expect(menu).toBeVisible()
    })
  })
})
