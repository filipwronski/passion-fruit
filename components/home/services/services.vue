<template>
  <section id="#services" class="services">
    <div class="container">
      <h2 class="heading-2">
        Services
      </h2>
      <div class="services-list">
        <article class="services-list__item">
          <header>
            <h3 class="heading-3 services-list__title">
              Web development
            </h3>
          </header>
          <img
            v-lazy="'/img/web-development.svg'"
            alt="Web development"
            class="services-list__image"
          />
        </article>
        <article class="services-list__item">
          <header>
            <h3 class="heading-3 services-list__title">
              Mobile app development
            </h3>
          </header>
          <img
            v-lazy="'/img/mobile-app.svg'"
            alt="Mobile app development"
            class="services-list__image"
          />
        </article>
        <article class="services-list__item">
          <header>
            <h3 class="heading-3 services-list__title">
              Progressive app development
            </h3>
          </header>
          <img
            v-lazy="'/img/progressive-app.svg'"
            alt="Progressive app development"
            class="services-list__image"
          />
        </article>
        <article class="services-list__item">
          <header>
            <h3 class="heading-3 services-list__title">
              SEO Audits
            </h3>
          </header>
          <img
            v-lazy="'/img/seo-audits.svg'"
            alt="Seo Audits"
            class="services-list__image"
          />
        </article>
        <article class="services-list__item">
          <header>
            <h3 class="heading-3 services-list__title">
              UX audits
            </h3>
          </header>
          <img
            v-lazy="'/img/ux-audits.svg'"
            alt="Ux audits"
            class="services-list__image"
          />
        </article>
        <article class="services-list__item">
          <header>
            <h3 class="heading-3 services-list__title">
              Consulting
            </h3>
          </header>
          <img
            v-lazy="'/img/consulting.svg'"
            alt="Consulting"
            class="services-list__image"
          />
        </article>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component({
  serverCacheKey: () => 'services'
})
export default class Services extends Vue {}
</script>

<style scoped lang="scss">
  .services {
    margin-bottom: 100px;
    .services-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      &__item {
        align-self: self-start;
        justify-self: center;
        background: #f1f1ff;
        height: 100%;
        width: 100%;
        padding: 20px;
        min-height: 200px;
      }
      &__image {
        max-width: 50%;
        align-self: center;
        justify-self: center;
        display: flex;
        margin: 0 auto;
      }
      &__title {
        text-align: center;
        margin-bottom: 20px;
      }
    }
  }

  @media (max-width: 575.98px) {
    .services {
      .services-list {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
  @media (max-width: 430px) {
    .services {
      .services-list {
        grid-template-columns: 1fr;
      }
    }
  }
</style>
