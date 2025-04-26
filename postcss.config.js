export default {
  plugins: {
    'postcss-import': {}, // Enables @import rules
    'tailwindcss/nesting': {}, // Adds support for CSS nesting
    tailwindcss: {}, // Processes Tailwind CSS
    autoprefixer: {}, // Adds vendor prefixes
    ...(process.env.NODE_ENV === 'production' ? {
      cssnano: { // Minifies CSS in production
        preset: 'default'
      }
    } : {})
  }
}