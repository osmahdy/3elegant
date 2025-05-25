<template>
  <section class="newsList" :style="{ color: color }">
    <h1>Join Our Newsletter</h1>
    <p>Sign up for deals, new products and promotions</p>
    <div class="center">
      <i class="fa-solid fa-envelope"></i>
      <input type="text" placeholder="Email address" />
      <button>Send</button>
    </div>
    <img :src="src" alt="" />
  </section>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.newsList {
  background-color: #f3f5f7;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 1;
  color: white;
}

.newsList img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.newsList h1 {
  margin: 10px;
  font-size: 30px;
}

.newsList .center {
  background-color: white;
  margin: 20px auto;
  border-bottom: 2px solid black;
  padding: 10px;
}

.newsList input {
  margin: 0px 10px;
  border: none;
  outline: none;
  width: 280px;
  font-size: 16px;
}

.newsList button {
  font-size: 17px;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
  border: none;
}
</style>
