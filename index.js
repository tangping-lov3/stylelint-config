module.exports = {
  // customSyntax: 'postcss-less',,
  extends: ['stylelint-config-standard'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
      extends: ['stylelint-config-standard-vue']
    },
    {
      'files': ['**/*.less'],
      customSyntax: 'postcss-less'
    },
    {
      'files': ['**/*.scss'],
      customSyntax: 'postcss-scss'
    }
  ],
  rules: {
    'alpha-value-notation': 'number',
    'selector-class-pattern': '.*',
    'font-family-no-missing-generic-family-keyword': null,
    'selector-type-no-unknown': null,
    'block-closing-brace-empty-line-before': null,
    'no-duplicate-selectors': null,
    'font-family-no-duplicate-names': null,
    'at-rule-no-unknown': null,
    'unit-no-unknown': null
  },
  files: ['vue', 'css', 'less']
}
