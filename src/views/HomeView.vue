<template>
  <div class="containerr">
    <headerNav />
    <headerContent/>
    <headerLogo/>
  </div>
  <main class="main">
    <mainSolution/>
    <mainCard/>
    <mainBox/>
    <mainSeo/>
  </main>
</template>

<script>
import headerNav from '../components/HeaderNav.vue'
import headerContent from '../components/HeaderContent.vue'
import headerLogo from '../components/headerLogo'
import mainSolution from '../components/mainSolution.vue'
import mainCard from '../components/mainCard.vue'
import mainBox from '../components/mainBox.vue'
import mainSeo from '../components/MainSeo.vue'

export default {
  components: {
    headerNav,
    headerContent,
    headerLogo,
    mainSolution,
    mainCard,
    mainBox,
    mainSeo
  },
  data () {
    return {
    }
  }
}
</script>
