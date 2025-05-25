<script setup>
import p1 from '@/assets/output/p1.png';
import p2 from '@/assets/output/p2.png';
import p3 from '@/assets/output/p3.png';
import p4 from '@/assets/output/p4.png';
import p5 from '@/assets/output/p5.png';
import p6 from '@/assets/output/p6.png';
import p7 from '@/assets/output/p7.png';
import p8 from '@/assets/output/p8.png';
import p9 from '@/assets/output/p9.png';
import p10 from '@/assets/output/p10.png';
import p11 from '@/assets/output/p11.png';
import p12 from '@/assets/output/p12.png';
import p13 from '@/assets/output/p13.png';
import p14 from '@/assets/output/p14.png';
import p15 from '@/assets/output/p15.png';
import p16 from '@/assets/output/p16.png';
const products = [
  {
    name: 'Single American Couch',
    imgSrc: p1,
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
    disc: '50%',
  },
  {
    name: 'Single American Couch',
    imgSrc: p2,
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
    disc: '50%',
  },
  {
    name: 'Single American Couch',
    imgSrc: p3,
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
    disc: '50%',
  },
  {
    name: 'Single American Couch',
    imgSrc: p4,
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
    disc: '50%',
  },
  {
    name: 'Single American Couch',
    imgSrc: p5,
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
    disc: '50%',
  },
  {
    name: 'Single American Couch',
    imgSrc: p6,
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
    disc: '50%',
  },
  {
    name: 'Single American Couch',
    imgSrc: p7,
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
    disc: '50%',
  },
  {
    name: 'Single American Couch',
    imgSrc: p8,
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
    disc: '50%',
  },
  {
    name: 'Single American Couch',
    imgSrc: p9,
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
    disc: '50%',
  },
  {
    name: 'Single American Couch',
    imgSrc: p10,
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
    disc: '50%',
  },
  {
    name: 'Single American Couch',
    imgSrc: p11,
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
    disc: '50%',
  },
  {
    name: 'Single American Couch',
    imgSrc: p12,
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
    disc: '50%',
  },
  {
    name: 'Single American Couch',
    imgSrc: p13,
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
    disc: '50%',
  },
  {
    name: 'Single American Couch',
    imgSrc: p14,
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
    disc: '50%',
  },
  {
    name: 'Single American Couch',
    imgSrc: p15,
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
    disc: '50%',
  },
  {
    name: 'Single American Couch',
    imgSrc: p16,
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
    disc: '50%',
  },
];
</script>
<template>
  <div class="section2">
    <sectionHeader
      title="New Arrivals"
      :totalLink="[{ text: 'See More', view: 'block' }]"
    ></sectionHeader>
    <elsSlider :products="products" btnbgColor="#222"></elsSlider>
  </div>
</template>

<script>
import sectionHeader from '../general comps/sectionHeader.vue';
import elsSlider from '@/components/child comps/elsSlider.vue';
export default {
  data() {
    return {
      navBarColor: 'white',
    };
  },
  components: {
    elsSlider,
    sectionHeader,
  },
};
</script>

<style scoped>
.container {
  width: calc(100vw - 200px);
  margin: auto;
  padding: 50px 0;
}

.section2 .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}

.section2 .title h1 {
  text-align: start;
}

.section2 .title a {
  text-decoration: none;
  font-size: 20px;
  color: black;
  border-bottom: 2px solid black;
}

@media (max-width: 778px) {
  .container {
    width: calc(100vw - 50px);
    margin: auto;
  }

  .title {
    flex-direction: column;
  }
}
</style>
