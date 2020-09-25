<template>
  <div class="app-content">
    <div class="gallery">
      <carousel
        :per-page="1"
        :navigation-enabled="true"
      >
        <slide
          v-for="(image, index) in imageList"
          :key="index"
        >
          <img :src="image.path" />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Galeria extends Vue {
  imageList = [
    {
      path: require('../assets/img/gallery/3.jpg')
    },
    {
      path: require('../assets/img/gallery/7.jpg')
    },
    {
      path: require('../assets/img/gallery/2.jpg')
    },
    {
      path: require('../assets/img/gallery/4.jpg')
    },
    {
      path: require('../assets/img/gallery/5.jpg')
    },
    {
      path: require('../assets/img/gallery/6.jpg')
    },
    {
      path: require('../assets/img/gallery/8.jpg')
    },
    {
      path: require('../assets/img/gallery/9.jpg')
    },
    {
      path: require('../assets/img/gallery/1.jpg')
    }
  ]
}

</script>

<style lang="scss">
.gallery {
  position: relative;
  max-width: calc(100vw - 382px);
  .VueCarousel-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .VueCarousel-inner {
    max-height: calc(100vh - 204px);
  }
  .VueCarousel-navigation-button {
    color: #fff;
    &:focus {
      outline: none;
    }
  }
  .VueCarousel-dot {
    &:focus {
      outline: none;
    }
    &--active {
      background-color: $brand-pink !important;
      outline: none;
    }
  }
}
</style>
