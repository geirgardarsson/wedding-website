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
  let vegan = false;
  let hasGluten = false;

  function setDetails(
    visible: boolean,
    course?: {
      name: string;
      description: string;
      vegan: boolean;
      hasGluten: boolean;
    }
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
    vegan = course.vegan;
    hasGluten = course.hasGluten;
  }

  const courses = {
    main1: {
      name: "Lagan ka Murgh",
      description:
        "Kjúklingur í kryddaðri rjómamarineringu, grillaður í tandoori ofni",
      hasGluten: false,
      vegan: false,
    },
    main2: {
      name: "Narial Ka Gosht",
      description: "Lamb í kryddaðri kókossósu, með kanil, kardimommu og negul",
      hasGluten: false,
      vegan: false,
    },
    main3: {
      name: "Chana Masala",
      description:
        "Kjúklingabaunir með tómötum, engifer, lauk, hvítlauk og öðrum kryddum",
      hasGluten: false,
      vegan: true,
    },
    veggie1: {
      name: "Baigan Rajawadi",
      description: "Kolagrillað eggaldin í kryddaðri sósu úr tómötum",
      hasGluten: false,
      vegan: true,
    },
    veggie2: {
      name: "Aloo Dum masala",
      description: "Kartöflur eldaðar með cumin, kóríander, lauk og hvítlauk",
      hasGluten: false,
      vegan: true,
    },
  };
</script>

<Section
  sectionId="menu"
  backgroundColor="bg-orange-400"
  additionalClasses="flex-col h-screen justify-between"
>
  {#if detailsVisible}
    <button
      on:click={() => setDetails(false)}
      class="fixed-center menu-details w-3/4 h-3/4 max-w-96 rounded text-amber-950 flex flex-col p-4 justify-around"
    >
      <h2 class="m-auto bg-orange-100 p-2">{courseName}</h2>
      <img
        class="w-24 h-24 m-auto"
        src={austurIndia}
        alt="Austur-Indía Fjélagið"
      />
      <p class="m-auto text-sm">{courseDescription}</p>
      <div class="flex w-full">
        <div class="m-auto">
          {#if vegan}<i class="fa-solid fa-seedling text-green-600 text-xl"
            ></i>{/if}
          {#if !hasGluten}
            <div class="fa-stack small">
              <i class="fa-solid fa-wheat-awn" style="color:brown"></i>
              <i class="fa-solid fa-ban fa-stack-2x" style="color:Tomato"></i>
            </div>
          {/if}
        </div>
      </div>
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
        toggleFunction={() => setDetails(true, courses.main3)}
        icon="fa-bowl-food"
        color="text-emerald-600"
      />
    </div>
  </div>
  <div class="text-xs text-center px-2 text-white mt-4">
    Ásamt hrísgrjónum, raitha sósu og naan brauði
  </div>
  <div class="m-4 mx-auto w-80">
    <Button
      on:click={scrollToDessert}
      text="Næs, er eftirréttur?"
      bgColor="bg-emerald-500"
    />
  </div>
</Section>
