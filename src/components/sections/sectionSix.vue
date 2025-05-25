<template>
    <footer>
        <div class="top">
            <h1>3elegant</h1>
            <p>Gift & Decoration Store</p>
        </div>
        <div class="social">
            <a href="#" target="_blank">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#" target="_blank">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" target="_blank">
                <i class="fa-brands fa-x-twitter"></i>
            </a>
        </div>
        <div class="bottom">
            <p>Copyright &copy; <span>{{ getYear() }}</span> 3legant. All rights reserved</p>
            <p>privacy policy</p>
            <p>Terms Of Use</p>
        </div>
    </footer>
</template>

<script>
export default {
    components: {
    },
    methods: {
        getYear() {
            let d = new Date()
            return d.getFullYear();
        }
    }
}
</script>

<style scoped>
footer {
    background-color: #222;
    color: white;
    padding: 30px;
    padding-bottom: 5px;
}

.top {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.top h1 {
    padding: 5px 10px;
    border-right: 2px solid #6C7275;
}

.top p {
    padding: 10px;
    color: #6C7275;
    font-size: 16px;
}

.social {
    /* border-top: 1px solid #6C7275;
    border-bottom: 1px solid #6C7275; */
    padding: 20px 0;
}

.social a {
    color: white;
    font-size: 30px;
    margin: 0 10px;
}

.social a i {
    transition: .3s;
}

.social a:hover i {
    transform: scale(1.2);
}

.bottom {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bottom p {
    margin: 0 10px;
    cursor: pointer;
}

.bottom p:first-child {
    color: #6C7275;
    font-weight: bold;
}

.bottom p:first-child span {
    color: white;
}

@media (max-width: 990px) {
    .social {
        margin-top: 10px;
    }
}

@media (max-width: 776px) {
    .bottom {
        flex-direction: column;
    }

    .bottom p {
        margin: 10px 0;
    }
}
</style>