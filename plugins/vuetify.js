import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {

const mikeTheme = {
  dark: false,
  colors: {
    primary: '#601A0D',
    accent: '#DBA63A',
    secondary: '#FAF7D4',
  }
}

  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'mikeTheme',
      themes: {mikeTheme}
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
