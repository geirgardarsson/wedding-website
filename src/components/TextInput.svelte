<script>
  export let text = "";
  export let placeholder;
  export let textColor;
  export let borderColor;
  export let placeholderColor;
  export let additionalClasses = "";
</script>

<input
  bind:value={text}
  on:keyup
  on:blur
  class="text-input {textColor} {borderColor} {placeholderColor} {additionalClasses}"
  {placeholder}
/>
