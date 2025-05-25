<template>
    <div class="boxs">
        <div class="box">
            <i class="fa-solid fa-atom"></i>
            <p>logoipsum•</p>
        </div>
        <div class="box">
            <i class="fa-solid fa-compact-disc"></i>
            <p>logoipsum•</p>
        </div>
        <div class="box">
            <i class="fa-solid fa-hurricane"></i>
            <p>logoipsum•</p>
        </div>
        <div class="box">
            <i class="fa-brands fa-artstation"></i>
            <p>logoipsum•</p>
        </div>
        <div class="box">
            <i class="fa-solid fa-section"></i>
            <p>logoipsum•</p>
        </div>
        <div class="box">
            <i class="fa-brands fa-nfc-directional"></i>
            <p>logoipsum•</p>
        </div>
    </div>
</template>

<script>
export default {}
</script>


<style scoped>
.boxs {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.box {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #6C7275;
    padding: 10px;
    margin: 10px;
    max-width: 130px;
}

.box i {
    margin: 0 10px;
    font-size: 35px;
}

.box p {
    font-size: 18px;
}
</style>