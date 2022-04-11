<template>
  <header class="containerr">
    <headerNav/>
    <headerContent/>
    <headerLogo/>
  </header>
  <main class="main">
    <mainSolution/>
    <mainCard/>
    <mainBox/>
    <mainSeo />
    <mainNumber />
    <mainForm/>
    <mainPlan/>
    <mainTeam/>
    <mainComment/>
    <mainNews/>
  </main>
  <footer class="footer">
    <footerLink />
  </footer>
</template>

<script>
// Header
import headerNav from "../components/HeaderNav.vue";
import headerContent from "../components/HeaderContent.vue";
import headerLogo from "../components/HeaderLogo.vue";
// Main
import mainSolution from "../components/MainSolution.vue";
import mainCard from "../components/MainCard.vue";
import mainBox from "../components/MainBox.vue";
import mainSeo from "../components/MainSeo.vue";
import mainNumber from "../components/MainNumber.vue";
import mainForm from "../components/MainForm.vue";
import mainPlan from "../components/MainPlan.vue";
import mainTeam from "../components/MainTeam.vue";
import mainComment from "../components/MainComment.vue";
import mainNews from "../components/MainNews.vue";
// footer
import footerLink from "../components/footerLink.vue";

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
    mainPlan,
    mainTeam,
    mainComment,
    mainNews,
    footerLink,
  },
  data() {
    return {};
  },
};
</script>
