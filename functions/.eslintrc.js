module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    quotes: ["error", "double"],
  },
};

// "@babel/core": "^7.17.9",
// "@babel/eslint-parser": "^7.17.0",
