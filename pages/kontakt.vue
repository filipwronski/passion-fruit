<template>
  <section class="contact app-content app-content--dark-background">
    <h1 class="heading contact__title">
      KONTAKT
    </h1>
    <div class="contact__content">
      <span>
        <b>Iwona Dąbkowska</b><br />
        <br />
        tel: <a href="tel:664 606 603">664 606 603</a><br />
        <br />
        e-mail: <a href="mailto:kontakt@passion-fruit.pl">kontakt@passion-fruit.pl</a><br />
      </span>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Contact extends Vue {
}

</script>

<style lang="scss">
.contact {
  text-align: center;
  color: #fff;
  position: relative;
  height: 100%;
  &__title {
    margin-bottom: 40px;
  }
  &__content {
    position: absolute;
    font-size: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    a {
      color: #fff;
      display: inline-block;
    }
  }
}
</style>
