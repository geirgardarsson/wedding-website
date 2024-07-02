<script>
  import Section from "./Section.svelte";
  import Button from "./Button.svelte";

  let headerClass = "my-auto text-center p-2 rounded-lg";

  function scrollToLanding() {
    const menu = document.getElementById("landing");

    if (!menu) {
      return;
    }

    menu.scrollIntoView({ behavior: "smooth" });
  }
</script>

<Section sectionId="dessert-section" backgroundColor="bg-purple-300" additionalClasses="h-screen flex justify-center">
  <div
    class="h-full flex flex-col justify-around bg-cover grayscale-[50%] bg-[url('https://www.baunin.com/cdn/shop/files/5245D1D6-4CD3-4160-9EBB-92BDF2DC3B84_1512x.jpeg?v=1613696279')]"
  >
    <div class="nes-container is-rounded bg-white !mx-6">
      <h1 class={headerClass}>Í eftirrétt verður kaka frá Bauninni!</h1>
    </div>
    <div class="nes-container is-rounded bg-white !mx-6">
      <h2 class={headerClass}>og ís frá Valdís!</h2>
    </div>
    <div class="mx-auto mb-4 mt-0 h-36">
      <Button
        on:click={scrollToLanding}
        text="Hvenær er þetta aftur?"
        bgColor="bg-violet-500"
      />
    </div>
  </div>
</Section>
