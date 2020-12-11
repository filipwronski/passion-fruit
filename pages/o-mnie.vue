<template>
  <div class="about app-content app-content--dark-background">
    <h1 class="heading about__title">
      O MNIE
    </h1>
    <p class="about__text">
      Projekt ten zrodził się z mojej życiowej pasji jaką jest muzyka. Jej różnorodność form,
      kształtów, znaczeń, barw zachwyca mnie od lat. To, że mogę ją wyrażać poprzez mój głos jest
      dla mnie czymś ekscytującym i dającym spełnienie. Kiedy śpiewam i obcuję z muzyką czuję,
      że żyję!<br />
      <br />
      Odkąd pamiętam fascynowała mnie muzyka bardzo różna stylistycznie. Kiedyś to, że nie
      skupiałam się na jednym gatunku muzycznym postrzegałam jako wadę. Teraz postrzegam to
      jako atut, gdyż odnajduję się wokalnie w różnych stylach muzycznych - od delikatnych ballad
      po mocniejsze, rockowe brzmienia.<br />
      <br />
      Chcę podzielić się z Tobą moją energią, radością, fascynacją mojego życia. Zapraszam do
      zanurzenia się w dźwięki i słowa o miłości, życiu, relacjach, codzienności, które stworzyli
      najlepsi polscy i światowej sławy artyści.
      Odetchnij, odpocznij przy dźwiękach muzyki. Daj się na chwile przenieść w świat
      różnorodnych dźwięków, podniosłych słów, poezji, sztuki. Spójrz przez chwilę na życie z
      innej, niecodziennej perspektywy!<br />
      <br />
      Cenię sobie wyjątkowość każdego człowieka, dlatego postaram się przygotować coś
      szczególnego specjalnie dla Ciebie!
      Porozmawiamy o Twoich  preferencjach, oczekiwaniach i wspólnie wybierzemy repertuar
      najlepiej pasujący do Ciebie!
      <br />
      <br />
      „Nikt nie jest samotną wyspą” – to stwierdzenie jest aktualne w moim życiu.
      Dlatego projekt ten realizuję wspólnie z kreatywnym, młodym pianistą Marcinem Zwierzchowskim.
    </p>
    <img class="about__photo about__photo--iwona" src="~/assets/img/about/iwona.jpg" />
    <h2 class="heading-2 about__name">
      Iwona Dąbkowska
    </h2>
    <p class="about__text">
      z  wykształcenia jestem magistrem pedagogiki i nauczycielem muzyki. Warsztat muzyczny
      doskonaliłam jako wieloletnia solistka zespołu coverowego Terytoria oraz chóru
      Boscoband, wokalistka chóru Politechniki Warszawskiej, chóru Vox Juventutis oraz kwintetu
      wokalnego. Obecnie jestem liderem zespołu Uratowani. Swoje umiejętności doskonalę w
      Centrum Szkolenia Muzyków na kierunku wokalistyka i kompozycja. Prywatnie jestem
      szczęśliwą żoną i mamą dwóch córeczek. Moje zainteresowania pozamuzyczne to duchowość
      chrześcijańska oraz psychologia.
    </p>
    <br />
    <p>Współpracuje ze mną:</p>
    <img class="about__photo" src="~/assets/img/about/marcin.jpg" />
    <h2 class="heading-2 about__name">
      Marcin Zwierzchowski
    </h2>
    <p class="about__text">
      absolwent WAT na kierunku mechatronika. Pasję do muzyki łączy z pracą programisty robotów
      przemysłowych. Doświadczenie na scenach muzycznych zdobywał w zespołach The Dox, Acoustic Praise
      oraz Bosco Band. W wolnych chwilach zajmuje się produkcją muzyczną.
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  head: {
    title: 'Passionfruit - o mnie',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'O mnie - zapraszamy do zapoznania się z historią projektu passionfruit.'
      }
    ]
  }
})
export default class About extends Vue {
}

</script>

<style lang="scss">
.about {
  height: 100%;
  text-align: center;
  &__title {
    margin-bottom: 40px;
  }
  &__photo {
    max-width: 300px;
    display: block;
    margin: 40px auto;
    @include respond-to(handheld){
      width: 100%;
    }
    &--iwona {
      max-width: 500px;
    }
  }
  &__text {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
  }
  &__name {
    margin-bottom: 10px;
  }
}
</style>
