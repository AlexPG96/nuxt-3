<template>
  <div class="bg-indigo-900 text-white mb-2 p-2">
    <div class="product-image">
      <img :src="image" :alt="name" class="w-75" />
    </div>
    <div class="product-info">
      <div class="d-flex justify-between">
        <h3><a :href="'/products/' + handle">{{ name }}</a></h3>
        <span>{{ price }}</span>
      </div>
      <p>{{ decription }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    require: true
  },
  handle: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  }
}) 
</script>

<style>

</style>