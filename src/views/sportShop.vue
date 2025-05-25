<script setup>
import img1 from '@/assets/sport/landing.png';
import cat1 from '@/assets/sport/category/cat1.png';
import cat2 from '@/assets/sport/category/cat2.png';
import cat3 from '@/assets/sport/category/cat3.png';
import cat4 from '@/assets/sport/category/cat4.png';
import cat5 from '@/assets/sport/category/cat5.png';
import cat6 from '@/assets/sport/category/cat6.png';
import promot from '@/assets/sport/promotion.jpg';
import col1 from '@/assets/sport/collection/col1.png';
import col2 from '@/assets/sport/collection/col2.png';
import col3 from '@/assets/sport/collection/col3.png';
import col4 from '@/assets/sport/collection/col4.png';
import art1 from '@/assets/sport/articles/art1.png';
import art2 from '@/assets/sport/articles/art2.png';
import art3 from '@/assets/sport/articles/art3.png';
import insta1 from '@/assets/sport/instagram/insta1.jpg';
import insta2 from '@/assets/sport/instagram/insta2.jpg';
import insta3 from '@/assets/sport/instagram/insta3.jpg';
import insta4 from '@/assets/sport/instagram/insta4.jpg';
import insta5 from '@/assets/sport/instagram/insta5.jpg';
import insta6 from '@/assets/sport/instagram/insta6.jpg';
import email from '@/assets/sport/newsList.png';
import p1 from '@/assets/sport/product/p1.png';
import p2 from '@/assets/sport/product/p2.png';
import p3 from '@/assets/sport/product/p3.png';
import p4 from '@/assets/sport/product/p4.png';
import p5 from '@/assets/sport/product/p5.png';
import p6 from '@/assets/sport/product/p6.png';
import p7 from '@/assets/sport/product/p7.png';
import p8 from '@/assets/sport/product/p8.png';
import p9 from '@/assets/sport/product/p9.png';
import p10 from '@/assets/sport/product/p10.png';
import p11 from '@/assets/sport/product/p11.png';
const products = [
  {
    name: 'Shark-Men’s cabretta white golf glove',
    imgSrc: p1,
    exp: 'Hot',
    rank: 1.5,
    disc: '50',
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Shark-Men’s cabretta white golf glove',
    imgSrc: p2,
    exp: 'New',
    rank: 2,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Shark-Men’s cabretta white golf glove',
    imgSrc: p3,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Shark-Men’s cabretta white golf glove',
    imgSrc: p4,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Shark-Men’s cabretta white golf glove',
    imgSrc: p5,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Shark-Men’s cabretta white golf glove',
    imgSrc: p6,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Shark-Men’s cabretta white golf glove',
    imgSrc: p7,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Shark-Men’s cabretta white golf glove',
    imgSrc: p8,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Shark-Men’s cabretta white golf glove',
    imgSrc: p9,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Shark-Men’s cabretta white golf glove',
    imgSrc: p10,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
  {
    name: 'Shark-Men’s cabretta white golf glove',
    imgSrc: p11,
    exp: 'New',
    rank: 4,
    priceAfter: 400,
    priceBefore: 500,
  },
];
</script>
<template>
  <main class="view3">
    <landingPage
      :src="img1"
      h1="More than <br> just a game. <br> It's a lifestyle."
      p="Whether you're just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint."
      bg-color="#121212"
      color="white"
      btnbg-color="#38cb89"
    >
    </landingPage>
    <div class="container">
      <brandsNames></brandsNames>
      <!-- -------------------- -->
      <sectionHeader
        title="Featured"
        :total-desc="[{ view: 'none' }]"
        :total-link="[{ view: 'none' }]"
      >
      </sectionHeader>
      <ElsSlider :products="products" btnbg-color="#38cb89"></ElsSlider>
      <!-- -------------------- -->
      <sectionHeader
        title="Shop by Categories"
        :total-desc="[{ view: 'none' }]"
        :total-link="[{ view: 'none' }]"
      >
      </sectionHeader>
      <div class="categories">
        <sectionCard title="Golf Clubs" :total-link="[{ view: 'none' }]" :src="cat1"> </sectionCard>
        <sectionCard title="Golf Balls" :total-link="[{ view: 'none' }]" :src="cat2"> </sectionCard>
        <sectionCard title="Golf Bags" :total-link="[{ view: 'none' }]" :src="cat3"> </sectionCard>
        <sectionCard title="Clothing & Rainwear" :total-link="[{ view: 'none' }]" :src="cat4">
        </sectionCard>
        <sectionCard title="Footwear" :total-link="[{ view: 'none' }]" :src="cat5"> </sectionCard>
        <sectionCard title="Accessories" :total-link="[{ view: 'none' }]" :src="cat6">
        </sectionCard>
      </div>
    </div>
    <promotionSection
      :src="promot"
      txt-bg-color="#121212"
      color="white"
      :year="2025"
      month="May"
      :day="30"
      :hour="23"
      :minutes="59"
      :secounds="59"
      btnbg-color="#38cb89"
      :arr="[
        {
          h3: 'LIMITED EDITION',
          h1: 'Hurry up! 30% OFF',
          p: 'Find clubs that are right for your game',
        },
      ]"
    >
    </promotionSection>
    <!-- -------------------- -->
    <div class="container">
      <sectionHeader
        title="Shop Collection"
        :total-desc="[{ text: 'Collections', view: 'block' }]"
        :total-link="[{ view: 'none' }]"
      >
      </sectionHeader>
      <div class="categories">
        <sectionCard
          title="Juniors Set"
          :total-link="[{ text: 'Collections', view: 'block' }]"
          :src="col1"
        >
        </sectionCard>
        <sectionCard
          title="Men’s Set"
          :total-link="[{ text: 'Collections', view: 'block' }]"
          :src="col2"
        >
        </sectionCard>
        <sectionCard
          title="Women’s Set"
          :total-link="[{ text: 'Collections', view: 'block' }]"
          :src="col3"
        >
        </sectionCard>
        <sectionCard
          title="Kids Set"
          :total-link="[{ text: 'Collections', view: 'block' }]"
          :src="col4"
        >
        </sectionCard>
      </div>
      <!-- -------------------- -->
      <sectionHeader
        title="Latest Articles"
        :total-desc="[{ view: 'none' }]"
        :total-link="[{ text: 'View More', view: 'block' }]"
      >
      </sectionHeader>
      <div class="categories articles">
        <sectionCard
          title="Juniors Set"
          :total-link="[{ text: 'Collections', view: 'block' }]"
          :src="art1"
        >
        </sectionCard>
        <sectionCard
          title="Men’s Set"
          :total-link="[{ text: 'Collections', view: 'block' }]"
          :src="art2"
        >
        </sectionCard>
        <sectionCard
          title="Women’s Set"
          :total-link="[{ text: 'Collections', view: 'block' }]"
          :src="art3"
        >
        </sectionCard>
      </div>
      <!-- -------------------- -->
    </div>
    <sectionFive class="newsList" :src="email" color="white"></sectionFive>
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
    <div class="container">
      <div class="categories instagram">
        <sectionCard hiddeng-view="none" :src="insta1"></sectionCard>
        <sectionCard hiddeng-view="none" :src="insta2"></sectionCard>
        <sectionCard hiddeng-view="none" :src="insta3"></sectionCard>
        <sectionCard hiddeng-view="none" :src="insta4"></sectionCard>
        <sectionCard hiddeng-view="none" :src="insta5"></sectionCard>
        <sectionCard hiddeng-view="none" :src="insta6"></sectionCard>
      </div>
    </div>
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
    sectionFive,
    footerSection,
  },
};
</script>

<style>
.view3 {
  box-sizing: border-box;
}

.view3 .landing {
  padding-top: 0;
  padding-bottom: 50px;
}

@media (max-width: 776px) {
  .view3 .landing {
    flex-direction: column-reverse;
  }

  .view3 .landing h1 {
    margin: auto;
  }
}

.view3 .categories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(335px, 1fr));
}

.view3 .categories .card {
  margin: 20px;
  background-color: #f3f5f7;
  position: relative;
  min-height: 300px;
  min-width: 300px;
}

.view3 .categories .heading {
  width: 100%;
  height: 100%;
  text-align: start;
  padding: 10px;
  color: black;
  z-index: 2;
  margin-left: 20px;
}

.view3 .categories .heading h2 {
  text-align: start;
  justify-content: start;
}

.view3 .categories .heading > .link {
  justify-content: start;
  width: fit-content;
  margin-left: 10px;
}

.view3 .categories .card .img {
  padding: 0;
}

.view3 .categories .card .img img {
  border-radius: 10px;
  max-width: 80%;
}

.view3 .articles .card .heading {
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

.view3 .articles .card .heading a {
  border-color: white;
}

.view3 .articles .card .img {
  width: 100%;
  height: 100%;
}

.view3 .articles .card .img img {
  max-width: 100%;
  height: 100%;
}

.view3 .newsList {
  color: white;
}

.view3 .newsList .center {
  background-color: transparent;
  border-color: white;
}

.view3 .newsList input,
.view3 .newsList button {
  background-color: transparent;
  color: white;
}

.view3 .instagram .card .img {
  height: 100%;
}

.view3 .instagram .card .img img {
  max-width: 100%;
  height: 100%;
}
</style>
