<template>
  <v-row>
    <v-col>
      <div>
        <h1>{{ page.title }}</h1>
        <p>{{ page.description }}</p>
        <nuxt-content :document="page" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const slug = params.slug ? `projects/${params.slug}` : 'hello'
    console.log(slug)
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
