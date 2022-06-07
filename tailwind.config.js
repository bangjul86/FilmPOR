const colors = require('tailwindcss/colors');

module.exports = {
  import: true,
  // Active dark mode on class basis
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'blur-right': "url('../public/static/background-blur-right.png')",
        hero: "url('../public/static/hero.png')",
        'pattern-1': "url('../public/static/pattern-1.png')",
        'pattern-2': "url('../public/static/pattern-2.png')",
        'logo-pattern': "url('../public/static/hero-logo.png')",
        'logo-mobile-pattern': "url('../public/static/hero_logo_mobile.png')",
        'square-pattern': "url('../public/static/square_pattern.png')",
        'map-pattern': "url('../public/static/world_map.png')",
        'map-pattern-light': "url('../public/static/world_map_light.png')",
        'dotted-pattern': "url('../public/static/dotted_pattern.png')",
        'card-etny-logo-pattern': "url('../public/static/card_etny_logo.png')"
      },
      fontFamily: {
        sans: ['Inter'],
        grotesk: ['Space Grotesk']
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      success: '#61C454',
      primary: '#F89430',
      'etny-navbar': '#070E1D',
      'etny-background': '#070E1D',
      'etny-button': {
        primary: '#F89430',
        hover: '#FFB259',
        focus: '#D1711D'
      },
      'etny-primary-button': {
        primary: '#27278B',
        hover: '#3B46B3',
        focus: '#0F0B40'
      },
      'etny-secondary-button': {
        primary: '#FFFFFF',
        hover: '#FFECD8',
        focus: '#FFCFA0'
      },
      'etny-cancel': {
        primary: '#FFFFFF',
        hover: '#FFE6E0',
        focus: '#FA998C',
        text: '#EE6A5F'
      },
      'etny-approve': {
        primary: '#FFFFFF',
        hover: '#DAEBD5',
        focus: '#88D17B',
        text: '#61C454'
      },
      'etny-blue-gray': {
        100: '#677D9E',
        150: '#6E8EBE',
        450: '#161639',
        500: '#161D2D',
        600: '#203345'
      },
      'etny-orange': {
        100: '#FFECD8',
        200: '#FDE4CB',
        300: '#FFCFA0',
        350: '#FFDE69',
        400: '#FFB259',
        450: '#FFC121',
        500: '#F89430',
        600: '#D1711D'
      },
      'etny-dark': {
        100: '#27278B',
        200: '#161D2D',
        300: '#101D39',
        400: '#161D2D',
        500: '#161D2D',
        600: '#161D2D',
        700: '#09142D',
        800: '#161D2D',
        900: '#09142D'
      },
      etny: {
        100: '#C4E2FF',
        200: '#48A4FF',
        500: '#0C86FF',
        700: '#0F1153',
        800: '#030363',
        900: '#131345'
      },
      neutral: {
        40: '#F4F4F4',
        50: '#FCFDFD',
        100: '#F7F8F9',
        200: '#F2F3F3',
        300: '#D9D9D9',
        400: '#BFBFBE',
        450: '#999DA3',
        500: '#8D8D8D',
        600: '#595959',
        700: '#434444',
        800: '#1E1F1F',
        900: '#131313',
        950: '#1E1F1F'
      },
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      green: colors.green,
      blue: colors.blue
    }
  },
  plugins: []
};
