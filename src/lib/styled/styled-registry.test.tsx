import { render } from '@testing-library/react'

import { StyledRegistry } from './styled-registry'

describe('<StyledComponentsRegistry />', () => {
  it(`renders a heading`, () => {
    const { container } = render(
      <StyledRegistry>
        <>Styled</>
      </StyledRegistry>
    )

    expect(container).toBeInTheDocument()
  })
})
