<template>
  <section class="card">
    <div class="heading" :style="{ display: hiddengView }">
      <h2 :style="{ display: titleView }">{{ title }}</h2>
      <a
        class="link"
        v-for="i in totalLink"
        :key="i"
        :href="i.link"
        :style="{ display: i.view, order: i.order }"
      >
        {{ i.text }}
        <i-icon class="icon" icon="arrow-right" />
      </a>
    </div>
    <div class="img">
      <img :src="src" alt="section" />
    </div>
    <p class="desc" :style="{ display: descView }">{{ desc }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      required: false,
    },
    src: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
    titleView: {
      type: String,
      required: false,
    },
    hiddengView: {
      type: String,
      required: false,
    },
    descView: {
      type: String,
      required: false,
    },
    totalLink: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style>
.card {
  margin: 20px auto;
  border: 5px solid white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 0px 20px -6px #00000050;
}

.card .img {
  padding: 10px;
  cursor: pointer;
  position: relative;
  transition: 0.5s;
}

.card .img img {
  max-width: 100%;
  border-radius: 15px;
}

.card h2 {
  text-align: center;
  padding: 10px;
  border-radius: 15px;
}

.card a {
  text-decoration: none;
  border-bottom: 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  cursor: pointer;
}
</style>
