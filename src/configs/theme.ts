export const Theme = {
  gap: 16,
  color: {
    main: '#212529',
    informational: '#0e52a9',
    'informational-contrast': '#fff',
    success: '#2e7816',
    'success-contrast': '#fff',
    warning: '#f5b700',
    'warning-contrast': '#212529',
    critical: '#cf2c21',
    'critical-contrast': '#fff'
  },
  heading: {
    h1: '32px',
    h2: '28px',
    h3: '24px',
    h4: '18px',
    subtitle: '16px'
  },
  text: {
    xl: '18px',
    lg: '16px',
    md: '14px',
    sm: '12px',
    xs: '10px'
  }
}

export type ThemeType = typeof Theme
