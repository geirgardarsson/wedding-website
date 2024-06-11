<script lang="ts">
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

  let detailsVisible = false;
  let courseName = "";
  let courseDescription = "";

  function setDetails(
    visible: boolean,
    course?: { name: string; description: string }
  ) {
    detailsVisible = visible;

    if (!course) {
      return;
    }

    courseName = course.name;
    courseDescription =
      course.description === ""
        ? "Matseðillinn verður staðfestur innan skamms"
        : course.description;
  }

  const courses = {
    main1: {
      name: "Tandori kjúklingur á teini",
      description: "",
    },
    main2: {
      name: "Lambaréttur",
      description: "",
    },
    main3: {
      name: "Chana Masala",
      description: "",
    },
    veggie1: {
      name: "Grænmetisréttur 1",
      description: "",
    },
    veggie2: {
      name: "Grænmetisréttur 2",
      description: "",
    },
    veggie3: {
      name: "Chana Masala",
      description: "",
    },
  };
</script>

<Section
  sectionId="menu-section"
  backgroundColor="bg-orange-400"
  additionalClasses="flex-col h-screen justify-between"
>
  {#if detailsVisible}
    <button
      on:click={() => setDetails(false)}
      class="fixed-center menu-details w-3/4 h-3/4 max-w-96 rounded text-amber-950 flex flex-col p-4 justify-around"
    >
      <h2 class="m-auto">{courseName}</h2>
      <img
        class="w-24 h-24 m-auto"
        src={austurIndia}
        alt="Austur-Indía Fjélagið"
      />
      <p class="m-auto">{courseDescription}</p>
    </button>
  {/if}
  <div class="flex flex-col mx-auto mt-4 md:w-2/3">
    <div class="nes-container is-rounded !mx-6 mt-4 !p-4 bg-white">
      <h1 class="w-full text-sm text-center m-auto">
        Við munum bjóða upp á girnilegt hlaðborð frá Austur-Indía Fjélaginu
      </h1>
    </div>
  </div>
  <div class="flex flex-col">
    <div class="text-center text-white text-sm w-64 mx-auto my-4">
      <div>
        <div>Aðalréttur:</div>
      </div>
    </div>
    <div class="m-auto">
      <MenuItem
        toggleFunction={() => setDetails(true, courses.main1)}
        icon="fa-drumstick-bite"
      />
      <MenuItem
        toggleFunction={() => setDetails(true, courses.main2)}
        icon="fa-bowl-rice"
      />
      <MenuItem
        toggleFunction={() => setDetails(true, courses.main3)}
        icon="fa-bowl-food"
        color="text-emerald-600"
      />
    </div>
  </div>
  <div class="flex flex-col">
    <div class="text-center text-white text-sm w-64 mx-auto my-4">
      <div>
        <div>Og fyrir þau sem vilja grænmetis:</div>
      </div>
    </div>
    <div class="m-auto">
      <MenuItem
        toggleFunction={() => setDetails(true, courses.veggie1)}
        icon="fa-bowl-rice"
        color="text-emerald-600"
      />
      <MenuItem
        toggleFunction={() => setDetails(true, courses.veggie2)}
        icon="fa-plate-wheat"
        color="text-emerald-600"
      />
      <MenuItem
        toggleFunction={() => setDetails(true, courses.veggie3)}
        icon="fa-bowl-food"
        color="text-emerald-600"
      />
    </div>
  </div>
  <div class="m-4 mx-auto w-96">
    <Button
      on:click={scrollToDessert}
      text="Næs, er eftirréttur líka?"
      bgColor="bg-emerald-500"
    />
  </div>
</Section>
