<template>
  <main>
    <div class="container">
      <landingPage class="landing"></landingPage>
      <sectionOne class="section1"></sectionOne>
      <sectionTwo></sectionTwo>
      <generalRules></generalRules>
    </div>
    <sectionThree></sectionThree>
    <div class="container">
      <sectionFour></sectionFour>
    </div>
    <sectionFive :src="email" color="black"></sectionFive>
    <sectionSix></sectionSix>
  </main>
</template>

<script>
import landingPage from '@/components/sections/landingPage.vue';
import sectionOne from '@/components/sections/sectionOne.vue';
import sectionTwo from '@/components/sections/sectionTwo.vue';
import generalRules from '@/components/child comps/generalRules.vue';
import sectionThree from '@/components/sections/sectionThree.vue';
import sectionFour from '@/components/sections/sectionFour.vue';
import sectionFive from '@/components/sections/sectionFive.vue';
import sectionSix from '@/components/sections/sectionSix.vue';
import email from '@/assets/output/email.png';
export default {
  data() {
    return {
      email,
    };
  },
  components: {
    landingPage,
    sectionOne,
    sectionTwo,
    generalRules,
    sectionThree,
    sectionFour,
    sectionFive,
    sectionSix,
  },
};
</script>

<style scoped>
.landing {
  margin-top: -50px;
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
