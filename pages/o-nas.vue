<template>
  <div class="about app-content app-content--dark-background">
    <div class="row">
      <div class="col context-center">
        <div class="about__photos">
          <div>
            <img src="~/assets/img/about/iwona.jpg" />
          </div>
          <div>
            <img src="~/assets/img/about/marcin.jpg" />
          </div>
        </div>
      </div>
      <div class="col context-center">
        <div>
          <p>
            Witajcie!
            <br />
            <br />
            Są w naszym życiu pewne szczególne, wyjątkowe momenty. Chcemy, by zapadły
            nam w pamięć na długo. Są też szczególne i wyjątkowe osoby w naszym życiu.
          </p>
          <br />
          <p>
            Jeśli pragniesz sprawić komuś bliskiemu radość, uczynić ważny życiowy
            moment wyjątkowym, zaskoczyć, ucieszyć kogoś bliskiego zapraszam do
            współpracy z Passionfruit!
          </p>
          <br />
          <p>
            Projekt ten zrodził się z mojej życiowej pasji jaką jest muzyka. Jej
            różnorodność form, kształtów, znaczeń, barw zachwyca mnie od lat. To, że
            mogę ją wyrażać poprzez mój głos jest dla mnie czymś ekscytującym i
            dającym spełnienie. Kiedy śpiewam i obcuję z muzyką czuję, że żyję!
          </p>
          <br />
          <p>
            Chcę podzielić się z Tobą moją energią, radością, fascynacją mojego życia.
            Zapraszam do zanurzenia się w dźwięki i słowa o miłości, życiu, relacjach,
            codzienności, które stworzyli najlepsi polscy i światowej sławy artyści.
            Odetchnij, odpocznij przy dźwiękach muzyki. Daj się na chwile przenieść w
            świat różnorodnych dźwięków, podniosłych słów, poezji, sztuki. Świętuj to
            co ważne przy dźwiękach muzyki. Spójrz przez chwilę na życie z innej,
            niecodziennej perspektywy!
          </p>
          <br />
          <p>
            Cenię sobie indywidualizm człowieka, dlatego postaram się przygotować coś
            szczególnego specjalnie dla Ciebie! Porozmawiamy o Twoich preferencjach,
            oczekiwaniach i wspólnie wybierzemy to co dla Ciebie najlepsze!
          </p>

          <p>Szanuję odrębność , szanuję wyjątkowość każdego</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Audio extends Vue {
}

</script>

<style lang="scss">
.about {
  height: 100%;
  &__photos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
      max-width: 300px;
      padding: 20px;
    }
  }
}
</style>
