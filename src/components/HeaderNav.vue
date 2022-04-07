<template>
  <div class="header-container">
    <nav class="header-nav">
      <a href="#" class="header-logo"><img src="../photos/Logo.png" alt="Logo"></a>
      <ul class="header-nav__list" >
        <li class="header-nav__item" v-for="(item, index) in data" :key="index">
          <a href="#" class="header-nav__link">{{item.links}}</a>
        </li>
        <a href="#" class="header-nav-btn">Get Started</a>
      </ul>
      <div class="header-hamburger" @click="btn = !btn">
      <div class="header-hamburger__line"></div>
      <div class="header-hamburger__line"></div>
      <div class="header-hamburger__line"></div>
    </div>
    </nav>

    <transition>
    <nav class="header-sideBar" v-if="btn">
      <a href="#Home" class="header-logo"><img src="../photos/Logo.png" alt="Logo"></a>
      <ul class="header-sideBar__item" v-for="(item, index) in data" :key="index">
        <li class="header-sideBar__list">
          <a href="#" class="header-sideBar__link">{{item.links}}</a>
        </li>
      </ul>
    </nav>
    </transition>
   </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          links: 'Home'
        },
        {
          links: 'About Us'
        },
        {
          links: 'Services'
        },
        {
          links: 'Features'
        },
        {
          links: 'Team'
        },
        {
          links: 'Blog'
        },
        {
          links: 'Contact'
        }
      ],
      btn: false
    }
  }
}
</script>
