<template>
  <div class="offer app-content app-content--dark-background">
    <div class="offer__content">
      <h1 class="heading offer__title">
        DLA FIRM
      </h1>
      <h2 class="heading-2 offer__subtitle">
        Świętuj to co ważne przy dźwiękach muzyki!
      </h2>
      <p>
        Zapraszamy do skorzystania z naszej oferty podczas spotkań służbowych tj: impreza firmowa, bankiet, przyjęcie
        koktajlowe, konferencja, spotkanie biznesowe, szkolenie, spotkanie motywacyjne, event, promocja nowych
        produktów i marek, spotkanie dla klientów, przedstawicieli handlowych lub pracowników. <br />
        <br />
        Zapraszamy również do skorzystania z naszych usług podczas innych imprez okolicznościowych
        tj.  Mikołajki, Andrzejki, spotkanie opłatkowe czy różnego rodzaju jubileusze.<br />
        <br />
        Ponadto zachęcamy do poszerzenia oferty Państwa restauracji czy hotelu o muzykę na żywo w naszym wykonaniu.<br />
        <br />
        Zapewniamy maksymalne zaangażowanie, rzetelność oraz profesjonalne, odpowiedzialne podejście do wykonywanej usługi.
        Zatroszczymy się o odpowiedni dobór repertuaru oraz nagłośnienie.<br />
        <br />
        Oferujemy tzw. muzykę tła lub występy koncertowe.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  head: {
    title: 'Passionfruit - oferta dla firm',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `Oferta dla firm - oprawa muzyczna uroczystości takich jak: impreza firmowa, bankiet,
        przyjęcie koktajlowe, konferencja, spotkanie biznesowe, szkolenie`
      }
    ]
  }
})
export default class ServiceCompany extends Vue {
}

</script>

<style lang="scss">
.offer {
  text-align: center;
  height: 100%;
  &__content {
    max-width: 600px;
    margin: 0 auto;
  }
  &__title {
    margin-bottom: 40px;
  }
  &__subtitle {
    margin: 15px 0;
  }
}
</style>
