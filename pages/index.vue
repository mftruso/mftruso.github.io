<template>
  <v-row
    justify="center"
    align="center"
  >
    <v-col cols="12">
      <article>
        <section>
          <v-card class="text-center">
            <v-card-title />
            <v-avatar size="162">
              <v-img
                src="/images/miketruso.jpg"
                lazy-src="/images/miketruso.jpg"
                alt="Mike Truso"
                cover
              />
            </v-avatar>
            <v-card-text>
              <p class="text-h5">
                Howdy! I'm a Software Engineer based in St. Paul, MN.
                I love crafting software using Java, Groovy and JavaScript tools.
              </p>
            </v-card-text>
          </v-card>
        </section>
        <v-spacer />
        <section class="my-5">
          <h2 class="text-h5">
            Projects
          </h2>
          <p class="text-h6">
            Here are a few things I've been working on in my spare time.
          </p>
          <v-row>
            <v-col
              v-for="article of data"
              :key="article.slug"
              cols="12"
              md="4"
            >
              <ArticleCard :article="article" />
            </v-col>
          </v-row>
        </section>
      </article>
    </v-col>
  </v-row>
</template>

<script setup>
const { data } =  await useAsyncData('projects', () => {
  return queryContent('/projects').sort({ createdAt: -1 }).find()
})
</script>
