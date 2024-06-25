import { css } from 'styled-components'
import { RuleSet } from 'styled-components/dist/types'

import { Theme } from '@/configs/theme'

const device = Theme.media

export const media = {
  xs: (style: RuleSet<object>) => css`
    @media (min-width: ${device.xs}) {
      ${style};
    }
  `,
  sm: (style: RuleSet<object>) => css`
    @media (min-width: ${device.sm}) {
      ${style};
    }
  `,
  md: (style: RuleSet<object>) => css`
    @media (min-width: ${device.md}) {
      ${style};
    }
  `,
  lg: (style: RuleSet<object>) => css`
    @media (min-width: ${device.lg}) {
      ${style};
    }
  `,
  xl: (style: RuleSet<object>) => css`
    @media (min-width: ${device.xl}) {
      ${style};
    }
  `,
  xxl: (style: RuleSet<object>) => css`
    @media (min-width: ${device.xxl}) {
      ${style};
    }
  `
}
