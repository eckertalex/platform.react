module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'primary-100': 'var(--color-primary-100)',
        'primary-200': 'var(--color-primary-200)',
        'primary-300': 'var(--color-primary-300)',
        'primary-400': 'var(--color-primary-400)',
        'primary-500': 'var(--color-primary-500)',
        'primary-600': 'var(--color-primary-600)',
        'primary-700': 'var(--color-primary-700)',
        'primary-800': 'var(--color-primary-800)',
        'primary-900': 'var(--color-primary-900)',
        'secondary-100': 'var(--color-secondary-100)',
        'secondary-200': 'var(--color-secondary-200)',
        'secondary-300': 'var(--color-secondary-300)',
        'secondary-400': 'var(--color-secondary-400)',
        'secondary-500': 'var(--color-secondary-500)',
        'secondary-600': 'var(--color-secondary-600)',
        'secondary-700': 'var(--color-secondary-700)',
        'secondary-800': 'var(--color-secondary-800)',
        'secondary-900': 'var(--color-secondary-900)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')],
}
