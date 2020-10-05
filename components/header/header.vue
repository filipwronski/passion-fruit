<template>
  <header class="main-header">
    <div class="main-header__wrapper">
      <div class="logo">
        <router-link
          :to="{path: '/'}"
          title="Strona główna"
        >
          <img class="logo__img" src="~/assets/img/logo-white.svg" />
        </router-link>
      </div>
      <navigation />
    </div>
  </header>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import navigation from '~/components/header/navigation/navigation.vue'

@Component({
  components: {
    navigation
  }
})
export default class MainHeader extends Vue {
}
</script>

<style scoped lang="scss">
.main-header {
  margin-top: 50px;
  padding-left: 50px;
  @include respond-to(handheld){
    margin-top: 0;
    padding-left: 0;
  }
  &__wrapper {
    width: 200px;
    position: fixed;
    @include respond-to(handheld){
      background: #000;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      z-index: 100;
    }
  }
}
.logo {
  color: #fff;
  @include respond-to(handheld){
    display: inline-block;
    width: 70px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  &__img {
    max-width: 130px;
  }
}
</style>
