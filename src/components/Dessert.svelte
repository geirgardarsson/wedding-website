<script>
  import Section from "./Section.svelte";

  let headerClass = "my-auto text-center p-2 rounded-lg";
</script>

<Section sectionId="dessert-section" additionalClasses="h-screen">
  <div
    class="h-full flex flex-col justify-around bg-cover grayscale-[50%] bg-[url('https://www.baunin.com/cdn/shop/files/5245D1D6-4CD3-4160-9EBB-92BDF2DC3B84_1512x.jpeg?v=1613696279')]"
  >
    <div class="nes-container is-rounded bg-white !mx-6">
      <h1 class={headerClass}>Í eftirrétt verður kaka frá Bauninni!</h1>
    </div>
    <div class="nes-container is-rounded bg-white !mx-6">
      <h2 class={headerClass}>og kannski ís líka</h2>
    </div>
  </div>
</Section>
