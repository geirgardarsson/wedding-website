<script>
  import Loader from "./Loader.svelte";

  export let text;
  export let bgColor;
  export let extraStyles = "";
  export let isLoading = false;
</script>

<button on:click class="btn-primary {extraStyles} {bgColor}">
  <div class="m-auto">
    {#if isLoading}
      <Loader />
    {:else}
      {text}
    {/if}
  </div>
</button>
