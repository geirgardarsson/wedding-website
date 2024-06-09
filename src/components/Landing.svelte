<script>
  import Countdown from "./Countdown.svelte";
  import PressStart from "./PressStart.svelte";
  import Heading from "./Heading.svelte";
  import Pokemons from "./Pokemons.svelte";
  import Section from "./Section.svelte";
</script>

<Section
  additionalClasses="flex-col mx-auto"
  backgroundColor="bg-rose-400"
  extraPadding={true}
>
  <Heading />
  <Countdown />
  <PressStart />
  <Pokemons />
</Section>
