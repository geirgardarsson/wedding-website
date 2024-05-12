<script>
    export let text;
    export let bgColor;
    export let extraStyles = "";
</script>

<button on:click class="btn-primary {extraStyles} {bgColor}">
    {text}
</button>