import VueGtag, {trackRouter} from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'G-2WDHE48GVM'
    }
  })
  trackRouter(useRouter())
})
