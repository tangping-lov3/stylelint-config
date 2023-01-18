module.exports = {
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
      extends: ['stylelint-config-standard-vue']
    },
    {
      extends: ['stylelint-config-standard'],
      'files': ['**/*.less'],
      customSyntax: 'postcss-less'
    },
    {
      extends: ['stylelint-config-standard'],
      'files': ['**/*.scss'],
      customSyntax: 'postcss-scss'
    },
    {
      extends: ['stylelint-config-standard'],
      'files': ['**/*.css']
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
    'unit-no-unknown': null,
    'no-descending-specificity': null
  },
  files: ['vue', 'css', 'less', 'scss']
}
