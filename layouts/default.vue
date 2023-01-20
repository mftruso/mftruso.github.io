<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>{{ title}}</v-app-bar-title>
      <v-spacer />
      <v-btn
        icon
        target="_blank"
        href="https://github.com/mftruso"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn
        icon
        target="_blank"
        href="https://linkedin.com/in/michaeltruso"
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn
        icon
        target="_blank"
        href="https://twitter.com/miketruso"
      >
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>
    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} Mike Truso</span>
      <span class="pl-2">This site is built with <a
        href="https://nuxtjs.org/"
        target="_blank"
      >NuxtJS</a> and open sourced on <a
        href="https://github.com/mftruso/mftruso.github.io"
        target="_blank"
      >GitHub</a>.</span>
    </v-footer>
  </v-app>
</template>

<script>
// +JMJ
export default {
  name: 'DefaultLayout',
  data () {
    return {
      title: 'Mike Truso',
    }
  }
}
</script>
