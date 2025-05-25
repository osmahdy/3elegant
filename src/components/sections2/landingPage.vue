<template>
    <main class="landing" :style="{ backgroundColor: bgColor, color: color, order: textOrder }">
        <div class="text">
            <div class="box">
                <h1 v-html="h1"></h1>
                <p>{{ p }}</p>
                <button :style="{ backgroundColor: btnbgColor, color: btnColor }">Shopping Now</button>
            </div>
        </div>
        <div class=" img">
            <img :src="src" alt="">
        </div>
    </main>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        h1: {
            type: String,
            required: true,
        },
        p: {
            type: String,
            required: true,
        },
        bgColor: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: false
        },
        textOrder: {
            type: String,
            required: false
        },
        btnbgColor: {
            type: String,
            required: true,
            default: 'black'
        },
        btnColor: {
            type: String,
            required: true,
            default: 'black'
        },
    }
}
</script>

<style scoped>
main {
    /* background-color: #ffc146; */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding-top: 50px;

}

.img {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: end;
    justify-content: center;
}

img {
    max-width: 450px;
}

.text {
    text-align: start;
    width: 50%;
    padding: 20px;
    margin-left: 30px;
}

.text .box {
    width: fit-content;
    margin: auto;
}

.text h1 {
    font-size: 50px;
    max-width: 400px;
    margin: 10px 0;
}

.text p {
    font-size: 18px;
    margin: 10px 0;
    line-height: 1.5;
}

.text button {
    min-width: 180px;
    padding: 10px 20px;
    margin: 10px 0;
    font-size: 16px;
    background-color: #141718;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
}

@media (max-width: 776px) {
    main {
        flex-direction: column-reverse;
    }

    .text {
        text-align: center;
        width: 100%;
        margin: 0;
    }

    .text h1 {
        font-size: 45px;
    }

    .text p {
        font-size: 18px;
        margin: 10px auto;
        line-height: 1.5;
        max-width: 80%;
    }

    img {
        max-width: 350px;
    }
}
</style>