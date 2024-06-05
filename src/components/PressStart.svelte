<script>
  import Button from "./Button.svelte";

  function scrollToRegister() {
    const register = document.getElementById("rsvp-section");

    if (!register) {
      return;
    }

    register.scrollIntoView({ behavior: "smooth" });
  }
</script>

<div class="w-64 text-white text-sm text-center sm:text-base m-auto">
  <Button text="Byrja!" bgColor="bg-amber-500" on:click={scrollToRegister} />
</div>
