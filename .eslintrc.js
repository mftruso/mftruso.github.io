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
  plugins: [
  ],
  // add your custom rules here
  rules: {}
}
