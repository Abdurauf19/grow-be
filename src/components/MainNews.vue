<template>
  <div class="container-news">
    <div class="main-news__content">
      <h3 class="news-content__title pb-[5px] pt-[86px] text-[45px] text-[#000000] text-center font-bold">Our Latest News </h3>
      <p class="news-content__text w-[569px] text-[16px] text-[#666666] landing-[24px] pb-[55px] text-center">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Suspendisse ante arcu, consectetur id nisl eget.</p>
    </div>
     <Splide :options="options" ca>
      <SplideSlide v-for="(item, index) in data" :key="index" class="flex justify-center items-center mb-[50px]">
        <img src="../photos/newsSlayd.png" alt="" class="pr-[30px]">
       <news-slaide :cardTitle="item.cardTitle" :cardText="item.cardText" :iconTitle="item.iconTitle" :cardBtn="item.cardBtn"/>
      </SplideSlide>
    </Splide>
   
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import NewsSlaide from '../components/card/NewsSlaide.vue'
export default {
 components: {
    Splide,
    SplideSlide,
    NewsSlaide
  },

  data () {
    return {
       options: {
        gap: "20px",
        perPage: 1,
        perMove: 2,
        arrows: true,
        pagination: true,
         autoplay: true,
        type: "loop",
        breakpoints: {
          1120: {
            perPage: 3,
            perMove: 1,
          },
          860: {
            perPage: 2,
            perMove: 1,
          },
          600: {
            perPage: 1,
            perMove: 1,
          },
        },
      },

      data: [
        {
          cardTitle: 'How to become a new digital marketing idea?',
          iconTitle: 'By Admin',
          cardText: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.',
          cardBtn: 'Read More...'
        },
        
      ]
    }
  }
}
</script>