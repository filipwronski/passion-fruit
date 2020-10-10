<template>
  <div class="audio app-content app-content--dark-background">
    <h1 class="heading audio__title">
      AUDIO - ŚLUB
    </h1>
    <no-ssr>
      <youtube-media
        v-for="video in videoList"
        :key="video.id"
        :video-id="video.id"
        class="audio__item"
      />
    </no-ssr>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class AudioWedding extends Vue {
  videoList = [
    {
      id: 'juTCmScls4E'
    },
    {
      id: 'sEvY7wj8y1s'
    },
    {
      id: 'Wehl3WDeqfA'
    },
    {
      id: 'D7QqoC0AuzE'
    }
  ]
}

</script>

<style lang="scss">
  .audio {
    display: block;
    width: 100%;
  &__title {
    text-align: center;
    margin-bottom: 40px;
  }
  &__item {
    margin: 20px auto;
      iframe {
        @include respond-to(handheld){
          width: 100%;
        }
        margin: 0 auto;
        display: block;
        box-shadow: 0 0 40px 0px rgba(255, 255, 255, 0.35);
      }
    }
  }
</style>
