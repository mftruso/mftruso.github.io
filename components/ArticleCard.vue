<template>
  <article>
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <NuxtLink :to="`${article._path}`">
        <v-img
          :src="article.img"
          :alt="article.img"
          class="align-end"
          cover
          style="height: 200px"
        />
        <v-card-title class="text--primary">
          {{ article.title }}
        </v-card-title>
      </NuxtLink>
      <v-card-text>
        <p>{{ article.description }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          :to="`${article._path}`"
          variant="text"
        >
          Details
        </v-btn>
        <v-btn
          v-if="article.link"
          color="primary"
          :href="article.link"
          target="_blank"
          variant="text"
        >
          View Project <v-icon size="small">
            mdi-open-in-new
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </article>
</template>

<script>
export default {
  props: { article: { type: Object, default: () => ({})} }
}
</script>
