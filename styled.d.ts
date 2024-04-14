import type { ThemeType } from './src/configs/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
