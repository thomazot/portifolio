import { render } from '../test-utils'
import { StyledComponentsRegistry } from './styled-components-registry'

jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    useServerInsertedHTML: (params: () => void) => {
      params()
      return jest.fn()
    }
  }
})

describe('lib/styled/StyledComponentsRegistry', () => {
  it(`renders a heading`, () => {
    const { container } = render(
      <StyledComponentsRegistry>
        <>Styled</>
      </StyledComponentsRegistry>
    )

    expect(container).toBeInTheDocument()
  })
})
