<template>
  <div class="all">
    <div class="landingSlider">
      <sliderImage></sliderImage>
    </div>
  </div>
</template>

<script>
import sliderImage from '@/components/general comps/sliderImage.vue';
export default {
  data() {
    return {
      navBarColor: 'white',
    };
  },
  components: {
    sliderImage,
  },
  methods: {
    closeHotDeals() {
      let hot = document.querySelector(`.all .hot`);
      let closeBtn = document.querySelector(`.all .close`);
      closeBtn.addEventListener('click', () => {
        hot.innerHTML = '';
      });
    },
  },
  mounted() {
    this.closeHotDeals();
  },
};
</script>

<style scoped>
.container {
  width: calc(100vw - 200px);
  margin: auto;
  padding-top: 0;
}

.all {
  position: relative;
}

.close {
  position: fixed;
  top: 15px;
  right: 15px;
  font-size: 18px;
  cursor: pointer;
  color: white;
}

@media (max-width: 778px) {
  .container {
    width: calc(100vw - 50px);
    margin: auto;
  }
}
</style>
