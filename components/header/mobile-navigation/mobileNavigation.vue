<template>
  <div class="mobile-navigation">
    <div class="mobile-navigation__button-wrapper">
      <button
        aria-label="Open menu"
        @click="$emit('toggleMenu')"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div
      v-show="isMobileMenuOpen"
      class="mobile-navigation__menu-wrapper"
    >
      <nav class="mobile-navigation__navigation">
        <ul>
          <li v-for="navLink in navList" :key="navLink.url">
            <a
              v-scroll-to="{el: navLink.url}"
              href="#"
              :title="navLink.title"
              @click="$emit('toggleMenu')"
            >
              {{ navLink.title }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

interface NavigationLink {
  title: string;
  url: string;
  icon?: string;
}
@Component({})
export default class Navigation extends Vue {
  @Prop({
    type: Array,
    required: true
  }) navList: NavigationLink[];
  @Prop({
    type: Boolean,
    required: true
  }) isMobileMenuOpen: boolean;
}
</script>

<style lang="scss" scoped>
.mobile-navigation {
  display: none;
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
  span {
    display: block;
    height: 2px;
    width: 30px;
    background: #000;
    margin: 6px 0;
  }
  &__button-wrapper {
    display: flex;
    justify-content: flex-end;
  }
  &__menu-wrapper {
    position: absolute;
    width: 100%;
    left: 0;
    top: 55px;
    height: calc(100vh - 55px);
    background: #f1f1ff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 55px;
  }
  &__navigation {
    ul {
      list-style: none;
      padding: 0;
      li {
        a {
          font-size: 20px;
          text-align: center;
          text-decoration: none;
          color: #625fe5;
          display: inline-block;
          margin: 10px;
        }
      }
    }
  }
}

@media (max-width: 575.98px) {
  .mobile-navigation  {
    display: block;
  }
}
</style>
