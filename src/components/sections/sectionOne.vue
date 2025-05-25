<template>
    <div class="section1">
        <sectionHeader title="Simply Unique\<br>Simply Better." :total-desc="[{
            text: ' elegant is a gift & decorations store based in HCMC, Vietnam. Est since2019.',
            view: 'block'
        }]" :total-link="[{ view: 'none' }]">
        </sectionHeader>
        <div class="categories">
            <sectionCard title="Living Room" :total-link="[{ text: 'See More', view: 'block' }]" :src="livingroom">
            </sectionCard>
            <sectionCard title="Main Room" :total-link="[{ text: 'See More', view: 'block' }]" :src="mainroom">
            </sectionCard>
            <sectionCard title="Bed Room" :total-link="[{ text: 'See More', view: 'block' }]" :src="bedroom">
            </sectionCard>
            <sectionCard title="Kitchen" :total-link="[{ text: 'See More', view: 'block' }]" :src="kitchen">
            </sectionCard>
        </div>
    </div>
</template>
<script>
import sectionHeader from '../general comps/sectionHeader.vue';
import livingroom from '@/assets/sections cards/livingroom.jpg'
import kitchen from '@/assets/sections cards/kitchen.jpg'
import mainroom from '@/assets/sections cards/mainroom.jpg'
import bedroom from '@/assets/sections cards/bedroom.jpg'
import main from '@/assets/sections cards/main.jpg'
import sectionCard from '@/components/child comps/sectionCardVue.vue'
export default {
    data() {
        return {
            livingroom,
            kitchen,
            mainroom,
            bedroom,
            main
        };
    },
    components: {
        sectionHeader,
        sectionCard,
    }
}
</script>
<style>
.section1 .categories {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.section1 .categories .card {
    margin: 20px 10px;
    position: relative;
}

.section1 .card .heading {
    width: 50%;
    text-align: start;
    padding: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    z-index: 2;
}

.section1 .card .img {
    padding: 0;
}

.section1 .card .img img {
    border-radius: 10px;
}

.section1 .card .link .icon {
    font-size: 20px;
    margin: 0 5px;
    margin-top: 6px;
}

.section1 .card h2 {
    width: fit-content;
    text-align: center;
    margin: 0 10px;
    padding: 10px 0;
    border-radius: 15px;
}

.section1 .card .link {
    font-weight: bold;
    width: fit-content;
    border-color: white;
    margin: 0 10px;

}

.section1 .categories .card p {
    display: none;
}
</style>