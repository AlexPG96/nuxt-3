<template>
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-6">Products</h1>
  
      <div class="mb-6 relative">
        <input
        type="text"
        v-model="searchText"
        @input="getInputValue"
        placeholder="Buscar producto..."
        class="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
        v-if="searchText"
        @click="clearSearch"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
        Borrar filtro
        </button>
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

    const store = useProductsStore();
    const searchText = ref('');

    onMounted(() => {
        if (!store.products.length) {
            store.fetchProducts();
        } 
        searchText.value = store.searchQuery;
    })

    const getInputValue = (e) => {
        searchText.value = e.target.value;
        store.filterProducts(searchText.value);
    }

    const clearSearch = () => {
        searchText.value = '';
        store.filterProducts('');
    }
</script>

<style>
</style>