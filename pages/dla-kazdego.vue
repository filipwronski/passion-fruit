<template>
  <div class="offer app-content app-content--dark-background">
    <div class="offer__content">
      <h1 class="heading offer__title">
        DLA KAŻDEGO
      </h1>

      <h2 class="heading-2 offer__subtitle">
        UROCZYSTOŚCI RODZINNE
      </h2>
      <p>
        Spotkania w gronie rodziny i przyjaciół takie jak rocznice ślubu, jubileusze, imieniny to
        doskonała okazja do posłuchania muzyki na żywo! Pragniemy pomóc Państwu w stworzeniu
        ich ciepłej i serdecznej atmosfery oraz dostarczyć zaproszonym gościom dużej dawki radości i wzruszeń!<br />
        <br />
        Zapewniamy dobór odpowiedniego repertuaru w zależności od uroczystości, dla każdej osoby indywidualnie, niezależnie od wieku.
        Wykonujemy znane przeboje w nowych, ciekawych aranżacjach, które zadowolą młodsze i starsze pokolenie słuchaczy.
      </p>
      <h2 class="heading-2 offer__subtitle">
        NIESPODZIANKI URODZINOWE
      </h2>
      <p>
        Zrób swojej bliskiej osobie prezent niespodziankę!<br />
        Zaskocz osobę, która jest dla Ciebie ważna!<br />
        <br />
        Zaproś nas a wykonamy dla solenizanta jego ulubione utwory w nowych, wyjątkowych aranżacjach.
        Wspólnie dobierzemy repertuar a my ubierzemy go w piękną szatę muzyczną  dodając ciekawe anegdoty i zapowiedzi.
      </p>
      <h2 class="heading-2 offer__subtitle">
        IMPREZY OKOLICZNOŚCIOWE
      </h2>
      <p>
        Zaproś nas na Mikołajki, Andrzejki, Walentynki, Jubileusze, Dzień Matki czy inne uroczystości prywatne i przyjęcia.
        To świetna okazja do posłuchania muzyki na żywo!
      </p>
      <h2 class="heading-2 offer__subtitle">
        OPRAWA MUZYCZNA PODCZAS ZARĘCZYN
      </h2>
      <p>
        Jedyna w swoim rodzaju oprawa muzyczna to niezwykle romantyczna niespodzianka dla
        wybranki serca. Zaskocz swoją ukochaną muzyką na żywo! Przypomnienie ważnych dla Was
        piosenek z pewnością uświetni ten szczególny moment!
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  head: {
    title: 'Passionfruit - oferta dla każdego',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `Oferta dla każdego - oprawa muzyczna uroczystości takich jak: Mikołajki,
        Andrzejki, Walentynki, Jubileusze, Dzień Matki czy inne uroczystości prywatne i przyjęcia`
      }
    ]
  }
})
export default class ServiceEveryone extends Vue {
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
