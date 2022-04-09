<template>
  <div class="pb-[100px]">
    <div
      class="main-comment__content flex flex-col items-center justify-center"
    >
      <h2
        class="comment-content__title pt-[93px] text-[#000000] text-[45px] landing-[53px] font-bold"
      >
        Our Clients Say
      </h2>
      <p
        class="comment-content__text w-[459px] text-center text-[16px] landing-[24px] text-[#666666] pt-[19px] pb-[55px]"
      >
        Our in - house search engine experts deliver profitable Google, Bing,
        Yahoo Ranking.
      </p>
    </div>
    <Splide :options="options">
      <SplideSlide v-for="(item, index) in data" :key="index">
        <CommentCard :title="item.title" :name="item.name" :job="item.job" />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import CommentCard from "../components/card/CommentCard.vue";

export default {
  components: {
    Splide,
    SplideSlide,
    CommentCard,
  },

  data() {
    return {
      options: {
        gap: "20px",
        perPage: 3,
        perMove: 1,
        arrows: false,
        pagination: true,
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
          title:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint  cupiditate non provident.",
          name: "Rabith Halson",
          job: "Web Design",
        },
        {
          title:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint  cupiditate non provident.",
          name: "Selena Roy",
          job: "UI Designer",
        },
      ],
    };
  },
};
</script>
