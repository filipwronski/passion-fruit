<template>
  <header
    :class="{'main-header--fixed': isNavbarFixed}"
    class="main-header"
  >
    <div class="main-header__wrapper container">
      <logo @toggleMenu="isMobileMenuOpen = false" />
      <navigation
        :nav-list="navList"
      />
      <mobile-navigation
        :is-mobile-menu-open="isMobileMenuOpen"
        :nav-list="navList"
        @toggleMenu="toggleMenu"
      />
    </div>
  </header>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import navigation from '~/components/header/navigation/navigation.vue'
import mobileNavigation from '~/components/header/mobile-navigation/mobileNavigation.vue'
import logo from '~/components/header/logo/logo.vue'

@Component({
  serverCacheKey: () => 'header',
  components: {
    navigation,
    mobileNavigation,
    logo
  }
})
export default class MainHeader extends Vue {
  navList = [
    {
      title: 'About',
      url: '#about'
    },
    {
      title: 'Skills',
      url: '#skills'
    },
    {
      title: 'Experience',
      url: '#experience'
    },
    {
      title: 'Contact',
      url: '#contact'
    }
  ]

  isMobileMenuOpen = false;

  isNavbarFixed = false;

  toggleMenu () {
    this.isMobileMenuOpen = !this.isMobileMenuOpen
  }

  onScroll () {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    if (currentScrollPosition < 0 || currentScrollPosition > 400) {
      return
    }
    this.isNavbarFixed = currentScrollPosition > 200
  }

  mounted () {
    window.addEventListener('scroll', this.onScroll)
  }
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style scoped lang="scss">
.main-header {
  top: 0;
  left: 0;
  width: 100%;
  background: #f1f1ff;
  position: fixed;
  z-index: $z-index100;
  transition: all .4s;
  &__wrapper {
    display: grid;
    grid-template-columns: 28% 72%;
    align-items: center;
  }
  &--fixed {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);;
  }
}
@media (max-width: 575.98px) {
  .main-header {
    &__wrapper {
      grid-template-columns: 50% 50%;
    }
  }
}
</style>
