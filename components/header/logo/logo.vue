<template>
  <div class="logo">
    <a
      v-scroll-to="{el: '#home'}"
      class="logo__text"
      href="#"
      @click="$emit('toggleMenu')"
    >
      <span class="logo__text--accent">F</span>ilip
      <span class="logo__text--accent">W</span>roński
    </a>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
@Component({
  serverCacheKey: () => 'logo'
})
export default class Logo extends Vue {}
</script>

<style lang="scss" scoped>
.logo {
  display: inline-block;
  margin: 10px;
  position: relative;
  &__text {
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    text-decoration: none;
    top: 4px;
    margin-left: 4px;
    line-height: 35px;
    background: #f1f1ff;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000;
    &--accent {
      color: #625fe5;
    }
    &:after {
      position: absolute;
      top: calc(50% - 12px);
      left: 14px;
      width: 51px;
      height: 24px;
      content: '';
      background: transparent;
      border: #625fe5 solid 1px;
      z-index: 0;
    }
  }
}
</style>
