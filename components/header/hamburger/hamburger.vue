<template>
  <button class="hamburger" @click="toggle()">
    <span
      id="nav-icon1"
      :class="{'open': isMobileMenuVisible}"
    >
      <span></span>
      <span></span>
      <span></span>
    </span>
  </button>
</template>
<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class Hamburger extends Vue {
    @Prop(Boolean) isMobileMenuVisible: Boolean
    toggle () {
      this.$emit('toggleMenu')
    }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.hamburger {
  z-index: 200;
  padding: 10px;
  background: none;
  border: none;
  outline: none;
  display: none;
  @include respond-to(handheld){
    display: block;
    position: relative;
  }
}
#nav-icon1 {
    display: block;
    width: 40px;
    height: 26px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
    span {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        background: $brand-pink;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
        &:nth-child(1) {
            top: 0px;
        }
        &:nth-child(2) {
            top: 12px;
        }
        &:nth-child(3) {
            top: 24px;
        }
    }
    &.open {
        span {
            &:nth-child(1) {
                top: 18px;
                -webkit-transform: rotate(135deg);
                -moz-transform: rotate(135deg);
                -o-transform: rotate(135deg);
                transform: rotate(135deg);
            }
            &:nth-child(2) {
                opacity: 0;
                left: -60px;
            }
            &:nth-child(3) {
                top: 18px;
                -webkit-transform: rotate(-135deg);
                -moz-transform: rotate(-135deg);
                -o-transform: rotate(-135deg);
                transform: rotate(-135deg);
            }
        }
    }

}
</style>
