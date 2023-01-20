module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    "plugin:nuxt/recommended",
    'plugin:vuetify/base'
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "vue/multi-word-component-names": "off"
  }
}
