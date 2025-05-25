<script setup>
import landing from '@/assets/clothes/landing3.png';
import art1 from '@/assets/clothes/articles/art1.jpg';
import art2 from '@/assets/clothes/articles/art2.jpg';
import art3 from '@/assets/clothes/articles/art3.jpg';
import insta1 from '@/assets/clothes/instagram/insta1.jpg';
import insta2 from '@/assets/clothes/instagram/insta2.jpg';
import insta3 from '@/assets/clothes/instagram/insta3.jpg';
import insta4 from '@/assets/clothes/instagram/insta4.jpg';
import video from '@/assets/clothes/instagram/video.jpg';
import promot from '@/assets/clothes/promotion.jpg';
import p1 from '@/assets/clothes/products/p1.jpg';
import p2 from '@/assets/clothes/products/p2.jpg';
import p3 from '@/assets/clothes/products/p3.jpg';
import p4 from '@/assets/clothes/products/p4.jpg';
import p5 from '@/assets/clothes/products/p5.jpg';
import p6 from '@/assets/clothes/products/p6.jpg';
import p7 from '@/assets/clothes/products/p7.jpg';
import p8 from '@/assets/clothes/products/p8.jpg';
import cat1 from '@/assets/clothes/category/cat1.jpg';
import cat2 from '@/assets/clothes/category/cat2.jpg';
import cat3 from '@/assets/clothes/category/cat3.jpg';
import cat4 from '@/assets/clothes/category/cat4.jpg';
import cat5 from '@/assets/clothes/category/cat5.jpg';
import cat6 from '@/assets/clothes/category/cat6.jpg';
import cat7 from '@/assets/clothes/category/cat7.jpg';
import cat8 from '@/assets/clothes/category/cat8.jpg';
import cat9 from '@/assets/clothes/category/cat9.jpg';
import cat10 from '@/assets/clothes/category/cat10.jpg';
const products = [
  {
    name: '96 Nuptse Dip Dye Korea Puffers Jacket',
    imgSrc: p1,
    exp: 'New',
    rank: 1.5,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: '96 Nuptse Dip Dye Korea Puffers Jacket',
    imgSrc: p2,
    exp: 'New',
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: '96 Nuptse Dip Dye Korea Puffers Jacket',
    imgSrc: p3,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: '96 Nuptse Dip Dye Korea Puffers Jacket',
    imgSrc: p4,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: '96 Nuptse Dip Dye Korea Puffers Jacket',
    imgSrc: p5,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
];
const bestSeller = [
  {
    name: '96 Nuptse Dip Dye Korea Puffers Jacket',
    imgSrc: p1,
    exp: 'Hot',
    rank: 1.5,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: '96 Nuptse Dip Dye Korea Puffers Jacket',
    imgSrc: p2,
    exp: 'Hot',
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: '96 Nuptse Dip Dye Korea Puffers Jacket',
    imgSrc: p3,
    exp: 'Hot',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: '96 Nuptse Dip Dye Korea Puffers Jacket',
    imgSrc: p4,
    exp: 'Hot',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: '96 Nuptse Dip Dye Korea Puffers Jacket',
    imgSrc: p5,
    exp: 'Hot',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: '96 Nuptse Dip Dye Korea Puffers Jacket',
    imgSrc: p6,
    exp: 'Hot',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: '96 Nuptse Dip Dye Korea Puffers Jacket',
    imgSrc: p7,
    exp: 'Hot',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: '96 Nuptse Dip Dye Korea Puffers Jacket',
    imgSrc: p8,
    exp: 'Hot',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
];
</script>

<template>
  <main class="view4">
    <landingPage
      :src="landing"
      btnbgColor="#377DFF"
      btn-color="white"
      h1="Listen to amazing the music sound."
      p="Experience music like never before"
      bg-color="#171D28"
      color="white"
    >
    </landingPage>
    <div class="container">
      <brandsNames></brandsNames>
      <!-- -------------------- -->
      <sectionHeader
        title="Just In"
        :total-desc="[{ view: 'none' }]"
        :total-link="[{ view: 'none' }]"
      >
      </sectionHeader>
      <ElsSlider :products="products" btnbg-color="#377DFF"></ElsSlider>
      <!-- -------------------- -->
      <sectionHeader
        title="Shop by Categories"
        :total-desc="[{ view: 'none' }]"
        :total-link="[{ view: 'none' }]"
      >
      </sectionHeader>
      <div class="categories group1">
        <sectionCard title="Puffers" :total-link="[{ view: 'none' }]" :src="cat1"> </sectionCard>
        <sectionCard title="Bombers" :total-link="[{ view: 'none' }]" :src="cat2"> </sectionCard>
        <sectionCard title="Lightweight jackets" :total-link="[{ view: 'none' }]" :src="cat3">
        </sectionCard>
        <sectionCard title="Gilets" :total-link="[{ view: 'none' }]" :src="cat4"> </sectionCard>
        <sectionCard title="Coats" :total-link="[{ view: 'none' }]" :src="cat5"> </sectionCard>
        <sectionCard title="Rainwear" :total-link="[{ view: 'none' }]" :src="cat6"> </sectionCard>
      </div>
      <div class="categroies group2">
        <sectionCard
          title="The Leatheqv"
          :total-link="[{ text: 'Collection', view: 'block' }]"
          :src="cat10"
        >
        </sectionCard>
        <sectionCard
          title="November Outfits"
          :total-link="[{ text: 'Collection', view: 'block' }]"
          :src="cat7"
        >
        </sectionCard>
        <sectionCard
          title="The Leatheqv"
          :total-link="[{ text: 'Collection', view: 'block' }]"
          :src="cat10"
        >
        </sectionCard>
        <sectionCard
          title="Cashmere Set"
          :total-link="[{ text: 'Collection', view: 'block' }]"
          :src="cat8"
        >
        </sectionCard>
        <sectionCard
          title="The New Nordic"
          :total-link="[{ text: 'Collection', view: 'block' }]"
          :src="cat9"
        >
        </sectionCard>
        <sectionCard
          title="The Leatheqv"
          :total-link="[{ text: 'Collection', view: 'block' }]"
          :src="cat10"
        >
        </sectionCard>
      </div>
      <!-- -------------------- -->
      <sectionHeader
        title="Best Seller"
        :total-desc="[{ view: 'none' }]"
        :total-link="[{ view: 'none' }]"
      >
      </sectionHeader>
      <div class="best">
        <ElsSlider :products="bestSeller" btnbg-color="#377DFF"></ElsSlider>
      </div>
    </div>
    <!-- -------------------- -->
    <promotionSection
      :src="promot"
      txt-bg-color="#F3F5F7"
      :year="2025"
      month="May"
      :day="30"
      :hour="23"
      :minutes="59"
      :secounds="59"
      btnbg-color="#377DFF"
      :arr="[
        {
          h3: 'SALE UP TO 35% OFF',
          h1: 'HUNDREDS of New lower prices!',
          p: 'Hurry up!!! Winter is coming!',
        },
      ]"
    >
    </promotionSection>
    <!-- -------------------- -->
    <div class="container">
      <sectionHeader
        title="Winter Collections"
        oriation="column"
        :total-desc="[
          { text: 'PROMOTION', view: 'block', order: -1 },
          { text: 'Introducing the new winter jackets.', view: 'block', order: 1 },
        ]"
      >
      </sectionHeader>
      <div class="categories video">
        <sectionCard hiddeng-view="none" :src="video"></sectionCard>
      </div>
      <!-- ----------------- -->
      <sectionHeader
        title="Latest Articles"
        :total-desc="[{ view: 'none' }]"
        :total-link="[{ text: 'View More', view: 'block' }]"
      >
      </sectionHeader>
      <div class="categories articles">
        <sectionCard
          title="2023 Holida Gift Guide"
          :total-link="[{ text: 'Read More', view: 'block' }]"
          :src="art1"
        >
        </sectionCard>
        <sectionCard
          title="2023 Holida Gift Guide"
          :total-link="[{ text: 'Read More', view: 'block' }]"
          :src="art2"
        >
        </sectionCard>
        <sectionCard
          title="2023 Holida Gift Guide"
          :total-link="[{ text: 'Read More', view: 'block' }]"
          :src="art3"
        >
        </sectionCard>
      </div>
      <!-- ----------------- -->
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
      <generalRules></generalRules>
    </div>
    <!-- ----------------- -->
    <footerSection bg-color="#171d28" color="white"></footerSection>
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
    footerSection,
  },
};
</script>

<style>
.view4 .categories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(335px, 1fr));
}

.view4 .group1 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.view4 .group1 .card {
  margin: 20px;
  position: relative;
  min-height: 200px;
  min-width: 200px;
  box-shadow: none;
}

.view4 .group1 .card .heading {
  width: 100%;
  text-align: center;
  padding: 10px;
  order: 1;
}

.view4 .group1 .heading h2 {
  text-align: center;
}

.view4 .group1 .card .img {
  padding: 0;
  border-radius: 50%;
}

.view4 .group1 .card .img img {
  border-radius: 50%;
  max-width: 100%;
  width: 200px;
  height: 200px;
}

.view4 .group2 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}

@media (max-width: 990px) {
  .view4 .group2 {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

.view4 .group2 .card {
  position: relative;
  margin: 20px;
}

.view4 .group2 .card .heading {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  z-index: 2;
  text-align: start;
}

.view4 .group2 .card .heading h2 {
  padding: 10px 0;
}

.view4 .group2 .card .heading .link {
  width: fit-content;
}

.view4 .group2 .card .img {
  width: 100%;
  height: 100%;
  padding: 0;
}

.view4 .group2 .card .img img {
  height: 100%;
  width: 100%;
  border-radius: 15px;
}

.view4 .best .slider {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.view4 .best .slider .card {
  margin: 0;
}

.view4 .video {
  display: block;
}

.view4 .video .img {
  padding: 0;
}
.view4 .articles .card {
  margin: 20px;
}
.view4 .articles .card .heading {
  width: 50%;
  height: fit-content;
  text-align: start;
  padding: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  z-index: 2;
  margin: 0;
}
.view4 .articles .card .heading h2 {
  text-align: start;
  padding: 10px 0;
}
.view4 .articles .card .heading a {
  border-color: white;
  width: fit-content;
}

.view4 .articles .card .img {
  width: 100%;
  height: 100%;
  padding: 0;
}

.view4 .articles .card .img img {
  max-width: 100%;
  height: 100%;
}
.view4 .instagram .card .img {
  height: 100%;
  width: 100%;
}

.view4 .instagram .card .img img {
  max-width: 100%;
  height: 100%;
}

@media (max-width: 776px) {
  .view4 .landing {
    flex-direction: column;
  }
}
</style>
