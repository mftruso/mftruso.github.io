<template>
  <article>
    <v-card class="mx-auto" max-width="400">
      <NuxtLink :to="`projects/${article.slug}`">
        <v-img :src="article.img" :alt="article.img" height="200px" class="align-end" />
        <v-card-title class="text--primary">
          {{ article.title }}
        </v-card-title>
      </NuxtLink>
      <v-card-text>
        <p>{{ article.description }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" :to="`projects/${article.slug}`" text>
          Details
        </v-btn>
        <v-btn v-if="article.link" color="primary" :href="article.link" target="_blank" text>
          View Project <v-icon small>
            mdi-open-in-new
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </article>
</template>

<script>
export default {
  props: { article: Object }
}
</script>
