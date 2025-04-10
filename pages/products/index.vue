<template>
<div>
    <h1>Products</h1>
    <div>
        <div>
            <input type="text" @input="getInputValue" value=""/>
        </div>
        <ul class="flex flex-nowrap gap-4">
            <li class="w-50" v-for="(product, index) in products" :key="index">
                <Card :name="product.name" :price="product.price" :image="product.image" :description="product.description" :handle="product.handle" />
            </li>
        </ul>
    </div>
</div>  
</template>

<script setup>
import { useProductsStore } from '../../stores/products';
const store = useProductsStore();
const dataProducts = [
    {
        "name": "Giorgio Armani My Way",
        "handle": "giorgio-armani-my-way",
        "price":79.99,
        "image":"https://assets.armani.com/image/upload/v1729297539/LB402700_NLP_90ML_D_FW2024.jpg",
        "description":"A perfect perfume for him"
    },
    {
        "name": "Givenchy Gentleman",
        "handle": "givenchy-gentleman",
        "price":89.99,
        "image":"https://perfumescanarias.com/fotos_articulos/GIVENCHY/thumb_500_gentleman-intense-edt-1.jpg",
        "description":"A perfect perfume for him"
    },
    {
        "name": "Paco rabanne Phantom",
        "handle": "paco-rabanne-phantom",
        "price":56.95,
        "image":"https://perfumescanarias.com/fotos_articulos/PACCO%20RABANNE/HOMBRE/thumb_500_phantom%20edt%202.jpg",
        "description":"A perfect perfume for him"
    },
    {
        "name": "Invictus",
        "handle": "invictus",
        "price":45.99,
        "image":"https://www.lookfantastic.es/images?url=https://static.thcdn.com/productimg/original/10952558-8405116436120943.jpg&format=webp&auto=avif&width=985&height=985&fit=cover",
        "description":"A perfect perfume for him"
    },
    {
        "name": "Paco Rabanne Olympia",
        "handle": "paco-rabanne-olympia",
        "price":56.99,
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgVyBjFP9x1eVSdij1v34QAia-oOWv5md0FQ&s",
        "description":"A perfect perfume for her"
    }
];

store.products.value = dataProducts;

const products = store.products.value;

const getInputValue = (e) => {
    console.log(e.target.value)   
    store.filterProducts(e.target.value) 
}

</script>

<style>

</style>