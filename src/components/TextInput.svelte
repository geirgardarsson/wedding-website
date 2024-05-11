<script>
   /**
   * @type {String}
   */
    export let text;
    export let placeholder;
    export let textColor;
    export let borderColor;
    export let placeholderColor;
</script>

<input
    bind:value={text}
    on:keyup
    class="text-input {textColor} {borderColor} {placeholderColor}"
    placeholder={placeholder} />