import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': { DEFAULT: '#221d23', 100: '#070607', 200: '#0e0c0e', 300: '#151216', 400: '#1c181d', 500: '#221d23', 600: '#524754', 700: '#816f85', 800: '#ac9eae', 900: '#d5cfd7' },
        'secondary': { DEFAULT: '#4f3824', 100: '#100b07', 200: '#20170f', 300: '#302216', 400: '#402e1e', 500: '#4f3824', 600: '#86603e', 700: '#b5865e', 800: '#ceaf93', 900: '#e6d7c9' },
        'tertiary': { DEFAULT: '#d1603d', 100: '#2c120a', 200: '#582415', 300: '#83361f', 400: '#af4829', 500: '#d1603d', 600: '#db7f64', 700: '#e49f8b', 800: '#edbfb1', 900: '#f6dfd8' },
        'gold': { DEFAULT: '#ddb967', 100: '#35290c', 200: '#6a5218', 300: '#a07b24', 400: '#d1a234', 500: '#ddb967', 600: '#e4c887', 700: '#ebd6a5', 800: '#f1e4c3', 900: '#f8f1e1' },
        'mindaro': { DEFAULT: '#d0e37f', 100: '#313a0d', 200: '#637319', 300: '#94ad26', 400: '#bbd644', 500: '#d0e37f', 600: '#d9e897', 700: '#e3eeb1', 800: '#ecf4cb', 900: '#f6f9e5' }
      }
    },
  },
  plugins: [],
} satisfies Config;


