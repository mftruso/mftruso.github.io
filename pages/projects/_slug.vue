<template>
  <v-row>
    <v-col>
      <nuxt-link to="/">
        <v-icon
          size="x-small"
          color="primary"
        >
          mdi-arrow-left
        </v-icon> Home
      </nuxt-link>
      <article>
        <h1>{{ page.title }}</h1>
        <p>{{ page.description }}</p>
        <nuxt-content :document="page" />
        <div>
          <v-btn
            v-if="page.link"
            color="primary"
            :href="page.link"
            target="_blank"
            variant="text"
          >
            View Project <v-icon size="small">
              mdi-open-in-new
            </v-icon>
          </v-btn>
          <v-img
            v-if="page.img"
            :src="page.img"
            :alt="page.alt"
          />
        </div>
      </article>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const slug = params.slug ? `projects/${params.slug}` : 'hello'
    const page = await $content(slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found' })
        console.err(err)
      })

    return {
      page
    }
  }
}
</script>
