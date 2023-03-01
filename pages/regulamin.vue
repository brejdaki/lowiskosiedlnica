<script lang="ts" setup>
definePageMeta({
  layout: 'main',
})
</script>

<template>
<div
  class="regulations container"
>
  <h1>Regulamin łowiska</h1>

  <ol>
    <li>
      Na terenie łowiska nie jest wymagana karta wędkarska.
    </li>

    <li>
      Po przybyciu na teren łowiska należy zgłosić się do 
      gospodarza w celu potwierdzenia obecności na terenie.
    </li>

    <li>
      Gospodarz łowiska ma prawo do:

      <ul>
        <li>
          kontroli samochodów i bagaży w przypadku podejrzenia, iż 
          nie wszystkie ryby zostały wypuszczone do wody,
        </li>

        <li>
          wyproszenia z terenu łowiska w przypadku głośnego zachowywania 
          się, śmiecenia, dewastacji i kradzieży.
        </li>
      </ul>
    </li>

    <li>
      Wezwanie policji w przypadku nie dostosowania się do punktu 03.
    </li>

    <li>
      Na łowisku dozwolone są następujące metody łowienia:

      <ul>
        <li>
          spławikowa,
        </li>

        <li>
          gruntowa,
        </li>

        <li>
          spining (po wcześniejszym uzgodnieniu z gospodarzem).
        </li>
      </ul>
    </li>

    <li>
      Zakaz stosowania plecionki.
    </li>

    <li>
      Złowione ryby wypuszczamy do wody, nie przetrzymujemy ich 
      w siatkach, podbierakach itp.
    </li>

    <li>
      Każdy wędkarz musi posiadać:

      <ul>
        <li>
          narzędzie do odczepiania haczyków,
        </li>

        <li>
          matę do ryb,
        </li>

        <li>
          środki do dezynfekcji ran po haczyku.
        </li>
      </ul>
    </li>

    <li>
      Dzieci i młodzież do lat 18 mogą przebywać na terenie łowiska 
      wyłącznie pod opieką osób pełnoletnich, którzy w pełni ponoszą 
      za nich odpowiedzialność.
    </li>

    <li>
      W obrębie łowiska nie wolno śmiecić, wyrzucać niedopałków 
      papierosów i resztek żywności itp. dotyczy również palenisk.
    </li>

    <li>
      Każda osoba przebywająca na terenie łowiska zobowiązana jest 
      zostawić po sobie porządek. Wszystkie śmieci zabiera ze sobą.
    </li>

    <li>
      Na terenie łowiska obowiązuje zakaz kąpieli oraz wypuszczania 
      psów luzem.
    </li>

    <li>
      Właściciel łowiska nie ponosi odpowiedzialności za wypadki 
      losowe oraz rzeczy pozostawione na terenie łowiska, a także 
      zastrzega sobie prawo do zmiany regulaminu łowiska.
    </li>

    <li>
      Na stanowisko można podjechać autem w celu rozpakowania się, 
      po czym auto odstawiamy na parking.
    </li>

    <li>
      Wstęp na łowisko jest równoznaczny z akceptacją obowiązującego 
      regulaminu.
    </li>

    <li>
      Osoby nie przestrzegające niniejszego regulaminu będą wyproszone 
      z terenu łowiska.
    </li>

    <li>
      Opłaty uiszczamy przy wyjeździe u gospodarza łowiska. 
    </li>
  </ol>
</div>
</template>

<style lang="scss" scoped>
.regulations {
  padding: 2rem 1.5rem 4rem;

  @include breakpoint-to('desktop-small') {
    min-height: calc(100vh - 22.5rem);
  }

  h1 {
    margin-bottom: 2rem;
  }

  ol {
    list-style-type: decimal-leading-zero;
    padding-left: 1.8rem;

    li {
      padding-left: 0.25rem;

      &::marker {
        color: var(--c-black-alpha);
      }     
      
      &:not(:last-child) {
        margin-bottom: .75rem;
      }

      ul {
        list-style-type: circle;
        padding-left: 1.1rem;
        margin-top: .5rem;

        @include breakpoint-to('desktop-small') {
          padding-left: 1.3rem;
        }

        li {
          padding: 0;

          &:not(:last-child) {
            margin-bottom: .5rem;
          }
        }
      }
    }
  }
}
</style>