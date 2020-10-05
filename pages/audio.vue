<template>
  <div class="video app-content app-content--dark-background">
    <no-ssr>
      <youtube-media
        v-for="video in videoList"
        :key="video.id"
        :video-id="video.id"
        class="video__item"
      />
    </no-ssr>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Audio extends Vue {
  videoList = [
    {
      id: 'D7QqoC0AuzE'
    },
    {
      id: 'Wehl3WDeqfA'
    },
    {
      id: 'sEvY7wj8y1s'
    },
    {
      id: 'juTCmScls4E'
    }
  ]
}

</script>

<style lang="scss">
  .video {
    display: block;
    width: 100%;
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
