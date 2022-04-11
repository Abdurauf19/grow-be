<template>
  <div class="container-number">
    <div class="main-number flex items-center justify-center gap-[103px]">
      <div
        v-for="(item, i) in data"
        :key="i"
        class="main-number__content flex items-center"
      >
        <div class="flex items-center justify-center flex-col pr-[50px]">
          <h3 class="number-content__num text-[70px] leanding-[105px]">
            {{ item.num }}
          </h3>
          <h4 class="naumber-content__text text-[18px] leanding-[27px]">
            {{ item.text }}
          </h4>
        </div>
        <span class="number-content__color"><svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ><circle
          cx="7.5"
          cy="7.5"
          r="7.5"
          fill="#F3602D"
        /></svg>
        </span>
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
          num: '95',
          text: 'Happy Clients',
        },
        {
          num: '115',
          text: 'Project Done',
        },
        {
          num: '8+',
          text: 'Years Of Experince',
        },
        {
          num: '12',
          text: 'National Awards',
        },
      ]
    }
  }
}
</script>