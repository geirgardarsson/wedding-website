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

  function handleChange(value: string) {
    selectedOption = value;
    otherSelected = value === "other";
  }

  onMount(() => {
    var { guest } = get(guestStore);

    if (guest?.diet) {
      handleChange(guest.diet);
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
            on:change={() => handleChange(option.value)}
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
            text=""
            borderColor="border-sky-600"
            textColor="text-sky-600"
            placeholder="annað"
            placeholderColor="border-sky-100"
            additionalClasses="mx-0 w-full"
          />
        </div>
      {/if}
    </div>
    <div class="text-xs flex">
      <Button
        extraStyles="mr-2"
        text="Hvert á ég að mæta?"
        bgColor="bg-pink-400"
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
