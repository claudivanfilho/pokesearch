const prod = process.env.NODE_ENV === 'production';

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    enabled: prod,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
  },
  theme: {
    scale: {
      0: '0',
      25: '.25',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
      200: '2'
    },
    extend: {
      colors: {
        'accent-1': '#333'
      },
      backgroundColor: {
        theme: {
          100: 'var(--bg-background-theme-100)',
          200: 'var(--bg-background-theme-200)',
          300: 'var(--bg-background-theme-300)'
        },
        primary: {
          100: 'var(--primary-color-100)',
          200: 'var(--primary-color-200)',
          300: 'var(--primary-color-300)',
          400: 'var(--primary-color-400)',
          500: 'var(--primary-color-500)'
        }
      },
      textColor: {
        primary: {
          100: 'var(--primary-color-100)',
          200: 'var(--primary-color-200)',
          300: 'var(--primary-color-300)',
          400: 'var(--primary-color-400)',
          500: 'var(--primary-color-500)'
        },
        theme: {
          100: 'var(--font-color-100)',
          200: 'var(--font-color-200)'
        }
      },
      height: {
        72: '18rem',
        80: '20rem',
        96: '24rem',
        104: '26rem',
        112: '28rem',
        120: '30rem',
        128: '32rem'
      },
      maxHeight: {
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        22: '6rem'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    extend: {
      scale: ['active', 'group-hover', 'hover'],
      animation: ['hover', 'focus']
    }
  },
  plugins: []
};
