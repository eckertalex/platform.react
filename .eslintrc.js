module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended'],
  rules: {
    'no-console': 1,
    'no-unused-vars': 1,
    'no-duplicate-imports': ['warn', { includeExports: true }],
  },
}
