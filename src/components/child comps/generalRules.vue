<template>
    <div class="rules">
        <div class="box">
            <i class="fa-solid fa-truck-fast"></i>
            <h2>Free Shipping</h2>
            <h4>Order above $200</h4>
        </div>
        <div class="box">
            <i class="fa-solid fa-money-bill-1-wave"></i>
            <h2>Money Back</h2>
            <h4>30 days guarantee</h4>
        </div>
        <div class="box">
            <i class="fa-solid fa-lock"></i>
            <h2>Secure Payments</h2>
            <h4>Secured by Stripe</h4>
        </div>
        <div class="box">
            <i class="fa-solid fa-phone"></i>
            <h2>24/7 support</h2>
            <h4>Phone and Email support</h4>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.rules {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.box {
    background-color: #F3F5F7;
    padding: 20px;
    margin: 10px;
    text-align: start;
}

.box i {
    font-size: 35px;
}

.box h2 {
    margin: 10px 0;
}

.box h4 {
    color: #6C7275;
}
</style>