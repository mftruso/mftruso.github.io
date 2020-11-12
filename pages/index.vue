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
              <v-card class="mx-auto" max-width="400">
                <NuxtLink :to="`projects/${article.slug}`">
                  <v-img :src="article.img" :alt="article.img" height="200px" class="align-end"></v-img>
                  <v-card-title class="text--primary">{{ article.title }}</v-card-title>
                </NuxtLink>
                <v-card-text>
                  <p>{{ article.description }}</p>
                </v-card-text>
                <v-card-actions>
                  <v-btn color="primary" :to="`projects/${article.slug}`" text>Details</v-btn>
                  <v-btn v-if="article.link" color="primary" :href="article.link" target="_blank" text>
                    View Project <v-icon small>mdi-open-in-new</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
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
