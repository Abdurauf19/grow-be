<template>
  <div class="cards-container">
    <div class="main-cards__content">
      <h3 class="cards-content__title">Why You Should Choose Us.</h3>
      <p class="cards-content__text">
        Distinctively exploit optimal alignments for intuitive bandwidth.
        Quickly coordinate e-business applications through revolutionary
        catalysts.
      </p>
    </div>
    <div class="main-cards">
      <div class="main-card" v-for="(item, i) in data" :key="i">
        <a href="#"
          ><img
            src="../photos/cards/cardimg1.png"
            alt="cardimg"
            class="main-card__img"
        /></a>
        <div class="main-card-content">
          <h3 class="main-card__title">{{ item.cardTitle }}</h3>
          <p class="main-card__text">{{ item.cardText }}</p>
          <a href="#" class="main-card__btn"
            >{{ item.cardBtn }}
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9L5 5L1 1"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          cardTitle: "Keyword Research",
          cardText:
            "Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.",
          cardBtn: "Learn More",
        },
        {
          cardTitle: "Seo Optimazadion",
          cardText:
            "Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.",
          cardBtn: "Learn More",
        },
        {
          cardTitle: "Social Marketing",
          cardText:
            "Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.",
          cardBtn: "Learn More",
        },
      ],
    };
  },
};
</script>
