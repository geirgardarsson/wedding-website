<script>
  import Countdown from "./Countdown.svelte";
  import PressStart from "./PressStart.svelte";
  import Heading from "./Heading.svelte";
  import Pokemons from "./Pokemons.svelte";
</script>

<div
  class="w-screen h-screen snap-start shrink-0 flex flex-col bg-rose-400 mx-auto"
>
  <Heading />
  <Countdown />
  <PressStart />
  <Pokemons />
</div>
