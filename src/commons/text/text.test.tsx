import { Theme } from '@/configs/theme'
import { render, screen } from '@/lib/test-utils'

import { Text, TextSizeType } from '.'

const labelSize = Object.keys(Theme.text).map(
  (labelTextSize) => labelTextSize as TextSizeType
)

describe('commons/text', () => {
  it('should render component', () => {
    render(<Text />)

    const text = screen.getByRole('paragraph')
    expect(text).toBeInTheDocument()
  })

  it.each(labelSize.map((labelSize) => [labelSize, Theme.text[labelSize]]))(
    'should size %s font-size %s',
    (labelSize, fontSize) => {
      render(<Text size={labelSize}>Text example</Text>)

      const text = screen.getByRole('paragraph')
      expect(text).toBeInTheDocument()

      expect(text).toHaveStyle({
        fontSize: fontSize
      })
    }
  )
})
