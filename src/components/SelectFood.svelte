<script>
  import Button from "./Button.svelte";
  import Section from "./Section.svelte";
  import TextInput from "./TextInput.svelte";

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

  function scrollToLocation() {
    const foodSection = document.getElementById("location");

    if (!foodSection) {
      return;
    }

    foodSection.scrollIntoView({ behavior: "smooth" });
  }
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
          />
          <label
            class="btn-secondary bg-emerald-200 peer-checked:bg-emerald-400"
            for={option.value}>{option.text}</label
          >
        </div>
      {/each}
    </div>
    <div>
      <TextInput
        text=""
        borderColor="border-sky-600"
        textColor="text-sky-600"
        placeholder="annað"
        placeholderColor="border-sky-100"
        additionalClasses="mx-0 w-full"
      />
    </div>
    <div>
      <Button
        text="Hvert á ég að mæta?"
        bgColor="bg-pink-400"
        on:click={scrollToLocation}
      />
    </div>
  </div>
</Section>
