<template>
    <div class="hot">
        <i-icon class="icon fire" icon="fa-solid fa-fire" />
        <span>30% off storewide - limited time!</span>
        <a href="#">shope now</a>
        <i-icon class="icon arrow" icon="arrow-right" />
    </div>
</template>

<script>
export default {
    methods: {
    }
}
</script>

<style scoped>
.hot {
    /* 141718 */
    background-color: #222;
    color: #fefefe;
    padding: 10px;
    text-align: center;
    position: relative;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
}

.hot a {
    margin-right: 10px;
    padding: 2px;
    color: #FFAB00;
    text-decoration: none;
    border-bottom: 2px solid #FFAB00;
    cursor: pointer;
}

.hot span {
    margin: 0 10px;
}

.hot .arrow {
    animation: arrowMove 1s linear infinite;
}

.hot .fire {
    animation: arrowUp 1s linear infinite;
}
</style>