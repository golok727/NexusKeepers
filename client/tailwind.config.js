/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        Primary: '#e2e1fe',
        Secondary: '#0e060f',
        PrimaryButton: '#eb376d',
        SecondaryButton: '#1d1c0c ',
        Accent: '#fe10ca',
      },
      gridTemplateRows: {
        0: '0',
      },
    },
  },
  plugins: [],
}
