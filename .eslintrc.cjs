module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "standard",
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended",
    "./.eslintrc-auto-import.json"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    "vue/multi-word-component-names": "off",
    "array-callback-return": "off",
    "no-new": "off"
  }
};
