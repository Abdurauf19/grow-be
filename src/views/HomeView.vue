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
    <mainNumber/>
    <mainForm/>
  </main>
</template>

<script>
import headerNav from '../components/HeaderNav.vue'
import headerContent from '../components/HeaderContent.vue'
import headerLogo from '../components/headerLogo.vue'
import mainSolution from '../components/mainSolution.vue'
import mainCard from '../components/mainCard.vue'
import mainBox from '../components/mainBox.vue'
import mainSeo from '../components/MainSeo.vue'
import mainNumber from '../components/MainNumber.vue'
import mainForm from '../components/mainForm.vue'

export default {
  components: {
    headerNav,
    headerContent,
    headerLogo,
    mainSolution,
    mainCard,
    mainBox,
    mainSeo,
    mainNumber,
    mainForm
  },
  data () {
    return {
    }
  }
}
</script>
