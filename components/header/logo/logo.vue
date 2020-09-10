<template>
  <div class="logo">
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
@Component({
  serverCacheKey: () => 'logo'
})
export default class Logo extends Vue {}
</script>
