<script>
  import Countdown from "./Countdown.svelte";
  import PressStart from "./PressStart.svelte";
  import Heading from "./Heading.svelte";
  import Pokemons from "./Pokemons.svelte";
</script>

<div class="w-full h-screen flex flex-col bg-rose-400 mx-auto px-6">
  <Heading />
  <Countdown />
  <PressStart />
  <Pokemons />
</div>
