// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import pluginVue from "eslint-plugin-vue";
import vuetify from 'eslint-plugin-vuetify'


export default withNuxt(
  // Your custom configs here
  ...pluginVue.configs['flat/recommended'],
  ...vuetify.configs['flat/base'],
  {
    rules: {
      'no-undef': 'off',
      'vue/multi-word-component-names': 'off'
    }
  }
)
