import { render } from '../test-utils'
import { StyledRegistry } from './styled-registry'

describe('lib/styled/registry', () => {
  it(`renders a heading`, () => {
    const { container } = render(
      <StyledRegistry>
        <>Styled</>
      </StyledRegistry>
    )

    expect(container).toBeInTheDocument()
  })
})
