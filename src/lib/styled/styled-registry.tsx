import { ThemeProvider } from 'styled-components'

import { Theme } from '@/configs/theme'

import { StyledComponentsRegistry } from './styled-components-registry'
import { StyledGlobal } from './styled-global'

export const StyledRegistry = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <StyledGlobal />
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  )
}
