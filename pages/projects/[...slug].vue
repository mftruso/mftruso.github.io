<template>
  <v-row>
    <v-col>
      <nuxt-link to="/" class="back-link">
        <v-icon
          size="x-small"
        >
          mdi-arrow-left
        </v-icon> Home
      </nuxt-link>
      <article>
        <h1>{{ page.title }}</h1>
        <p>{{ page.description }}</p>
        <ContentDoc >
          <template #not-found>
            <h1>Document not found</h1>
          </template>
        </ContentDoc>
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

<script setup>
const route = useRoute()

const { data: page } = await useAsyncData('get-project', () => {
  return queryContent(route.path).findOne()
})
</script>

<style lang="scss" scoped>
.back-link {
  text-decoration: none;
}
</style>