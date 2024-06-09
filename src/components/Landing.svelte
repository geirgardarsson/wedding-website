<script>
  import Countdown from "./Countdown.svelte";
  import PressStart from "./PressStart.svelte";
  import Pokemons from "./Pokemons.svelte";
  import Section from "./Section.svelte";
</script>

<Section
  additionalClasses="flex-col mx-auto justify-between sky-background"
  backgroundColor="bg-rose-400"
  extraPadding={true}
>
  <div class="m-auto flex flex-col text-center text-white">
    <h1 class="mx-auto sm:mb-4 text-xl sm:text-2xl">Brúðkaup Geirs og Rögnu</h1>
    <h2 class="mx-auto mt-4 text-sm flex">
      <i class="fa-regular fa-calendar m-auto text-lg align-middle mr-2"></i>
      <p class="m-auto align-middle pt-1">Laugardaginn 6. júlí 2024</p>
    </h2>
  </div>
  <div class="zelda-background h-[30rem] mb-0">
    <div class="grid grid-rows-6 grid-cols-5 h-full mx-4">
      <PressStart />
      <Countdown />
    </div>
  </div>
  <!-- <Pokemons /> -->
</Section>
