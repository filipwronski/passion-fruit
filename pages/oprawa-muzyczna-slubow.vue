<template>
  <div class="offer app-content app-content--dark-background">
    <div class="offer__content">
      <h1 class="heading offer__title">
        OPRAWA MUZYCZNA ŚLUBÓW
      </h1>
      <h2 class="heading-2 offer__subtitle">
        Uczyń ten przełomowy dzień wyjątkowym!
      </h2>
      <p>
        Skorzystaj z naszej oferty, aby w tym pełnym wrażeń dniu  zapomnieć o stresie
        i wszelkich sprawach technicznych związanych
        z muzyką. Zatroszczmy się o wszystkie szczegóły - nie musicie się martwić o sprzęt, nagłośnienie, repertuar. Dołożymy wszelkich starań, aby ten dzień był niezapomnianym i bogatym we wzruszenia. Zapewniamy maksymalne zaangażowanie, rzetelność oraz profesjonalne, odpowiedzialne podejście do wykonywanej usługi.
        Pragniemy, by Wasz ślub był  niezwykle wzruszający, pełen ciepła, miłości  i zapisał się w pamięci bliskich Wam osób.
      </p>
      <h2 class="heading-2 offer__subtitle">
        Co nas wyróżnia?
      </h2>
      <p>
        Wieloletnie doświadczenie w służbie muzycznej w kościele. Zapewniamy dobór odpowiedniego repertuaru wpisującego się w liturgię Mszy czy nabożeństwa. Treść  zawarta w wykonywanych przez nas utworach jest bliska naszemu sercu, dlatego też stają się one modlitwą. Posiadamy również legitymację upoważniającą nas do posługi muzycznej podczas udzielania sakramentu małżeństwa.
      </p>
      <h2 class="heading-2 offer__subtitle">
        Oferta zawiera:
      </h2>
      <p>
        konsultacje i pomoc w doborze repertuaru; przygotowanie miejsca pracy; realizację  pieśni na wejście, ofiarowanie, komunię, uwielbienie, zakończenie oraz dla chętnych poprowadzenie części stałych mszy; akompaniament pianina; własne nagłośnienie.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ServiceWeding extends Vue {
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
