<template>
  <div class="border-[2px] border-[#EEEEEE] mb-[55px] bt-[55px]">
    <div class="main-comment__card flex flex-col items-center justify-center">
      <p
        class="text-[#888888] text-center text-[16px] landing-[24px] pb-[26px]"
      >
        {{ title }}
      </p>
      <img
        class=" w-[55px] h-[55px] rounded-[50px]"
        src="https://picsum.photos/500/500"
        alt=""
      >
      <h3 class="text-center text-[13px] font-bold text-[#000000] pt-[10px]">
        {{ name }}
      </h3>
      <h3 class="text-center text-[13px] text-[#888888] pb-[27px]">
        {{ job }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    job: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: "",
    },
  },
};
</script>
