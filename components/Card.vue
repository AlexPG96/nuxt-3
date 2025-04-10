<template>
  <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
    <NuxtLink :to="'/products/' + handle" class="full-style-link"></NuxtLink>
    <img :src="image" :alt="title" class="w-full p-4" />

    <div class="p-4">
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-lg font-semibold text-gray-800">
            {{ truncate(title, 20) }}
        </h3>
        <span class="text-indigo-600 font-bold text-sm">
          ${{ price }}
        </span>
      </div>

      <p class="text-sm text-gray-600">
        {{ truncate(description, 120) }}
      </p>
    </div>
  </div>
</template>

<script setup>
const { truncate } = useUtils();
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

<style scoped>

.full-style-link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

img {
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  max-height: 200px;
  object-fit: contain;
  height: 100%;
}

</style>