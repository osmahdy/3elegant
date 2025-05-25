<template>
  <div class="all" :style="{ backgroundColor: bgColor, color: color }">
    <div class="hot">
      <hotDeals></hotDeals>
      <i class="fa-solid fa-circle-xmark close" @click="closeHotDeals"></i>
    </div>
    <div class="container">
      <navBar @dataFromChild="handleData" :navBorderColor="color"></navBar>
      <!-- Corrected prop passing -->
    </div>
  </div>
</template>

<script>
import hotDeals from '@/components/general comps/hotDeals.vue';
import navBar from '@/components/general comps/navBar.vue';
export default {
  data() {
    return {
      bgColor: '',
      color: '',
    };
  },
  components: {
    hotDeals,
    navBar,
  },
  methods: {
    closeHotDeals(e) {
      let hot = document.querySelector(`.all .hot`);
      hot.innerHTML = '';
      console.log(e);
    },
    handleData(d) {
      this.bgColor = d.bgColor;
      this.color = d.color;
      // document.querySelector(`.all`).style.borderBottom = `2px solid white`
    },
  },
};
</script>

<style scoped>
.container {
  width: calc(100vw - 200px);
  margin: auto;
  padding: 0;
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
@media (max-width: 990px) {
  .container {
    width: calc(100vw - 150px);
    margin: auto;
  }
}

@media (max-width: 778px) {
  .container {
    width: calc(100vw - 50px);
    margin: auto;
  }
}
</style>
