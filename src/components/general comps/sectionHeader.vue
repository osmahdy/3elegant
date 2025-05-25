<template>
    <div class="header" :style="{ flexDirection: oriation }">
        <h1 v-html="title"></h1>
        <a v-for="i in totalLink" :key="i" :href="i.link" :style="{ display: i.view, order: i.order }">{{ i.text }}
            <i-icon class="icon" icon="arrow-right" />
        </a>
        <!-- <p :style="{ display: viewDesc }">{{ desc }}</p> -->
        <p class="desc" v-for="i in totalDesc" :key="i" :style="{ display: i.view, order: i.order }">
            {{ i.text }}
        </p>


    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        totalLink: {
            type: Array,
            required: false
        },
        oriation: {
            type: String,
            default: 'row'
        },
        totalDesc: {
            type: Array,
            required: false
        }
    }
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    margin-top: 50px;
    border-top: 2px solid black;
}

.header h1 {
    text-align: start;
    margin: 10px;
    font-size: 35px;
}

.header a {
    text-decoration: none;
    font-size: 20px;
    color: black;
    border-bottom: 2px solid black;
    cursor: pointer;
}

.desc {
    font-size: 16px;
    color: #6C7275;
    margin: 10px 0;
}

@media (max-width: 778px) {
    .header {
        flex-direction: column;
    }
}
</style>