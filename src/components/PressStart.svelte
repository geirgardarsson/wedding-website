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

<div
  class="grid col-start-3 col-span-3 row-start-2 row-span-1 text-white text-sm text-center sm:text-base m-auto"
>
  <Button
    text="Ýttu hér"
    bgColor="bg-amber-500"
    on:click={scrollToRegister}
    extraStyles="!m-0 p-4 !w-[unset]"
  />
</div>
