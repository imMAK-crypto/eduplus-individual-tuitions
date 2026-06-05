import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0563CE',
          'blue-600': '#0457b4',
          'blue-50': '#eaf2fd',
          red: '#DE3436',
          'red-600': '#c52a2c',
          'red-50': '#fdecec',
          yellow: '#F5B204',
          'yellow-50': '#fef5db',
          green: '#86B915',
          'green-600': '#6f9c10',
          'green-50': '#f0f7df',
          ink: '#191919',
          soft: '#F7F9FC',
        },
      },
      fontFamily: {
        head: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        logo: ['"Baloo 2"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
