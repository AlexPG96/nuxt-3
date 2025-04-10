<template>
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-6">Products</h1>
  
      <div class="mb-6">
        <input
          type="text"
          @input="getInputValue"
          placeholder="Buscar producto..."
          class="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
  
      <p v-if="store.loading" class="text-gray-600">Cargando datos...</p>
  
      <div
        v-else-if="store.products.length"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
      <!-- <Card
                :name="product.title"
                :price="product.price"
                :image="product.image"
                :description="product.description"
                :handle="product.handle"
            /> -->
        <Card
          v-for="(product, index) in store.products"
          :key="index"
          :title="product.title"
          :price="product.price"
          :image="product.image"
          :description="product.description"
        />
      </div>
  
      <p v-else class="text-gray-500">No se encontraron productos.</p>
    </div>
  </template>
  

<script setup>
    import { useProductsStore } from '~/stores/products'

    const store = useProductsStore()

    onMounted(() => {
        if(store.products.length) return;
        store.fetchProducts()
    })

    const getInputValue = (e) => {
        store.filterProducts(e.target.value)
    }
</script>

<style>
</style>