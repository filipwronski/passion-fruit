<template>
  <div id="app" class="app">
    <div class="app-wrapper">
      <main-header />
      <nuxt />
    </div>
    <main-footer />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import mainHeader from '~/components/header/header.vue'
import mainFooter from '~/components/footer/footer.vue'

@Component({
  components: {
    mainHeader,
    mainFooter
  }
})
export default class Navigation extends Vue {
}
</script>
<style lang="scss">
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url('/assets/font/poppins.ttf') format('ttff'),
}

html {
  font-family: 'Poppins';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 8px;
}

.heading {
  color: #fff;
  letter-spacing: 1px;
  font-size: 24px;
  text-transform: uppercase;
}
.heading-2 {
  color: #625fe5;
  font-size: 24px;
  letter-spacing: 1px;
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 50px;
    background: #625fe5;
    height: 1px;
    bottom: 50px;
  }
}
.heading-3 {
  font-weight: 400;
}
.paragraph {
  display: block;
  font-weight: 400;
  letter-spacing: 1px;
}
.button {
  display: block;
  font-weight: 400;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 20px;
  background: #fff;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: #625fe5;
  margin: 20px auto 0 auto;
  &--dark {
    color: #fff;
    background: #625fe5;
  }
}
@media (max-width: 575.98px) {
  .heading-2 {
    text-align: center;
  }
}

.caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid \9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}

.app {
  position: relative;
  background-image: url("~assets/img/home-bg.jpg");
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
}

.app-wrapper {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto;
}

.app-content {
  padding: 66px;
  &--dark-background {
      background: rgba($color: #000000, $alpha: .4);
  }
}

p {
  font-size: 14px;
  color: #fff;
}

.row {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 100%;;
}

.context-center {
  display: flex;
  align-items: center;
}
</style>
