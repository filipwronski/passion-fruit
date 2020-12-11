<template>
  <div class="home app-content">
    <h1 class="heading">
      Witajcie!
    </h1>
    <br />
    <p>
      Są w naszym życiu pewne szczególne, wyjątkowe momenty.
      Chcemy, by zapadły nam w pamięć na długo.
      Są też szczególne i&nbsp;wyjątkowe osoby w naszym życiu.<br />
      <br />
      Jeśli pragniesz sprawić komuś bliskiemu radość, uczynić ważny życiowy moment
      wyjątkowym, zaskoczyć - zapraszam do współpracy z Passionfruit!<br />
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Home extends Vue {}
</script>

<style lang="scss">
  .home {
    width: 600px;
    position: absolute;
    top: 50%;
    left: 65%;
    transform: translate(-30%, -50%);
    text-align: center;
    @include respond-to(handheld){
      width: auto;
      position: relative;
      top: auto;
      left: auto;
      transform: none;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
</style>
