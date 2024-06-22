export const Theme = {
  gap: 16,
  rounded: {
    md: '5px'
  },
  color: {
    brand: {
      primary: '#011627',
      secondary: '#1E2D3D',
      tertiary: '#E5E9F0',
      fourth: '#1C2B3A'
    },
    main: '#011221',
    'main-contrast': '#607B96',
    informational: '#4D5BCE',
    'informational-contrast': '#fff',
    success: '#43D9AD',
    'success-contrast': '#fff',
    warning: '#f5b700',
    'warning-contrast': '#212529',
    critical: '#E99287',
    'critical-contrast': '#fff',
    disabled: '#73828c9c',
    'disabled-contrast': '#fff'
  },
  heading: {
    h1: '32px',
    h2: '28px',
    h3: '24px',
    h4: '18px',
    subtitle: '16px'
  },
  size: {
    '4xl': '46px',
    '3xl': '32px',
    '2xl': '24px',
    xl: '18px',
    lg: '16px',
    md: '14px',
    sm: '12px',
    xs: '10px'
  }
}

export type ThemeType = typeof Theme
