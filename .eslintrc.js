module.exports = {
  root: true,
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    // "airbnb-typescript", // 3531 errors that need to be resolved for us to adopt this.
    "plugin:jest/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "prettier", "jest", "react-hooks"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: ["*.e2e.js", "*.e2e.ts"],
      env: {
        jest: true,
        "jest/globals": true,
      },
    },
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "react/prop-types": "off",
      },
    },
    {
      // enable the rule specifically for TypeScript files
      files: ["*.skiptest.ts", "*.skiptest.tsx"],
      rules: {
        "jest/no-commented-out-tests": ["off"],
      },
    },
    {
      // enable the rule specifically for TypeScript files
      files: ["*.test.ts", "*.test.tsx"],
      rules: {
        "@typescript-eslint/no-explicit-any": ["off"],
      },
    },
  ],
  globals: {
    JSX: true,
    NodeJS: true,
  },
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-empty-function": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
    react: {
      version: "detect",
    },
  },
};
