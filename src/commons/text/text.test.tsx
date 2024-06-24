import { SizeType } from '@/@types'
import { Theme } from '@/configs/theme'
import { render, screen } from '@/lib/test-utils'

import { Text } from '.'

const labelSize = Object.keys(Theme.size).map(
  (labelTextSize) => labelTextSize as SizeType
)

describe('commons/text', () => {
  it('should render component', () => {
    render(<Text />)

    const text = screen.getByRole('paragraph')
    expect(text).toBeInTheDocument()
  })

  it.each(labelSize.map((labelSize) => [labelSize, Theme.size[labelSize]]))(
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
