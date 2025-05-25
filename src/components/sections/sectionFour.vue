<script setup>
import art1 from '@/assets/output/articles1.png'
import art2 from '@/assets/output/articles2.png'
import art3 from '@/assets/output/articles3.png'
</script>

<template>
    <section>
        <sectionHeader title="Articles" :totalLink="[{ text: 'See More', view: 'block' }]"></sectionHeader>
        <div class="boxes">
            <sectionCardVue :src="art1" desc="7 ways to decor your home" title-view="none" :link-order="3">
            </sectionCardVue>
            <sectionCardVue :src="art2" desc="Kitchen organization" title-view="none" :link-order="3">
            </sectionCardVue>
            <sectionCardVue :src="art3" desc="Decor your bedroom" title-view="none" :link-order="3">
            </sectionCardVue>
        </div>
    </section>
</template>
<script>
import sectionHeader from '../general comps/sectionHeader.vue';
import sectionCardVue from '../child comps/sectionCardVue.vue';

export default {
    components: {
        sectionCardVue,
        sectionHeader
    }
}
</script>
<style>
.container {
    width: calc(100vw - 200px);
    margin: auto;
    padding: 50px 0;
}

.boxes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
}

.boxes .card {
    margin: 0 10px;
}

.boxes .card .img img {
    border-radius: 10px;
}

.boxes .card .heading {
    order: 2;
    margin-bottom: 10px;
}

.boxes .card .desc {
    margin: 10px 0;
    font-size: 18px;
}

@media (max-width: 990px) {
    .boxes {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
}

@media (max-width: 776px) {
    .container {
        width: calc(100vw - 50px);
        margin: auto;
    }
}
</style>