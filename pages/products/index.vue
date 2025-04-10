<template>
    <div>
        <h1>Products</h1>
        <div>
        <input type="text" @input="getInputValue" placeholder="Buscar producto..." />

        <p v-if="store.loading">Cargando datos...</p>

        <ul v-else-if="store.products.length" class="flex flex-nowrap gap-4">
            <li class="w-50" v-for="(product, index) in store.products" :key="index">
            <!-- <Card
                :name="product.title"
                :price="product.price"
                :image="product.image"
                :description="product.description"
                :handle="product.handle"
            /> -->
            <Card
                :title="product.title"
                :price="product.price"
                :image="product.image"
                :description="product.description"
            />
            </li>
        </ul>
        </div>
    </div>
</template>
  

<script setup>
    import { onMounted } from 'vue'
    import { useProductsStore } from '~/stores/products'

    const store = useProductsStore()

    onMounted(() => {
        store.fetchProducts()
    })

    const getInputValue = (e) => {
        store.filterProducts(e.target.value)
    }
</script>

<style>
</style>