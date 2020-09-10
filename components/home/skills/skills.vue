<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2 class="heading-2">
        Skills
      </h2>
      <div class="skills__frontend">
        <h3 class="heading-3 skills__title">
          Front-end:
        </h3>
        <ul class="skills__list">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Vue.js</li>
          <li>Nuxt.js</li>
          <li>Vuex</li>
          <li>PWA</li>
          <li>Jest</li>
          <li>Cypress.js</li>
          <li>HTML</li>
          <li>SASS</li>
          <li>CSS</li>
        </ul>
      </div>
      <div class="skills__frontend">
        <h3 class="heading-3 skills__title">
          Back-end:
        </h3>
        <ul class="skills__list">
          <li>PHP</li>
          <li>Node.js</li>
          <li>Symfony</li>
          <li>Express.js</li>
          <li>GraphQl</li>
          <li>REST</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component({
  serverCacheKey: () => 'skills'
})
export default class Skills extends Vue {}
</script>

<style scoped lang="scss">
.skills {
  background: #f1f1ff;
  margin-top: 50px;
  padding-bottom: 50px;
  &__title {
    margin-bottom: 10px;
  }
  &__list {
    margin-bottom: 40px;
    list-style: none;
    padding: 0;
    li {
      padding: 2px 5px;
      background: #625fe5;
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 10px;
      color: #fff;
    }
  }
}
</style>
