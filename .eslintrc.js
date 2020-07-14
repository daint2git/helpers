module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint", "prettier", "jest"],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.build.json", "./tsconfig.test.json"],
    sourceType: "module", // Allows for the use of imports
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
  },
  rules: {
    "prettier/prettier": [
      1,
      {
        printWidth: 100, // default: 80
        trailingComma: "all", // default: es5
        singleQuote: true, // default: false
        semi: true, // default: true
        bracketSpacing: true, // default: true
      },
    ],
  },
  overrides: [
    {
      files: "tests/*.test.ts",
      env: {
        "jest/globals": true,
      },
      rules: {},
    },
  ],
};
