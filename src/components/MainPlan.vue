<template >
  <div class="container-plan">
    <div class="main-plans-content">
      <h3 class="plan-content__title text-[45px] landing-[68px] font-bold">Our Plans</h3>
      <p class="plan-content__text text-[16px] landing-[24px] pb-[56px] ">Choose the right SEO for you</p>
    </div>
    <div class="main-plan__cards flex gap-[30px] mb-[130px]">
      <div class="main-plan__card flex flex-col items-center justify-center" v-for="(item, i) in data" :key="i">
        <h3 class="plan-card__title text-[#000000] text-[24px] landing-[36px] pb-6 font-medium" >{{item.title}}</h3>
        <h3 class="plan-card__cost text-[75px] text-[#000000] font-medium"><sup class="text-[18px] top-[-45px] pr-[6px] text-[#000]">$</sup>{{item.cost}}<sub class="text-[18px] text-[#000]">/mounth</sub></h3>
        <p class="plan-card__com text-[16px] landing-[40px] text-[#666666] pt-[13px] font-medium" >{{item.commet}}</p>
        <p class="plan-card__com text-[16px] landing-[40px] text-[#666666] pt-[13px] font-medium" >{{item.commet2}}</p>
        <p class="plan-card__com text-[16px] landing-[40px] text-[#666666] pt-[13px] font-medium" >{{item.commet3}}</p>
        <p class="plan-card__com text-[16px] landing-[40px] text-[#666666] pt-[13px] font-medium" >{{item.commet4}}</p>
        <a href="#" class="plan-card__btn text-[13px]">{{item.btn}}</a>
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
          title: 'Plus',
          cost: '30',
          commet: '50GB Bandwidth',
          commet2: 'Business & Financ Analysing',
          commet3: '24 Hour Support',
          commet4: 'Customer Managemet',
          btn: 'Get Started'
        },
        {
          title: 'Beginer',
          cost: '55',
          commet: '50GB Bandwidth',
          commet2: 'Business & Financ Analysing',
          commet3: '24 Hour Support',
          commet4: 'Customer Managemet',
          btn: 'Get Started'
        },
        {
          title: 'Advanced',
          cost: '129',
          commet: '50GB Bandwidth',
          commet2: 'Business & Financ Analysing',
          commet3: '24 Hour Support',
          commet4: 'Customer Managemet',
          btn: 'Get Started'
        },
      ],
    }
  }
}
</script>


