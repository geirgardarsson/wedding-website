<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  import Section from "./Section.svelte";
  import TextInput from "./TextInput.svelte";
  import { get } from "svelte/store";
  import { guestStore } from "../stores";

  let options = [
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

  let selectedOption = "";
  let otherSelected = false;
  let otherDiet = "";
  let isLoading = false;

  function scrollToLocation() {
    const foodSection = document.getElementById("location");

    if (!foodSection) {
      return;
    }

    foodSection.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToSpouse() {
    const spouseSection = document.getElementById("spouse-rsvp-section");

    if (!spouseSection) {
      return;
    }

    spouseSection.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToSpouse() {
    const spouseSection = document.getElementById("spouse-rsvp-section");

    if (!spouseSection) {
      return;
    }

    spouseSection.scrollIntoView({ behavior: "smooth" });
  }

  function handleRadioChange(value: string) {
    let isOther =
      value !== "normal" && value !== "vegan" && value !== "vegetarian";

    if (isOther) {
      selectedOption = "other";
      otherSelected = true;
      otherDiet = value === "other" ? "" : value;
      return;
    }
    selectedOption = value;
    otherSelected = value === "other";

    // will call the updateFood function when the user types in the text input
    if (otherSelected) {
      return;
    }

    var { guest } = get(guestStore);

    if (guest) {
      updateFood(guest, value);
    }
  }

  function handleOtherChange(value: string) {
    var { guest } = get(guestStore);

    if (guest) {
      updateFood(guest, value);
    }
  }

  async function updateFood(guest: StoredGuest, value: string) {
    if (guest.diet === value) {
      return;
    }

    isLoading = true;

    const res = await fetch(
      `https://wedding-api-hxzp.onrender.com/api/guest/${guest.id}?food=${value}`,
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

    guestStore.set({
      guest: {
        ...result,
      },
    });

    isLoading = false;
  }

  onMount(() => {
    var { guest } = get(guestStore);

    if (guest?.diet) {
      handleRadioChange(guest.diet);
    }
  });
</script>

<Section sectionId="food-section" backgroundColor="bg-sky-400">
  <div class="flex flex-col justify-around mx-6">
    <div class="nes-container is-rounded bg-white">
      <h2 class="text-center text-sm">
        Láttu okkur vita ef þú ert með einhverjar séróskir um mat
      </h2>
    </div>
    <div>
      {#each options as option}
        <div class="text-sm">
          <input
            class="hidden peer"
            type="radio"
            id={option.value}
            name="food"
            value={option.value}
            checked={selectedOption === option.value}
            on:change={() => handleRadioChange(option.value)}
          />
          <label
            class="btn-secondary bg-emerald-200 peer-checked:bg-emerald-400"
            for={option.value}>{option.text}</label
          >
        </div>
      {/each}
      {#if otherSelected}
        <div class="my-0">
          <TextInput
            text={otherDiet}
            borderColor="border-sky-600"
            textColor="text-sky-600"
            placeholder="annað"
            placeholderColor="border-sky-100"
            additionalClasses="mx-0 w-full"
            on:blur={(e) => handleOtherChange(e.target?.value)}
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
      <Button
        text="Skrá maka"
        bgColor="bg-pink-400"
        on:click={scrollToSpouse}
      />
    </div>
  </div>
</Section>
