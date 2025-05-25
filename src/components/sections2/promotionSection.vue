<template>
    <section class="promotion">
        <div class="img">
            <img :src="src" alt="">
        </div>
        <div class="text" v-for="arr in arr" :key="arr" :style="{ backgroundColor: txtBgColor, color: color }">
            <h3 :style="{ color: btnbgColor }">{{ arr.h3 }}</h3>
            <h1>{{ arr.h1 }}</h1>
            <p>{{ arr.p }}</p>
            <div class="box">
                <p>Offer expires in:</p>
                <div class="time">
                    <div class="sec day">
                        <p class="number" :style="{ color: btnbgColor }">{{ days }}</p>
                        <p>Days</p>
                    </div>
                    <div class="sec hour">
                        <p class="number" :style="{ color: btnbgColor }">{{ hours }}</p>
                        <p>Hours</p>
                    </div>
                    <div class="sec min">
                        <p class="number" :style="{ color: btnbgColor }">{{ min }}</p>
                        <p>Minutes</p>
                    </div>
                    <div class="sec secound">
                        <p class="number" :style="{ color: btnbgColor }">{{ sec }}</p>
                        <p>Secounds</p>
                    </div>
                </div>
            </div>
            <button :style="{ backgroundColor: btnbgColor }">Shop Now</button>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
        }
    },
    props: {
        year: {
            type: Number,
            default: 2025
        },
        month: {
            type: String,
            default: "Dec"
        },
        day: {
            type: Number,
            default: 28,
        },
        hour: {
            type: Number,
            default: 23,
        },
        minutes: {
            type: Number,
            default: 59,
        },
        secounds: {
            type: Number,
            default: 59,
        },
        src: {
            type: String,
            required: true
        },
        txtBgColor: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: false
        },
        btnbgColor: {
            type: String,
            required: true,
            default: 'black'
        },
        arr: {
            type: Array,
            required: true
        }
    },
    methods: {
        pad(n) {
            return n < 10 ? '0' + n : n;
        },
        countDown(month, year, day, hour, min, sec) {
            let countdown = new Date(`${month} ${day}, ${year} ${hour}:${min}:${sec}`).getTime();

            const interval = setInterval(() => {
                let now = new Date().getTime();
                let dateDiff = countdown - now;

                if (dateDiff <= 0) {
                    clearInterval(interval);
                    this.days = this.hours = this.min = this.sec = '00';
                    return;
                }

                this.days = this.pad(Math.floor(dateDiff / (1000 * 60 * 60 * 24)));
                this.hours = this.pad(Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                this.min = this.pad(Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60)));
                this.sec = this.pad(Math.floor((dateDiff % (1000 * 60)) / 1000));
            }, 1000);
        }
    },
    mounted() {
        this.countDown(this.month, this.year, this.day, this.hour, this.minutes, this.secounds)
    }
}
</script>

<style>
.promotion {
    display: flex;
}

.promotion .img {
    width: 50%;
}

.promotion .img img {
    max-width: 100%;
    height: 100%;
}

.promotion .text {
    width: 50%;
    padding: 20px 30px;
    text-align: start;
    box-sizing: border-box;
}

.promotion .text h3 {
    color: #377DFF;
    margin: 10px;

}

.promotion .text h1 {
    font-size: 35px;
    margin: 10px;
}

.promotion .text p {
    margin: 10px;
    font-size: 16px;
}

.promotion .text .time {
    display: flex;
}

.promotion .text .time .sec .number {
    background-color: white;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
}

.promotion .text .sec {
    margin: 0 10px;
    width: 50px;
}

.promotion button {
    padding: 10px 20px;
    background-color: #141718;
    border: none;
    color: white;
    border-radius: 10px;
    text-align: center;
    margin: 10px;
    min-width: 200px;
    font-size: 16px;
    font-weight: bold;
}

@media (max-width: 776px) {
    .promotion {
        flex-direction: column;
    }

    .promotion .img {
        width: 100%;
    }

    .promotion .text {
        width: 100%;
    }
}
</style>