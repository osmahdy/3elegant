<template>
  <div class="all">
    <div class="cover">
      <div class="slides" :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
        <img v-for="(img, i) in images" :key="i" :src="img" class="slide-img" />
      </div>
    </div>
    <div class="imgs">
      <img
        v-for="(img, i) in images"
        :key="i"
        :src="img"
        :class="{ coverImg: currentImageIndex !== i }"
        @click="resetInterv(i)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImageIndex: 0,
      counter: 0,
      images: [
        require('@/assets/landing image slider/slider1.jpg'),
        require('@/assets/landing image slider/slider2.jpg'),
        require('@/assets/landing image slider/slider3.jpg'),
        require('@/assets/landing image slider/slider4.jpg'),
      ],
    };
  },
  methods: {
    autoSlide() {
      if (window.innerWidth < 778) {
        this.images = [
          require('@/assets/landing image slider/slider1-mobile.png'),
          require('@/assets/landing image slider/slider2-mobile.png'),
          require('@/assets/landing image slider/slider3-mobile.png'),
          require('@/assets/landing image slider/slider4-mobile.png'),
        ];
      }
      setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.counter = this.currentImageIndex;
      }, 3000); // 3 seconds
    },
    resetInterv(i) {
      this.currentImageIndex = i;
    },
  },
  mounted() {
    this.autoSlide();
  },
};
</script>

<style scoped>
.slider {
  height: calc(100vh - 50px);
  position: relative;
}

.cover {
  width: 100%;
  height: calc(100vh - 92px);
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
}

.slides img {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  object-fit: cover;
}
.imgs {
  margin: 20px 0;
}
.imgs img {
  width: 60px;
  height: 50px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
}
.coverImg {
  opacity: 0.3;
}
@media (max-width: 778px) {
  .cover {
    height: fit-content;
  }

  .slides img {
    object-fit: contain;
  }
}
</style>
