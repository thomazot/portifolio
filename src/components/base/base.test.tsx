import { render } from '@/lib/test-utils'

import { Base } from '.'

describe('component/base', () => {
  it('should render component', () => {
    const {} = render(<Base>Base Render</Base>)
  })
})
