<script>
  import Button from "./Button.svelte";
  import Section from "./Section.svelte";

  function scrollToMenu() {
    const menu = document.getElementById("menu-section");

    if (!menu) {
      return;
    }

    menu.scrollIntoView({ behavior: "smooth" });
  }
</script>

<Section sectionId="location" backgroundColor="bg-emerald-400">
  <div class="h-screen w-full lg:w-2/3 p-8 m-auto flex flex-col">
    <div class="h-1/2 md:h-2/3 m-auto mt-0">
      <h1 class="text-white text-center mb-6">
        Bæði veislan og athöfnin verða haldin í Rafveituheimilinu í Elliðaárdal
      </h1>
      <div class="w-full h-full m-auto">
        <iframe
          title="Rafveituheimilið í Elliðaárdal"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d787.3993798455353!2d-21.826843516055025!3d64.11738082782512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d6737b28fd4179%3A0x10b5c86ab1cbb254!2sRafveituheimili%C3%B0!5e1!3m2!1sen!2sis!4v1715452301155!5m2!1sen!2sis"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen={true}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div class="mx-auto my-2">
      <Button
        on:click={scrollToMenu}
        text="Geggjað, hvað er í matinn?"
        bgColor="bg-violet-500"
      />
    </div>
  </div>
</Section>
