<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <router-link
          :to="{path: '/o-mnie'}"
          title="O mnie"
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
            >
              Oprawa muzyczna ślubów
            </router-link>
          </li>
          <li class="navigation__item">
            <router-link
              :to="{path: '/dla-firm'}"
              title="Dla firm"
            >
              Dla firm
            </router-link>
          </li>
          <li class="navigation__item">
            <router-link
              :to="{path: '/dla-kazdego'}"
              title="Dla każdego"
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
        >
          Audio
        </router-link>
      </li>
      <li class="navigation__item">
        <router-link
          :to="{path: '/video'}"
          title="Video"
        >
          Video
        </router-link>
      </li>
      <li class="navigation__item">
        <router-link
          :to="{path: '/galeria'}"
          title="Galeria"
        >
          Galeria
        </router-link>
      </li>
      <li class="navigation__item">
        <router-link
          :to="{path: '/blog'}"
          title="Blog"
        >
          Blog
        </router-link>
      </li>
      <li class="navigation__item">
        <router-link
          :to="{path: '/kontakt'}"
          title="Kontakt"
        >
          Kontakt
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Navigation extends Vue {
  isSubmenuActive: boolean = false
  toggleSubmenu (): void {
    this.isSubmenuActive = !this.isSubmenuActive
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  margin-top: 100px;
  color: $brand-pink;
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
          height: 93px;
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
