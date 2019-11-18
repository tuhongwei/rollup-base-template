// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: "module",
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "standard",
  ],
  // add your custom rules here
  rules: {
    // enforce consistent indentation, switch-case 1 space
    "indent": ["error", 2, { SwitchCase: 1 }],
    // enforce the consistent use of single quotes
    "quotes": ["error", "single"],
    // require semicolons instead of ASI(automatic semicolon insertion)
    "semi": ["error", "always"],
    // require space before blocks
    "space-before-blocks": ["warn", "always"],
    // enforce consistent line breaks inside braces
    "object-curly-newline": ["error", { multiline: true }],
    // enforce consistent spacing inside braces
    "object-curly-spacing": ["error", "always"],
    "vue/jsx-uses-vars": 2,
    // allow async-await
    "generator-star-spacing": "off",
    // turn no-callback-literal off
    "standard/no-callback-literal": "off",
    // allow console during development
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
};
