<template>
    <div class="slider">
        <productCard v-for="(product, index) in products" :key="index" :name="product.name" :imgSrc="product.imgSrc"
            :rank="product.rank" :priceAfter="product.priceAfter" :priceBefore="product.priceBefore"
            :disc="product.disc" :exp="product.exp" :btnBgColor="btnbgColor"></productCard>
    </div>
</template>

<script>
import productCard from './productCard.vue'
export default {
    props: {
        products: {
            type: Array,
            required: true
        },
        btnbgColor: {
            type: String,
            required: true
        },
    },
    components: {
        productCard
    }
}
</script>

<style>
::-webkit-scrollbar {
    height: .5rem;
}

::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #F3F5F7;
}

::-webkit-scrollbar-thumb {
    background-color: #222;
    border-radius: 10px;
}

.slider {
    display: flex;
    overflow-x: auto;
    margin: 20px 0;
    padding: 20px 0;
}
</style>