<script>
  import { onMount } from "svelte";
  import SectionPadding from "./SectionPadding.svelte";

  export let sectionId = "";
  export let backgroundColor = "";
  export let additionalClasses = "";
  export let extraPadding = false;

  /**
   * @type {string}
   */
  let heightStyle;

  function handleRezise() {
    if (!heightStyle) {
      heightStyle = `${window.innerHeight}px !important`;
    }
  }

  onMount(() => {
    window.addEventListener("resize", handleRezise);

    return () => {
      window.removeEventListener("resize", handleRezise);
    };
  });
</script>

<SectionPadding {backgroundColor} />
<div
  id={sectionId}
  class="screen-section {backgroundColor} {additionalClasses}"
  style={"height: 100%"}
>
  <slot />
</div>
<SectionPadding {backgroundColor} />
{#if extraPadding}
  <SectionPadding {backgroundColor} />
{/if}
