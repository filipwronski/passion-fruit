<template>
  <header class="main-header">
    <div class="logo">
      <router-link
        :to="{path: '/'}"
        title="Strona główna"
      >
        PASSIONFRUIT
      </router-link>
    </div>
    <navigation />
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
  margin-top: 100px;
  padding-left: 100px;
}
.logo {
  color: #fff;
  a {
    text-decoration: none;
    color: #fff;
  }
}
</style>
