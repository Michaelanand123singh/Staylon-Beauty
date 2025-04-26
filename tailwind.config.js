module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4A76A', // Gold/beige accent color from the design
          dark: '#B38B5B',
        },
        secondary: {
          DEFAULT: '#8B5A2B', // Brown accent
        },
        light: {
          DEFAULT: '#FFF9F0', // Cream background
        },
        dark: {
          DEFAULT: '#333333', // Main text color
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // As seen in original HTML
        playfair: ['Playfair Display', 'serif'], // For elegant headings
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/hero-bg.jpg')",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}