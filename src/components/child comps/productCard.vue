<template>
    <div class="card">
        <div class="visual">
            <div class="header">
                <div>
                    <h3>{{ exp }}</h3>
                    <p class="discount">{{ disc ? disc + '%' : '' }}</p>
                </div>
                <i class="fa-regular fa-heart"></i>
            </div>
            <img :src="imgSrc" alt="product image" />
            <button class="addToCart" :style="{ backgroundColor: btnBgColor }">Add To Cart</button>
        </div>
        <div class=" details">
            <div class="rank">
                <i v-for="i in 5" :key="i" :class="{
                    'fa-solid fa-star': i <= Math.floor(rank),
                    'fa-solid fa-star-half-stroke': i === Math.ceil(rank) && !Number.isInteger(rank),
                    'fa-regular fa-star': i > rank
                }"></i>
            </div>
            <p class="name">{{ name }}</p>
            <div class="price">
                <p class="after">{{ priceAfter }}$</p>
                <p class="before">{{ priceBefore }}$</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgSrc: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: false
        },
        exp: {
            type: String,
            required: false,
            default: 'New'
        },
        disc: {
            type: String,
            required: false
        },
        rank: {
            type: Number,
            required: false
        },
        priceBefore: {
            type: Number,
            required: false
        },
        priceAfter: {
            type: Number,
            required: false
        },
        btnBgColor: {
            type: String,
            required: true,
            default: 'black'
        }
    }
};
</script>

<style scoped>
.card {
    min-width: 250px;
    margin: 0 10px;
    box-shadow: 0px 0px 20px -6px #00000050;
}

.visual {
    background-color: #F3F5F7;
    padding: 20px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex: 1;
}

.header h3 {
    background-color: white;
    padding: 5px;
    font-size: 16px;
    border-radius: 5px;
}

.header i {
    font-size: 20px;
    cursor: pointer;
    background-color: white;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: .5s;
    position: relative;
}

.header i:hover {
    background-color: #ed4956;
    color: white;
}

.header .discount {
    background-color: #38CB89;
    margin: 5px 0;
    font-size: 16px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
}

.addToCart {
    color: white;
    padding: 5px;
    font-size: 18px;
    border-radius: 10px;
    opacity: 0;
    transition: .5s;
    width: 100%;
    border: 0;
    /* background-color: #377DFF; */
}

.visual:hover .addToCart {
    opacity: 1;
    cursor: pointer;
}

.details {
    text-align: start;
    padding: 10px 0;
    border-top: 2px solid black;
    width: 100%;
}

.details .name {
    margin: 5px 10px;
}

.rank {
    margin: 5px 10px;
    color: #FFD700;
}

.price {
    display: flex;
    margin: 5px 10px;
}

.price .before {
    color: #6C7275;
    text-decoration: line-through;
    margin: 0 10px;
}

.price .after {
    font-weight: bold;
}

img {
    max-width: 80%;

}
</style>
