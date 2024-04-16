import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import { Theme } from '@/configs/theme'

type CustomRenderProps = Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) => render(<ThemeProvider theme={Theme}>{ui}</ThemeProvider>, renderOptions)

export * from '@testing-library/react'
export { customRender as render }
