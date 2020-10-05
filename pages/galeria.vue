<template>
  <div class="gallery-wrapper app-content app-content--dark-background">
    <client-only>
      <div class="gallery">
        <carousel
          :per-page="1"
          :navigation-enabled="true"
        >
          <slide
            v-for="(image, index) in imageList"
            :key="index"
          >
            <div class="gallery__wrapper">
              <img class="gallery__img" :src="image.path" />
            </div>
          </slide>
        </carousel>
      </div>
    </client-only>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Gallery extends Vue {
  imageList = [
    {
      path: require('../assets/img/gallery/1.jpg')
    },
    {
      path: require('../assets/img/gallery/2.jpg')
    },
    {
      path: require('../assets/img/gallery/3.jpg')
    },
    {
      path: require('../assets/img/gallery/4.jpg')
    },
    {
      path: require('../assets/img/gallery/55.jpg')
    },
    {
      path: require('../assets/img/gallery/6.jpg')
    },
    {
      path: require('../assets/img/gallery/7.jpg')
    },
    {
      path: require('../assets/img/gallery/8.jpg')
    },
    {
      path: require('../assets/img/gallery/9.jpg')
    },
    {
      path: require('../assets/img/gallery/10.jpg')
    },
    {
      path: require('../assets/img/gallery/11.jpg')
    },
    {
      path: require('../assets/img/gallery/12.jpg')
    }
  ]
}

</script>

<style lang="scss">
.gallery-wrapper {
  padding: 30px;
  height: 100%;

}
.gallery {
  position: relative;
  max-width: calc(100vw - 382px);
  height: 100%;
  @include respond-to(handheld){
    max-width: 100%;
  }
  &__wrapper {
    width: 100%;
    padding: 2px;
    height: calc(100vh - 210px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__img {
    max-width: 100%;
    max-height: 100%;
  }
  .VueCarousel-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .VueCarousel-inner {
    max-height: calc(100vh - 204px);
  }
  .VueCarousel-navigation-button {
    color: #fff !important;
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
