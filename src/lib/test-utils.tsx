import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import { Theme } from '@/configs/theme'
import { MainProvider } from '@/context'

type CustomRenderProps = Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) =>
  render(
    <MainProvider>
      <ThemeProvider theme={Theme}>{ui}</ThemeProvider>
    </MainProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { userEvent }
export { customRender as render }
