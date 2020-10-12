<template>
  <div class="audio app-content app-content--dark-background">
    <h1 class="heading audio__title">
      AUDIO - PRZEBOJE
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

@Component({
  head: {
    title: 'Passionfruit - audio przeboje',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Sprawdź nasze nagrania - utwory dostosowane do każdej okazji.'
      }
    ]
  }
})
export default class AudioHits extends Vue {
  videoList = [
    {
      id: 'Mb_dF5SZ8SY'
    },
    {
      id: 'GxmxbJW8B3k'
    },
    {
      id: 'CQvuEtXtiZM'
    },
    {
      id: 'ti84Mt6dTJg'
    },
    {
      id: 'hMg0HqBymIs'
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
