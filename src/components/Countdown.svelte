<script>
  import { onMount } from "svelte";
  let date = new Date("2024-07-06T16:00:00");
  let now = new Date();

  $: timeBetween = date.valueOf() - now.valueOf();

  $: days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

  $: hours = Math.floor(
    (timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  $: minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));

  $: seconds = Math.floor((timeBetween % (1000 * 60)) / 1000);

  onMount(() => {
    const interval = setInterval(() => {
      now = new Date();
    }, 1000);
    return () => clearInterval(interval);
  });
</script>

<div
  class="row-start-4 row-span-2 grid-cols-span-3 text-white w-60 bg-amber-500 border-primary flex"
>
  <div class="m-auto w-full p-2">
    <div class="flex justify-between">
      <div class="w-12 text-end">{days}</div>
      <div class="w-32 text-start">dagar</div>
    </div>
    <div class="flex justify-between">
      <div class="w-12 text-end">{hours}</div>
      <div class="w-32 text-start">tímar</div>
    </div>
    <div class="flex justify-between">
      <div class="w-12 text-end">{minutes}</div>
      <div class="w-32 text-start">mínútur</div>
    </div>
    <div class="flex justify-between">
      <div class="w-12 text-end">{seconds}</div>
      <div class="w-32 text-start">sekúndur</div>
    </div>
  </div>
</div>
