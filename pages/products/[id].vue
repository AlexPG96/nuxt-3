<template>
  <NuxtLink to="/products" class="back-link">← Atrás</NuxtLink>
  <div class="product-detail" v-if="product">
    <div class="product-card">
      <div class="product-image-wrapper">
        <img :src="product.image" :alt="product.title" class="product-image" />
      </div>

      <div class="product-info">
        <h1 class="product-title">{{ product.title }}</h1>
        <p class="product-price text-indigo-600">$ {{ product.price }}</p>
        <p class="product-description">{{ product.description }}</p>
      </div>
    </div>
  </div>

  <p v-else-if="store.loading" class="loading">Cargando producto...</p>
  <p v-else class="error">Producto no encontrado.</p>
</template>
  
<script setup>
  import { useProductsStore } from '~/stores/products'
  const route = useRoute();
  
  const store = useProductsStore()
  const product = ref(null)

  onMounted(async () => {
  if (!store.products.length) {
    await store.fetchProducts() // Esperamos a que termine
  }
  
  const handle = (titleProduct) => {
    return titleProduct.toLowerCase().replace(/-/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').replace(/^-|-$/g, '');
  } 

  product.value = store.products.find((prod) => handle(prod.title) === route.params.id)
  });
  
</script>

<style scoped>

.back-link {
  display: inline-block;
  margin-bottom: 1.5rem;
  margin: .5rem 2rem;
  padding: .5rem 1rem;
  background-color: #3182ce;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: background-color .3s ease;
}

.back-link:hover {
  background-color: #2b6cb0;
}

.back-link:active {
  background-color: #2c5282;

}
.product-detail {
  display: flex;
  justify-content: center;
  padding: 2rem;
  padding-top: .5rem;
  background: #f7fafc;
  min-height: 100vh;
}

.product-card {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, .08);
  padding: 2rem;
  width: 100%;
  align-items: flex-start;

}

@media (max-width: 768px) {
  .product-card {
    flex-direction: column;
    align-items: center;
  }
}
.product-image-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image {
  max-width: 100%;
  max-height: 400px;
  border-radius: 8px;
  object-fit: contain;
}

.product-info {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-title {
  font-size: 2rem;
  margin-bottom: .5rem;
  color: #1E2939;
}

.product-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4F39F6;
  margin-bottom: 1rem;
}

.product-description {
  font-size: 1rem;
  color: #808793;
  line-height: 1.6;
}

.loading,
.error {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #808793;
}
</style>