<template>
    <section>
        <img src="@/assets/output/ad break.png" alt="">
        <div class="details">
            <p class="disc">SALE UP TO 35% OFF</p>
            <h1>HUNDREDS of New lower prices!</h1>
            <p class="desc">It's more affordable than ever to give every room in your home a stylish makeover</p>
            <a href="#">shop now
                <i class="fa-solid fa-arrow-right"></i>
            </a>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
section {
    display: flex;
}

.details {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    background-color: #F3F5F7;
    flex: 1;
}

.disc {
    margin: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #377DFF;
}

h1 {
    margin: 10px;
    font-size: 35px;
    max-width: 55%;
    text-align: start;
}

.desc {
    margin: 0 20px;
    max-width: 60%;
    text-align: start;
}

a {
    margin: 20px;
    font-size: 18px;
    color: black;
    text-decoration: none;
    border-bottom: 2px solid black;
}

a i {
    font-size: 16px;
}

img {
    max-width: 50%;
}

@media (max-width: 776px) {
    section {
        flex-direction: column;
    }

    img {
        max-width: 100%;
    }
}
</style>