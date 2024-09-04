/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('tailwindcss').Config} */

const screens = {
  sm: '375px',
  md: '752px',
  lg: '1024px',
  xl: '1408px',
  xxl: '1600px',
};

module.exports = {
  darkMode: 'selector',
  prefix: 'tw-',
  content: [
    './.storybook/**/*.{js,jsx,mdx,ts,tsx}',
    './src/components/**/*.{js,jsx,mdx,ts,tsx}',
    './src/pages/**/*.{js,jsx,mdx,ts,tsx}',
  ],
  theme: {
    screens,
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
    },
    container: {
      screens,
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        md: '32px',
        lg: '48px',
        xl: '48px',
        '2xl': '48px',
      },
    },
    fontFamily: {
      sans: '"Noto Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,  sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: '"Playfair Display",ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: '"Noto Sans Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      icon: 'icomoon',
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.625rem'],
      xl: ['1.3125rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.75rem', '2.25rem'],
      '4xl': ['2rem', '2.5rem'],
      '5xl': ['2.25rem', '2.75rem'],
      '6xl': ['2.5rem', '3rem'],
      '7xl': ['3rem', '3.5rem'],
      '8xl': ['3.5rem', '4rem'],
    },
    lineHeight: {
      xs: '1rem',
      sm: '1.25rem',
      base: '1.5rem',
      lg: '1.625rem',
      xl: '1.75rem',
      '2xl': '2rem',
      '3xl': '2.25rem',
      '4xl': '2.5rem',
      '5xl': '2.75rem',
      '6xl': '3rem',
      '7xl': '3.5rem',
      '8xl': '4rem',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      semibold: '600',
    },
    colors: {
      blue: {
        DEFAULT: '#031E45',
      },
      yellow: {
        DEFAULT: '#F0AB00',
        hover: '#F1B32D',
        active: '#EDBE46',
        disabled: '#FBE6B3',
      },
      red: {
        DEFAULT: '#D52B1E',
        hover: '#E11E0F',
        active: '#EC0E00',
        disabled: '#F2BFBC',
      },
      green: {
        DEFAULT: '#329E36',
      },
      grey: {
        100: '#202020',
        90: '#333333',
        80: '#4D4D4D',
        70: '#666666',
        60: '#808080',
        50: '#999999',
        40: '#B3B3B3',
        30: '#CCCCCC',
        20: '#E6E6E6',
        10: '#F7F7F7',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      black: {
        DEFAULT: '#202020',
      },
      transparent: 'transparent',
      background: {
        white: '#FFFFFF', // light
        lightgrey: '#F7F7F7', // light
        pearl: '#F3F4ED', // light
        sandDark: '#CEC1B1', // light
        sand: '#E7DFCD', // light
        brownGrey: '#79736D', // dark
        graphite: '#70666C', //dark
        amberDark: '#806A62', // dark
        coral: '#DBC4B7', // light
        amber: '#AF8A76', // light
        coralDark: '#985F56', // dark
        slate: '#A5BCC3', // light
        slateDark: '#4E616C', // dark
        olive: '#C9D0C5', // light
        oliveDark: '#646556', // dark
        beige: '#E9D8B8', // light
        beigeDark: '#A98259', // light
        jotunBlue: '#031E45', // dark
        gbsGreen: '#276d00', // dark
        gbsLightGreen: '#478326', // dark
        darkGrey: '#E6E6E6', // light
        lightGrey: '#F7F7F7', // light
      },
    },
    extend: {
      fill: {
        current: 'currentColor',
      },
      stroke: {
        current: 'currentColor',
      },
      transitionTimingFunction: {
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      borderRadius: {
        DEFAULT: '4px',
        md: '10px',
      },
      borderWidth: {
        1: '1px',
      },
      spacing: {
        '4xs': '0.125rem', // 2px
        '3xs': '0.25rem', // 4px
        xxs: '0.5rem', // 8px
        xs: '1rem', // 16px
        sm: '1.5rem', // 24px
        md: '2rem', // 32px
        lg: '2.5rem', // 40px
        xl: '3rem', // 48px
        '2xl': '4rem', // 64px
        '3xl': '5rem', // 80px
        '4xl': '6rem', // 96px
        '5xl': '7.5rem', // 120px
        buttonY: '0.875rem', // 14px
      },
      zIndex: {
        max: '999',
        100: '100',
        90: '90',
        80: '80',
        70: '70',
        60: '60',
      },
    },
  },
};
