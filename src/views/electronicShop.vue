<script setup>
import img1 from '@/assets/electronics/landing.png';
import col1 from '@/assets/electronics/collection/col1.png';
import col2 from '@/assets/electronics/collection/col2.png';
import col3 from '@/assets/electronics/collection/col3.png';
import insta1 from '@/assets/electronics/instagram/insta1.jpg';
import insta2 from '@/assets/electronics/instagram/insta2.jpg';
import insta3 from '@/assets/electronics/instagram/insta3.jpg';
import insta4 from '@/assets/electronics/instagram/insta4.jpg';
import email from '@/assets/electronics/email.jpg';
import promot from '@/assets/electronics/countDown.jpg';
import p1 from '@/assets/electronics/products/p1.png';
import p2 from '@/assets/electronics/products/p2.png';
import p3 from '@/assets/electronics/products/p3.png';
import p4 from '@/assets/electronics/products/p4.png';
import p5 from '@/assets/electronics/products/p5.png';
import p6 from '@/assets/electronics/products/p6.png';
import p7 from '@/assets/electronics/products/p7.png';
import p8 from '@/assets/electronics/products/p8.png';
import p9 from '@/assets/electronics/products/p9.png';
import p10 from '@/assets/electronics/products/p10.png';
import p11 from '@/assets/electronics/products/p11.png';
import p12 from '@/assets/electronics/products/p12.png';
import p13 from '@/assets/electronics/products/p13.png';
import p14 from '@/assets/electronics/products/p14.png';
import p15 from '@/assets/electronics/products/p15.png';
import p16 from '@/assets/electronics/products/p16.png';
const products = [
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p1,
    exp: 'New',
    rank: 1.5,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p2,
    exp: 'New',
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p3,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p4,
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p5,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p6,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p7,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p8,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p9,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p10,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p11,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p12,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p13,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p14,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p15,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p16,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
];
const bestSeller = [
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p1,
    exp: 'Hot',
    rank: 5,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p2,
    exp: 'Hot',
    rank: 5,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p3,
    exp: 'Hot',
    rank: 5,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p4,
    exp: 'Hot',
    rank: 5,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p5,
    exp: 'Hot',
    rank: 5,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p6,
    exp: 'Hot',
    rank: 5,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p7,
    exp: 'Hot',
    rank: 5,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Skullcandy-Crusher anc 2 wireless headphones',
    imgSrc: p8,
    exp: 'Hot',
    rank: 5,
    priceAfter: 400,
    priceBefore: 500,
  },
];
</script>

<template>
  <main class="view2">
    <landingPage
      :src="img1"
      btnbgColor="#377DFF"
      h1="Listen to amazing the music sound."
      p="Experience music like never before"
      bg-color="#ffc146"
    >
    </landingPage>
    <div class="container">
      <brandsNames></brandsNames>
      <!-- -------------------- -->
      <sectionHeader
        title="New Arrivals"
        :total-desc="[{ view: 'none' }]"
        :total-link="[{ view: 'none' }]"
      >
      </sectionHeader>
      <ElsSlider :products="products" btnbg-color="#377DFF"></ElsSlider>
      <!-- -------------------- -->
      <sectionHeader
        title="Collection Shop"
        :total-desc="[{ view: 'none' }]"
        :total-link="[{ view: 'none' }]"
      >
      </sectionHeader>
      <div class="categories">
        <sectionCard
          title="Earbuds"
          :total-link="[{ text: 'See More', view: 'block' }]"
          :src="col3"
        >
        </sectionCard>
        <sectionCard
          title="Headband"
          :total-link="[{ text: 'See More', view: 'block' }]"
          :src="col1"
        >
        </sectionCard>
        <sectionCard
          title="Accessories"
          :total-link="[{ text: 'See More', view: 'block' }]"
          :src="col2"
        >
        </sectionCard>
        <sectionCard
          title="Earbuds"
          :total-link="[{ text: 'See More', view: 'block' }]"
          :src="col3"
        >
        </sectionCard>
      </div>
      <!-- -------------------- -->
      <div class="best">
        <sectionHeader
          title="Best Sellers"
          :total-desc="[{ view: 'none' }]"
          :total-link="[{ view: 'none' }]"
        >
        </sectionHeader>
        <ElsSlider :products="bestSeller" btnbg-color="#377DFF"></ElsSlider>
      </div>
      <!-- -------------------- -->
    </div>
    <promotionSection
      :src="promot"
      txt-bg-color="#ffdd99"
      :year="2025"
      month="May"
      :day="30"
      :hour="23"
      :minutes="59"
      :secounds="59"
      btnbg-color="#377DFF"
      :arr="[
        {
          h3: 'PROMOTION',
          h1: 'Hurry up! 40% OFF',
          p: 'Thousands of high tech are waiting for you',
        },
      ]"
    >
    </promotionSection>
    <div class="container">
      <generalRules></generalRules>
      <sectionHeader
        title="Instagram"
        oriation="column"
        :total-desc="[
          { text: 'NEWSFEED', view: 'block', order: -1 },
          {
            text: 'Follow us on social media for more discount & promotions',
            view: 'block',
            order: 1,
          },
          { text: '@31egant _ official', view: 'block', order: 2 },
        ]"
        :total-link="[{ view: 'none' }]"
      >
      </sectionHeader>
      <div class="categories instagram">
        <sectionCard hiddeng-view="none" :src="insta1"></sectionCard>
        <sectionCard hiddeng-view="none" :src="insta2"></sectionCard>
        <sectionCard hiddeng-view="none" :src="insta3"></sectionCard>
        <sectionCard hiddeng-view="none" :src="insta4"></sectionCard>
      </div>
    </div>
    <sectionFive :src="email" color="black"></sectionFive>
    <footerSection bg-color="#121212" color="white"></footerSection>
  </main>
</template>

<script>
import landingPage from '@/components/sections2/landingPage.vue';
import brandsNames from '@/components/sections2/brandsNames.vue';
import sectionHeader from '@/components/general comps/sectionHeader.vue';
import ElsSlider from '@/components/child comps/elsSlider.vue';
import sectionCard from '@/components/child comps/sectionCardVue.vue';
import promotionSection from '@/components/sections2/promotionSection.vue';
import generalRules from '@/components/child comps/generalRules.vue';
import sectionFive from '@/components/sections/sectionFive.vue';
import footerSection from '@/components/sections2/footerSection.vue';
export default {
  data() {
    return {
      navBarColor: 'white',
    };
  },
  components: {
    landingPage,
    brandsNames,
    sectionHeader,
    ElsSlider,
    sectionCard,
    promotionSection,
    generalRules,
    sectionFive,
    footerSection,
  },
};
</script>

<style>
.view2 .categories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}

.view2 .categories .card {
  margin: 20px;
  background-color: #f3f5f7;
  position: relative;
  min-height: 300px;
  min-width: 300px;
}

.view2 .categories .heading {
  width: 100%;
  height: 100%;
  text-align: start;
  padding: 10px;
  color: black;
  z-index: 2;
  margin-left: 20px;
}

.view2 .categories .heading h2 {
  text-align: start;
  justify-content: start;
}

.view2 .categories .heading > .link {
  justify-content: start;
  width: fit-content;
  margin-left: 10px;
}

.view2 .categories .card .img {
  padding: 0;
}

.view2 .categories .card .img img {
  border-radius: 10px;
  max-width: 80%;
}

.view2 .best .slider {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.view2 .best .slider .card {
  margin: 0;
}

.view2 .instagram .card .img {
  height: 100%;
  width: 100%;
}

.view2 .instagram .card .img img {
  max-width: 100%;
  height: 100%;
}

@media (max-width: 776px) {
  .view2 .landing {
    flex-direction: column;
  }
}
</style>
