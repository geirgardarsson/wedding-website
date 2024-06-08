<script>
  import austurIndia from "$lib/austurindia.png";
  import Button from "./Button.svelte";
  import MenuItem from "./MenuItem.svelte";
  import Section from "./Section.svelte";

  function scrollToDessert() {
    const dessertSection = document.getElementById("dessert-section");

    if (!dessertSection) {
      return;
    }

    dessertSection.scrollIntoView({ behavior: "smooth" });
  }
</script>

<Section
  sectionId="menu-section"
  backgroundColor="bg-orange-400"
  additionalClasses="flex-col h-screen justify-between"
>
  <div class="flex flex-col mx-auto mt-4">
    <img class="w-20 h-20 m-auto" alt="austurindiafjelagid" src={austurIndia} />
    <h1
      class="m-auto mt-6 px-8 w-full md:w-1/2 text-white text-sm text-center m-auto"
    >
      Við munum bjóða upp á girnilegt hlaðborð frá Austur-Indía Fjélaginu
    </h1>
  </div>
  <div class="flex flex-col">
    <div class="text-center text-white text-sm w-64 mx-auto my-4">
      <div>
        <div>Aðalréttur:</div>
      </div>
    </div>
    <div class="m-auto">
      <MenuItem icon="fa-drumstick-bite" />
      <MenuItem icon="fa-bowl-rice" />
      <MenuItem icon="fa-bowl-food" color="text-emerald-600" />
    </div>
  </div>
  <div class="flex flex-col">
    <div class="text-center text-white text-sm w-64 mx-auto my-4">
      <div>
        <div>Og fyrir þau sem vilja grænmetis:</div>
      </div>
    </div>
    <div class="m-auto">
      <MenuItem icon="fa-bowl-rice" color="text-emerald-600" />
      <MenuItem icon="fa-plate-wheat" color="text-emerald-600" />
      <MenuItem icon="fa-bowl-food" color="text-emerald-600" />
    </div>
  </div>
  <div class="m-4">
    <Button
      on:click={scrollToDessert}
      text="Næs, er eftirréttur líka?"
      bgColor="bg-emerald-500"
    />
  </div>
</Section>
