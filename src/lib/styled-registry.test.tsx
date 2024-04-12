import { render } from '@testing-library/react'

import { StyledComponentsRegistry } from './styled-registry'

jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    useServerInsertedHTML: (params: () => void) => {
      params()
      return jest.fn()
    }
  }
})

describe('<StyledComponentsRegistry />', () => {
  it(`renders a heading`, () => {
    const { container } = render(
      <StyledComponentsRegistry>
        <>Styled</>
      </StyledComponentsRegistry>
    )

    expect(container).toBeInTheDocument()
  })
})
