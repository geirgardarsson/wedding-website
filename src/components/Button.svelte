<script>
    export let text;
    export let bgColor;
</script>

<button on:click class="btn-primary {bgColor}">
    {text}
</button>