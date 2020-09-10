<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="heading-2">
        Contact
      </h2>
      <div class="contact__content">
        <img
          v-lazy="'/img/contact.svg'"
          alt="People sending messages"
          class="contact__image"
        />
        <h3 class="contact__title">
          Do you have any quesion?
        </h3>
        <div class="contact__wrapper">
          <a
            class="contact__button button button--dark"
            href="mailto:filip0822@gmail.com"
            title="Contact by mail"
          >
            Contact me by e-mail
          </a>
          <a
            class="contact__button button button--dark"
            title="Linkedin Contact"
            href="https://www.linkedin.com/in/filipw0822/"
          >
            Contact me by linkedin
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component({
  serverCacheKey: () => 'contact'
})
export default class Contact extends Vue {}
</script>

<style scoped lang="scss">
.contact {
  background: #f1f1ff;
  &__content {
    display: grid;
    grid-template-columns: 100%;
    justify-content: center;
    padding: 50px 0 100px 0;
  }
  &__image {
    width: 300px;
    justify-self: center;
    margin-bottom: 50px;
  }
  &__title {
    text-align: center;
    font-weight: 400;
    margin-bottom: 20px;
  }
  &__wrapper {
    justify-content: center;
    display: flex;
    .button {
      margin: 20px;
    }
  }
}
@media (max-width: 575.98px) {
  .contact {
    &__wrapper {
      flex-direction: column;
      .button {
        margin: 10px auto;
        display: block;
      }
    }
  }
}
</style>
