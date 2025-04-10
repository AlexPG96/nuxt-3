export const useProductsStore = defineStore('products', () => {

   const products = ref([]);


   const filterProducts = (handle) => {
    console.log('handle', handle)
    products.value.filter((product)=> product.handle == handle);
   }

   return { products, filterProducts }

})