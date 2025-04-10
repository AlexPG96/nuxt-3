// export const useProductsStore = defineStore('products', () => {

//     const products = ref([]);
 
 
//     const filterProducts = (handle) => {
//      console.log('handle', handle)
//      products.value.filter((product)=> product.handle == handle);
//     }
 
//     return { products, filterProducts }
 
//  })
 
export const useProductsStore = defineStore('products', {
    state: () => ({
      products: [],
      allProducts: [],
      loading: false
    }),
  
    actions: {
      async fetchProducts() {
        if (this.products.length) return;
        this.loading = true
        try {
          const res = await fetch('https://fakestoreapi.com/products')
          const data = await res.json()
          this.products = data
          this.allProducts = data
        } catch (err) {
          console.error('Error al cargar productos:', err)
        } finally {
          this.loading = false
        }
      },
  
      filterProducts(query) {
        if (!query) {
          this.products = this.allProducts
        } else {
          this.products = this.allProducts.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
          )
        }
      },

      getProduct(handle) {

      } 
    }
  })
  