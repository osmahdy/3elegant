<template>
    <div class="alert" :style="{ backgroundColor: bgColor }">
        <i-icon class="icon" :icon="icon" />
        <p class="message">{{ message }}</p>
    </div>
</template>


<script>

export default {
    props: {
        message: String,
        bgColor: String,
        icon: String
    }
}
</script>

<style scoped>
.alert {
    color: #fefefe;
    padding: 20px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 18px;
    display: flex;
    align-items: center;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    animation: alert 3s linear forwards
}
.icon {
    color: #fefefe;
    font-size: 22px;
    margin-right: 10px;
}
@keyframes alert{
    0% {
        transform: translateX(120%);
    }
    20% {
        transform: translateX(0);
    }
    80% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(120%);
    }
}
</style>