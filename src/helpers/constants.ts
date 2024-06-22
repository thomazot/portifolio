import { Theme } from '@/configs/theme'

const { brand, ...otherColors } = Theme.color

export const COLORS = { ...brand, ...otherColors, currentColor: 'currentColor' }
export const SIZES = Theme.size
