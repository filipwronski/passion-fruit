<template>
  <div class="home">
    <main-header />
    <hello />
    <about />
    <services />
    <skills />
    <experience />
    <contact />
    <main-footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import mainHeader from '~/components/header/header.vue'
import hello from '~/components/home/hello/hello.vue'
import about from '~/components/home/about/about.vue'
import services from '~/components/home/services/services.vue'
import experience from '~/components/home/experience/experience.vue'
import skills from '~/components/home/skills/skills.vue'
import contact from '~/components/home/contact/contact.vue'
import mainFooter from '~/components/footer/footer.vue'

@Component({
  components: {
    mainHeader,
    hello,
    about,
    services,
    experience,
    skills,
    contact,
    mainFooter
  }
})
export default class Home extends Vue {
}

</script>

<style lang="scss">
.home {
  position: relative;
}
</style>
