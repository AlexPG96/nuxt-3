<template>
  <div class="bg-indigo-900 text-white mb-2 p-2">
    <div class="product-image">
      <img :src="image" :alt="title" class="w-75" />
    </div>
    <div class="product-info">
      <div class="d-flex justify-between">
        <h3><a :href="'/products/' + handle">{{ title }}</a></h3>
        <span>{{ price }}</span>
      </div>
      <p>{{ description }}</p>
    </div>
  </div>
</template>


<script setup>
const props = defineProps({
  // name: {
  //   type: String,
  //   require: true
  // },
  // handle: {
  //   type: String,
  //   require: true
  // },
  title: {
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

const handle = props.title
  .toLowerCase()
  .replace(/-/g, '')         
  .replace(/\s+/g, '-')      
  .replace(/[^a-z0-9-]/g, '') 
  .replace(/-+/g, '-')      
  .replace(/^-|-$/g, '');
</script>

<style>

</style>