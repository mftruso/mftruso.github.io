<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Mike Truso
        </v-card-title>
        <v-card-text>
          <h3>Software Developer based in St. Paul, MN</h3>
          <h3>Projects</h3>
          <ul>
            <li v-for="article of articles" :key="article.slug">
              <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                <img :src="article.img" />
                <div>
                  <h2>{{ article.title }}</h2>
                  <p>{{ article.description }}</p>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/projects"
          >
            Portfolio
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const articles = await $content('projects', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>
