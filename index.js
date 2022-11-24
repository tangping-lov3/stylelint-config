module.exports = {
  extends: 'stylelint-config-standard',
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
