import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#eae9fc',
        button: '#211f27',
        fill01: '#fefeff',
        fill02: '#a4a6f5',
        fill03: '#dfe4fa',
        random1: '#4f63df',
        random2: '#fcf1c6',
        random3: '#e07a2d',
        random4: '#3e1c14',
        random5: '#b7502f',
        dark: '#111827',
        light: '#F9FAFB',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
