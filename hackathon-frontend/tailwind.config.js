/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    fontFamily: {
      header: ['nunitoSans', 'sans-serif'],
      body: ['sourceSansPro', 'sans-serif'],
      'body-semi': ['sourceSansProSemi', 'sans-serif'],
      'body-bold': ['sourceSansProBold', 'sans-serif'],
    },
    extend: {
      spacing: {
        4.5: '1.125rem',
        9.5: '2.375rem',
        'backdrop-first-circle': '600px',
        'backdrop-second-circle': '900px',
        'backdrop-third-circle': '1200px',
      },
      width: {
        animation: '27.5rem',
        logout: '24rem',
        'verification-animation': '625px',
        register: '552px',
      },
      fontSize: {
        h1: [
          '4.5rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.02em',
          },
        ],
        h2: [
          '3rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.02em',
          },
        ],
        h3: [
          '1.875rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.02em',
          },
        ],
        h4: [
          '1.5rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.02em',
          },
        ],
        h5: [
          '1.125rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.02em',
          },
        ],
        h6: [
          '1rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.02em',
          },
        ],
        icon: [
          '1.75rem',
          {
            lineHeight: '120%',
            letterSpacing: '0.02em',
          },
        ],
        'body-l': [
          '1rem',
          {
            lineHeight: '160%',
            letterSpacing: '0.04em',
          },
        ],
        'body-m': [
          '0.875rem',
          {
            lineHeight: '160%',
            letterSpacing: '0.04em',
          },
        ],
        'body-s': [
          '0.75rem',
          {
            lineHeight: '160%',
            letterSpacing: '0.04em',
          },
        ],
      },
      inset: {
        '3px': '3px',
      },
      opacity: {
        15: '.15',
      },
      colors: {
        'space-blue': '#1E1656',
        indigo: '#501EB6',
        purple: '#9268E9',
        violet: '#874CFF',
        'electric-indigo': '#9268E9',
        'light-violet': '#87A6FC',
        lilac: '#DACDFB',
        'indigo-light': '#EFE8FC',
        'lavender-blush': '#F7F4FF',

        'true-blue': '#1778D3',
        'sky-blue': '#7ECEEE',
        'royal-blue': '#87A6FC',
        'royal-light-blue': '#C3D3FD',
        'lily-blue': '#CFDAFB',
        'light-blue': '#E8F4FF',
        'dimmed-light-blue': '#87A6FC33',
        'pale-blue': '#E3E9FA',

        teal: '#407E87',
        turquoise: '#51B2BA',
        mint: '#75DABF',
        aquamarine: '#8AF8DA',

        'surface-black': '#2B2931',
        'hover-black': '#3E3B43',
        'purple-black': '#453F4F',
        'blueish-black': '#3B4463',
        'grey-black': '#3B3F4C',
        ash: '#8F8F8F',
        'disabled-grey': '#767676',
        silver: '#C1C1C1',
        'light-grey': '#E2E2E2',
        platinum: '#ECECEC',
        smoke: '#FAFAFA',
        fog: '#F5F5F5',

        success: '#0D7D4D',
        'success-background': '#E1F7ED',
        error: '#B70339',
        'error-input-dark': '#FF6482',
        'error-background': '#F4D9E1',
        warning: '#FF9500',
        'warning-background': '#FFEFD9',
        neutral: '#8E8E8E',
        'neutral-background': '#ECECEC',
        info: '#0775ED',
        'info-dark': '#409CFF',
        'info-background': '#DAEAFC',
        notified: '#EFE8FC',

        'dark-success': '#DDFAEC',
        'dark-success-light': '#78EAB3',
        'dark-success-icon': '#2F7B5B',
        'dark-success-background': '#3A8A68',
        'dark-error': '#FFD8E0',
        'dark-error-icon': '#942639',
        'dark-error-background': '#9E3649',
        'dark-warning': '#FFB340',
        'dark-warning-background': '#FFECCF',
        'dark-neutral': '#8F8F8F',
        'dark-neutral-background': '#757575',
        'dark-info': '#CFE6FF',
        'dark-info-icon': '#2E4980',
        'dark-info-background': '#3C5890',
        'dark-notified': '#453F4F',
        'dark-add-login-factor': '#494554',

        hyperlink: '#1778D3',
        'hyperlink-visited': '#734BC5',
        'dark-hyperlink': '#7ABAFF',
        'dark-hyperlink-visited': '#CAAAF3',

        'bright-pink': '#FF87A4',
        blush: '#FFD4D4',
        'test-app-background': '#FFF2D8',
        'primary-orange': '#F9C274',
        magenta: '#940F77',
        'light-magenta': '#EECFE7',
        'light-peach': '#FDF6F6',
        'dark-peach': '#FFEFEF',

        'light-breeze': '#F3FAFF',
        'dark-aubergine': '#1E1B23',

        'dark-sea-blue': '#172735',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(2.5)' },
        },
        pulse2: {
          '0%, 100%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(2.5)' },
        },
      },
      animation: {
        'slow-pulse': 'pulse 15s ease-in-out infinite',
        'slow-pulse-2': 'pulse 20s ease-in-out infinite',
      },
      borderWidth: {
        3: '3px',
      },
    },
    screens: {
      sm: '600px',
      md: '905px',
      lg: '1240px',
      xl: '1440px',
      '2xl': '2000px',
    },
  },
  plugins: [],
};
