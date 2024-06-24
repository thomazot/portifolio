export const Theme = {
  gap: '16px',
  rounded: {
    md: '0.5em'
  },
  color: {
    'primary-one': '#01080E',
    'primary-two': '#011627',
    'primary-three': '#011221',

    'secondary-one': '#607B96',
    'secondary-two': '#3C9D93',
    'secondary-three': '#4D5BCE',
    'secondary-four': '#FFFFFF',

    'accent-one': '#FEA55F',
    'accent-two': '#43D9AD',
    'accent-three': '#E99287',
    'accent-four': '#C98BDF',

    lines: '#1E2D3D',

    'gradients-one': '#4D5BCE',
    'gradients-two': '#43D9AD',

    'current-color': 'currentColor'
  },
  button: {
    primary: {
      background: '#FEA55F',
      color: '#01080E',
      borderRadius: '0.5em',
      '&:hover': {
        background: '#FFAC6B',
        color: '#01080E'
      }
    },
    default: {
      background: '#1C2B3A',
      color: '#fff',
      borderRadius: '0.5em',
      '&:hover': {
        background: '#263B50',
        color: '#fff'
      }
    },
    ghost: {
      background: 'none',
      color: '#fff',
      border: 'solid 1px #fff',
      borderRadius: '0.5em',
      '&:hover': {
        opacity: '0.5'
      }
    }
  },
  size: {
    title: '32px',
    subtitle: '18px',
    body: '14px',
    lables: '12px',
    code: '10px'
  }
}

export type ThemeType = typeof Theme
