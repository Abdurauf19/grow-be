<template>
  <div class="container-seo">
    <img
      src="../photos/SeoImg.png"
      alt="SeoImg"
      class="main-seo__img w-[750px] h-[750px]"
    >
    <div class="main-seo__content">
      <h3 class="seo-content__title text-[45px] w-[557px] leading-[53px] pb-[19px]">
        You may ask what SEO & why do you need it?
      </h3>
      <p class="seo-content__text text-[16px] w-[570px] leading-[24px] pb-[86px]">
        Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary.
      </p>
      <div class="seo-content__cards flex flex-col gap-[50px]">
        <div
          v-for="(item, i) in data"
          :key="i"
          class="seo-content__card flex items-center justify-center gap-[29px]"
        >
          <a
            href="#"
            class="content-card__img flex justify-center items-center"
          ><svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.6667 20C36.6667 17.8113 36.2356 15.644 35.398 13.6219C34.5604 11.5998 33.3328 9.76251 31.7851 8.21487C30.2375 6.66722 28.4002 5.43957 26.3781 4.60199C24.356 3.76441 22.1887 3.33331 20 3.33331C15.5797 3.33331 11.3405 5.08926 8.21489 8.21487C5.08928 11.3405 3.33334 15.5797 3.33334 20C3.33334 24.4203 5.08928 28.6595 8.21489 31.7851C11.3405 34.9107 15.5797 36.6666 20 36.6666C24.4203 36.6666 28.6595 34.9107 31.7851 31.7851C34.9107 28.6595 36.6667 24.4203 36.6667 20ZM33.2167 18.3333H28.3333C28.0585 14.4136 26.7154 10.6439 24.45 7.43331C26.7774 8.25992 28.8295 9.71676 30.3775 11.6414C31.9254 13.566 32.9083 15.8828 33.2167 18.3333ZM15.1333 21.6666H25C24.5735 25.7843 22.8184 29.6513 20 32.6833C17.1835 29.6639 15.4687 25.7821 15.1333 21.6666ZM15.1333 18.3333C15.5215 14.2364 17.2293 10.3762 20 7.33331C22.8412 10.3435 24.6002 14.2134 25 18.3333H15.1333ZM15.7333 7.38331C13.4559 10.6117 12.0913 14.3945 11.7833 18.3333H6.78334C7.09818 15.8525 8.10435 13.5102 9.68695 11.5739C11.2695 9.63768 13.3648 8.18553 15.7333 7.38331ZM6.78334 21.6666H11.7833C12.0578 25.6021 13.4131 29.3854 15.7 32.6C13.34 31.7938 11.2533 30.342 9.67712 28.4093C8.10092 26.4766 7.09836 24.1406 6.78334 21.6666ZM24.3667 32.5833C26.6473 29.3678 28.0178 25.5962 28.3333 21.6666H33.25C32.9348 24.1337 31.9359 26.4635 30.3661 28.3926C28.7963 30.3217 26.7182 31.7733 24.3667 32.5833Z"
              fill="#F25822"
            /></svg>
          </a>
          <div class="content-card__content">
            <h3 class="card-content__titlee text-[20px] landing-[30px] pt-[24px]">
              {{ item.title }}
            </h3>
            <p class="card-content__textt text-[15px] landing-[22px] w-[362px] pt-[8px] pb-[26px]">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          title: 'Social Media Marketing',
          text: 'Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.'
        },
        {
          title: 'Email Marketing',
          text: 'Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.'
        },
        {
          title: 'SEO Optimization',
          text: 'Business applications through revolutionary catalysts for chang the Seamlessly underwhelm dures.'
        },
      ]
    }
  }
}
</script>