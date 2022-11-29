<template>
  <div>
    <NuxtLayout />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: (productCategory) => {
      return productCategory
        ? `${productCategory} - Mike Truso`
        : 'Mike Truso'
  },
  meta: [
    { name: 'description', content: "Software Engineer, Dad, Catholic"}
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})

</script>