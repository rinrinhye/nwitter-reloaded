module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "prettier",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh',
            "react",
            "react-hooks",
            "@typescript-eslint",
            "prettier"],
            
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "spaced-comment": "error",
    "quotes": ["error", "single"],
    "no-duplicate-imports": "error",
  },
  settings: { 
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".js"] 
    }, 
    "import/resolver": { 
      "typescript": "./tsconfig.json" 
    },
},
}
