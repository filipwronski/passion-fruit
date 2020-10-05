<template>
  <div class="about app-content app-content--dark-background">
    <h1 class="heading about__title">
      O MNIE
    </h1>
    <p>
      Projekt ten zrodził się z mojej życiowej pasji jaką jest muzyka. Jej różnorodność form,<br />
      kształtów, znaczeń, barw zachwyca mnie od lat. To, że mogę ją wyrażać poprzez mój głos jest<br />
      dla mnie czymś ekscytującym i dającym spełnienie. Kiedy śpiewam i obcuję z muzyką czuję,<br />
      że żyję!<br />
      <br />
      Odkąd pamiętam fascynowała mnie muzyka bardzo różna stylistycznie. Kiedyś to, że nie<br />
      skupiałam się na jednym gatunku muzycznym postrzegałam jako wadę. Teraz postrzegam to<br />
      jako atut, gdyż odnajduję się wokalnie w różnych stylach muzycznych - od delikatnych ballad<br />
      po mocniejsze, rockowe brzmienia.<br />
      <br />
      Chcę podzielić się z Tobą moją energią, radością, fascynacją mojego życia. Zapraszam do<br />
      zanurzenia się w dźwięki i słowa o miłości, życiu, relacjach, codzienności, które stworzyli<br />
      najlepsi polscy i światowej sławy artyści.<br />
      Odetchnij, odpocznij przy dźwiękach muzyki. Daj się na chwile przenieść w świat<br />
      różnorodnych dźwięków, podniosłych słów, poezji, sztuki. Spójrz przez chwilę na życie z<br />
      innej, niecodziennej perspektywy!<br />
      <br />
      Cenię sobie wyjątkowość każdego człowieka, dlatego postaram się przygotować coś<br />
      szczególnego specjalnie dla Ciebie!<br />
      Porozmawiamy o Twoich  preferencjach, oczekiwaniach i wspólnie wybierzemy repertuar<br />
      najlepiej pasujący do Ciebie!<br />
      <br />
      „Nikt nie jest samotną wyspą” – to stwierdzenie jest aktualne w moim życiu.<br />
      Dlatego projekt ten realizuję wspólnie z kreatywnym, młodym pianistą Marcinem Zwierzchowskim.<br />
    </p>
    <img class="about__photo about__photo--iwona" src="~/assets/img/about/iwona.jpg" />
    <h2 class="heading-2 about__name">
      Iwona Dąbkowska
    </h2>
    <p>
      z  wykształcenia jestem magistrem pedagogiki i nauczycielem muzyki. Warsztat muzyczny<br />
      doskonaliłam jako wieloletnia solistka zespołu coverowego Terytoria oraz chóru<br />
      Boscoband, wokalistka chóru Politechniki Warszawskiej, chóru Vox Juventutis oraz kwintetu<br />
      wokalnego. Obecnie jestem liderem zespołu Uratowani. Swoje umiejętności doskonalę w<br />
      Centrum Szkolenia Muzyków na kierunku wokalistyka i kompozycja. Prywatnie jestem<br />
      szczęśliwą żoną i mamą dwóch córeczek. Moje zainteresowania pozamuzyczne to duchowość<br />
      chrześcijańska oraz psychologia.
    </p>
    <br />
    <p>Współpracuje ze mną:</p>
    <img class="about__photo" src="~/assets/img/about/marcin.jpg" />
    <h2 class="heading-2 about__name">
      Marcin Zwierzchowski
    </h2>
    <p>
      absolwent WAT na kierunku mechatronika. Pasję do muzyki łączy z pracą programisty robotów<br />
      przemysłowych. Doświadczenie na scenach muzycznych zdobywał w zespołach The Dox, Acoustic Praise<br />
      oraz Bosco Band. W wolnych chwilach zajmuje się produkcją muzyczną.
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
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
  &__name {
    margin-bottom: 10px;
  }
}
</style>
