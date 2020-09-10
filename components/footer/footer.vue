<template>
  <footer class="footer">
    <!-- <div class="container footer__wrapper">
      <div class="footer__first">
      </div>
      <div class="footer__second">
        <p class="footer__text">
          Designed and created by <a href="https://vue-js.pl" alt="Filip Wroński">Filip Wroński</a>.
        </p>
      </div>
    </div> -->
  </footer>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component({
  serverCacheKey: () => 'footer'
})
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
.footer {
  &__second {
    text-align: center;
  }
  &__wrapper {
    padding: 20px 0;
  }
  &__text {
    font-size: 12px;
    a {
      color: #625fe5;
    }
  }
}
</style>
