<template>
  <section id="experience" class="experience">
    <div class="container">
      <h2 class="heading-2">
        Experience
      </h2>
      <div class="timeline">
        <div class="position">
          <span class="position__date">2007-2011</span>
          <figure class="position__timeline">
            <figure class="position__timeline-point position__timeline-point--done"></figure>
          </figure>
          <span class="position__title">IT Technical College</span>
        </div>
        <div class="position">
          <span class="position__date">2011-2014</span>
          <figure class="position__timeline">
            <figure class="position__timeline-point position__timeline-point--done"></figure>
          </figure>
          <span class="position__title">Bachelor of Computer Science</span>
        </div>
        <div class="position">
          <span class="position__date">2014-2016</span>
          <figure class="position__timeline">
            <figure class="position__timeline-point position__timeline-point--done"></figure>
          </figure>
          <span class="position__title">Front-end developer</span>
          <span class="position__company">Grupa Tense</span>
        </div>
        <div class="position">
          <span class="position__date">2016-2018</span>
          <figure class="position__timeline">
            <figure class="position__timeline-point position__timeline-point--done"></figure>
          </figure>
          <span class="position__title">Full-stack developer</span>
          <span class="position__company">Cape Morris</span>
        </div>
        <div class="position">
          <span class="position__date">2018-now</span>
          <figure class="position__timeline">
            <figure class="position__timeline-point position__timeline-point--active"></figure>
          </figure>
          <span class="position__title">JavaScript developer</span>
          <span class="position__company">Morizon.pl</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component({
  serverCacheKey: () => 'experience'
})
export default class Experience extends Vue {}
</script>

<style scoped lang="scss">
.experience {
  margin-bottom: 50px;
  .timeline {
    padding: 50px 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  .position {
    text-align: center;
    &__date {
      display: block;
    }
    &__title {
      display: block;
    }
    &__company {
      color: #625fe5;
    }
    &__timeline {
      width: 100%;
      height: 1px;
      background: #000;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 50px 0;
      &:after {
        content: '';
        width: 1px;
        height: 50px;
        background: #000;
        position: absolute;
        z-index: -1;
        bottom: 0;
      }
    }
    &__timeline-point {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid #000;
      background: #fff;
      &--active {
        background: #625fe5;
        border-color: #625fe5;
      }
      &--done {
        position: relative;
        &:before {
          content: '';
          display: block;
          position: absolute;
          background: rgb(37, 206, 102);
          transform: rotate(130deg);
          height: 8px;
          width: 2px;
          left: 5px;
          top: 5px;
        }
        &:after {
          content: '';
          display: block;
          position: absolute;
          background: rgb(37, 206, 102);
          height: 20px;
          width: 2px;
          transform: rotate(45deg);
          bottom: 3px;
          left: 14px;
        }
      }
    }
  }
}
@media (max-width: 575.98px) {
  .experience {
    .timeline {
      grid-template-columns: 1fr;
    }
    .position {
      text-align: center;
      display: flex;
      flex-direction: column;
      &__timeline {
        background: transparent;
        order: 3;
      }
    }
  }
}
</style>
