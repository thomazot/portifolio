import { render } from '@testing-library/react'

import { StyledComponentsRegistry } from './styled-registry'

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
