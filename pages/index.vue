<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <div>
        <h2 class="headline">
          About
        </h2>
        <div>
          <p>Howdy! I'm a Software Developer based in St. Paul, MN.</p>
          <v-spacer />
          <h2 class="headline">
            Projects
          </h2>
          <p>Here are a few things I've been working on in my spare time.</p>
          <v-row>
            <v-col v-for="article of articles" :key="article.slug" cols="12" md="4">
              <ArticleCard :article="article" />
            </v-col>
          </v-row>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('projects', params.slug)
      .only(['title', 'description', 'img', 'alt', 'slug', 'author', 'link'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles
    }
  }
}
</script>
