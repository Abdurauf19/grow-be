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
    <mainPlan/>
  </main>
</template>

<script>
import headerNav from '../components/HeaderNav.vue'
import headerContent from '../components/HeaderContent.vue'
import headerLogo from '../components/HeaderLogo.vue'
import mainSolution from '../components/MainSolution.vue'
import mainCard from '../components/MainCard.vue'
import mainBox from '../components/MainBox.vue'
import mainSeo from '../components/MainSeo.vue'
import mainNumber from '../components/MainNumber.vue'
import mainForm from '../components/MainForm.vue'
import mainPlan from '../components/MainPlan.vue'

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
    mainForm,
    mainPlan
  },
  data () {
    return {
    }
  }
}
</script>
