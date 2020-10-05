<template>
  <nav class="navigation">
    <hamburger
      :is-mobile-menu-visible="isMobileMenuVisible"
      @toggleMenu="toggleMobileMenu()"
    />
    <ul
      class="navigation__list"
      :class="{'navigation__list--visible-mobile': isMobileMenuVisible}"
    >
      <li class="navigation__item" @toggleMenu="toggleMobileMenu()">
        <router-link
          :to="{path: '/o-mnie'}"
          title="O mnie"
          @click.native="routerLeave()"
        >
          O mnie
        </router-link>
      </li>
      <li
        class="navigation__item navigation__submenu"
        :class="{ 'navigation__submenu--active': isSubmenuActive }"
      >
        <span @click="toggleSubmenu()">
          Oferta <span class="caret"></span>
        </span>
        <ul class="navigation__submenu-list">
          <li class="navigation__item">
            <router-link
              :to="{path: '/oprawa-muzyczna-slubow'}"
              title="Oprawa muzyczna ślubów"
              @click.native="routerLeave()"
            >
              Oprawa muzyczna ślubów
            </router-link>
          </li>
          <li class="navigation__item">
            <router-link
              :to="{path: '/dla-firm'}"
              title="Dla firm"
              @click.native="routerLeave()"
            >
              Dla firm
            </router-link>
          </li>
          <li class="navigation__item">
            <router-link
              :to="{path: '/dla-kazdego'}"
              title="Dla każdego"
              @click.native="routerLeave()"
            >
              Dla każdego
            </router-link>
          </li>
        </ul>
      </li>
      <li class="navigation__item">
        <router-link
          :to="{path: '/audio'}"
          title="Audio"
          @click.native="routerLeave()"
        >
          Audio
        </router-link>
      </li>
      <!-- <li class="navigation__item">
        <router-link
          :to="{path: '/video'}"
          title="Video"
        >
          Video
        </router-link>
      </li> -->
      <li class="navigation__item">
        <router-link
          :to="{path: '/galeria'}"
          title="Galeria"
          @click.native="routerLeave()"
        >
          Galeria
        </router-link>
      </li>
      <!-- <li class="navigation__item">
        <router-link
          :to="{path: '/blog'}"
          title="Blog"
        >
          Blog
        </router-link>
      </li> -->
      <li class="navigation__item">
        <router-link
          :to="{path: '/kontakt'}"
          title="Kontakt"
          @click.native="routerLeave()"
        >
          Kontakt
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Hamburger from '~/components/header/hamburger/hamburger.vue'
@Component({
  components: {
    Hamburger
  }
})
export default class Navigation extends Vue {
  isMobileMenuVisible = false
  isSubmenuActive: boolean = false
  toggleMobileMenu (): void {
    this.isMobileMenuVisible = !this.isMobileMenuVisible
  }

  toggleSubmenu (): void {
    this.isSubmenuActive = !this.isSubmenuActive
  }

  routerLeave () {
    this.isMobileMenuVisible = false
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  margin-top: 50px;
  color: $brand-pink;
  @include respond-to(handheld){
      margin-top: 0;
      display: inline-block;
  }
  &__item {
    padding: 5px;
    text-transform: uppercase;
    font-size: 14px;
    a {
      display: inline-block;
      position: relative;
      &:after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        background: #fff;
        transition: all .3s;
      }
      &:hover {
        &:after {
          width: 100%;
        }
      }
      &.nuxt-link-active {
        &:after {
          width: 100%;
        }
      }
    }
  }
  &__list {
    list-style: none;
    padding-left: 0;
    display: inline-block;
    @include respond-to(handheld){
      display: none;
    }
    &--visible-mobile {
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      background: #000;
      z-index: 100;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
    }
  }
  a {
    color: $brand-pink;
    text-decoration: none;
  }
  &__submenu {
    cursor: pointer;
    .caret {
      transition: all .3s;
    }
    &--active {
      .caret {
        transform: rotate(180deg)
      }
      .navigation {
        &__submenu-list {
          visibility: visible;
          opacity: 1;
          height: 110px;
          padding-left: 15px;
        }
      }
    }
  }
  &__submenu-list {
    list-style: none;
    height: 0;
    visibility: hidden;
    opacity: 0;
    transition: all .3s;
  }
}
</style>
