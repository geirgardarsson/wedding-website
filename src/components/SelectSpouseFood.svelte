<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import Section from "./Section.svelte";
  import TextInput from "./TextInput.svelte";
  import { get } from "svelte/store";
  import { guestStore, spouseStore } from "../stores";

  let spouseOptions = [
    {
      text: "Bara venjulegt takk",
      value: "normal",
    },
    {
      text: "Vegan",
      value: "vegan",
    },
    {
      text: "Grænmetis",
      value: "vegetarian",
    },
    {
      text: "Eitthvað annað?",
      value: "other",
    },
  ];

  let selectedSpouseOption = "";
  let otherSelectedSpouse = false;
  let otherDietSpouse = "";
  let isLoading = false;
  let guestId = null;
  let spouseName: string = "";

  function scrollToLocation() {
    const foodSection = document.getElementById("location");

    if (!foodSection) {
      return;
    }

    foodSection.scrollIntoView({ behavior: "smooth" });
  }

  function handleRadioSpouseChange(value: string) {
    let isOther =
      value !== "normal" && value !== "vegan" && value !== "vegetarian";

    if (isOther) {
      selectedSpouseOption = "other";
      otherSelectedSpouse = true;
      otherDietSpouse = value === "other" ? "" : value;
      return;
    }
    selectedSpouseOption = value;
    otherSelectedSpouse = value === "other";

    // will call the updateFood function when the user types in the text input
    if (otherSelectedSpouse) {
      return;
    }

    var { spouse } = get(spouseStore);

    if (spouse) {
      updateFood(spouse, value);
    }
  }

  function handleOtherSpouseChange(value: string) {
    var { spouse } = get(spouseStore);

    if (spouse) {
      updateFood(spouse, value);
    }
  }

  async function updateFood(spouse: StoredGuest, value: string) {
    if (spouse.diet === value) {
      return;
    }

    isLoading = true;

    const res = await fetch(
      `https://wedding-api-hxzp.onrender.com/api/guest/${spouse.id}?food=${value}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      isLoading = false;
      console.error(res);
      return;
    }

    const result = await res.json();

    var { guest } = get(guestStore);

    spouseStore.set({
      spouse: {
        ...result,
      },
      guestId: guest.id,
    });

    isLoading = false;
  }

  onMount(() => {
    var { spouse } = get(spouseStore);

    if (spouse) {
      spouseName = spouse.firstName;
    }

    if (spouse?.diet) {
      handleRadioSpouseChange(spouse.diet);
    }
  });
</script>

<Section sectionId="spouse-food-section" backgroundColor="bg-sky-400">
  <div class="flex flex-col justify-around mx-6 h-full">
    <div class="nes-container is-rounded bg-white">
      <h2 class="text-center text-sm">
        {`Láttu okkur vita ef ${spouseName ?? "maki"} er með einhverjar séróskir um mat`}
      </h2>
    </div>
    <div>
      {#each spouseOptions as spouseOption}
        <div class="text-sm">
          <input
            class="hidden peer"
            type="radio"
            id={`${spouseOption.value}-2`}
            name="spouse-food"
            value={spouseOption.value}
            checked={selectedSpouseOption === spouseOption.value}
            on:change={(e) => handleRadioSpouseChange(spouseOption.value)}
          />
          <label
            class="btn-secondary bg-emerald-200 peer-checked:bg-emerald-400"
            for={`${spouseOption.value}-2`}>{spouseOption.text}</label
          >
        </div>
      {/each}
      {#if otherSelectedSpouse}
        <div class="my-0">
          <TextInput
            text={otherDietSpouse}
            borderColor="border-sky-600"
            textColor="text-sky-600"
            placeholder="annað"
            placeholderColor="border-sky-100"
            additionalClasses="mx-0 w-full"
            on:blur={(e) => handleOtherSpouseChange(e.target?.value)}
          />
        </div>
      {/if}
    </div>
    <div class="text-xs flex">
      <Button
        extraStyles="mr-2"
        text="Hvert á ég að mæta?"
        bgColor="bg-pink-400"
        {isLoading}
        on:click={scrollToLocation}
      />
    </div>
  </div>
</Section>
