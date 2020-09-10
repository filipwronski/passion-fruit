<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="heading-2">
        About me
      </h2>
    </div>
    <div class="container">
      <div class="about__content">
        <div>
          <p class="about__text">
            I have been working as a Full-stack developer since 2014,
            I'm mix both front-end and back-end technologies
            because I like to take part of all of development process.
          </p><br />
          <p class="about__text">
            Curently I'm focus on Vue.js ecosystem, web apps performance and good apps architecture.
          </p><br />
          <p class="about__text">
            I'm typical teamplayer, so I really like to work and spend time around people with common goal and passion. You can hang me out often on Warsaw JavaScripts meetups like WarsawJS, Dev.js, Vue.js Poland and Facebook Developers Circle.
          </p><br />
        </div>
        <img
          v-lazy="'/img/undraw_master_plan_95wa.svg'"
          alt="Man thinking about master plan"
          class="about__image"
        />
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component({
  serverCacheKey: () => 'about'
})
export default class About extends Vue {
}
</script>

<style scoped lang="scss">
.about {
  padding-bottom: 50px;
  background: #f1f1ff;
  &__content {
    background:#f1f1ff;
    display: grid;
    grid-template-columns: 40% 60%;
  }
  &__text {
    text-align: justify;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: .5px;
  }
  &__image {
    justify-self: center;
    align-self: center;
    width: 100%;
    padding: 0 20%;
  }
}
@media (max-width: 575.98px) {
  .about {
    &__content {
      grid-template-columns: 100%;
    }
  }
}
</style>
