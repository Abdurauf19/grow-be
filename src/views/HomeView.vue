<template>
  <div class="container">
    <headerNav />
    <headerContent/>
    <headerLogo/>
  </div>
  <main class="main">
    <mainSolution/>
    <mainCard/>
    <mainBox/>
  </main>
</template>

<script>
import headerNav from '../components/HeaderNav.vue'
import headerContent from '../components/HeaderContent.vue'
import headerLogo from '../components/headerLogo'
import mainSolution from '../components/mainSolution.vue'
import mainCard from '../components/mainCard.vue'
import mainBox from '../components/mainBox.vue'

export default {
  components: {
    headerNav,
    headerContent,
    headerLogo,
    mainSolution,
    mainCard,
    mainBox
  },
  data () {
    return {
    }
  }
}
</script>
