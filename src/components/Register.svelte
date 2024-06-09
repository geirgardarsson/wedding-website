<script lang="ts">
  import Button from "./Button.svelte";
  import TextInput from "./TextInput.svelte";
  import Section from "./Section.svelte";
  import { onMount } from "svelte";
  import { guestStore, spouseStore } from "../stores";
  import { get } from "svelte/store";

  let firstName = "";
  let lastName = "";
  let isRegistered = false;
  let isLoading = false;

  onMount(() => {
    var { guest } = get(guestStore);

    if (guest) {
      setGuestData(guest);
    }
  });

  function setGuestData(guest: StoredGuest) {
    isRegistered = true;
    firstName = guest.firstName;
    lastName = guest.lastName;
  }

  async function register() {
    if (!firstName) {
      return;
    }

    isLoading = true;

    const res = await fetch("https://wedding-api-hxzp.onrender.com/api/guest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        diet: "normal",
        going: true,
      }),
    });

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

    spouseStore.set({
      spouse: null,
      guestId: result.id,
    });

    setGuestData(result);

    isLoading = false;
  }

  function scrollToFood() {
    const foodSection = document.getElementById("food-section");

    if (!foodSection) {
      return;
    }

    foodSection.scrollIntoView({ behavior: "smooth" });
  }

  function handleKeyup(e: { preventDefault: () => void; key: string }) {
    e.preventDefault();

    if (e.key == "Enter") {
      register();
    }
  }
</script>

<Section sectionId="rsvp-section" backgroundColor="bg-violet-400">
  <div class="h-screen w-full md:w-96 m-auto flex flex-col">
    {#if isRegistered}
      <h1 class="text-center text-xl text-white m-auto">
        Hlökkum til að sjá þig {firstName}!!
      </h1>
    {:else}
      <div class="m-auto flex flex-col m-auto justify-center">
        <TextInput
          bind:text={firstName}
          placeholder="Fornafn"
          textColor="text-violet-500"
          borderColor="border-violet-500"
          placeholderColor="placeholder:text-violet-300"
          on:keyup={handleKeyup}
        />
        <TextInput
          bind:text={lastName}
          placeholder="Eftirnafn"
          textColor="text-violet-500"
          borderColor="border-violet-500"
          placeholderColor="placeholder:text-violet-300"
          on:keyup={handleKeyup}
        />
      </div>
    {/if}
    <div class="my-auto mx-6">
      <Button
        on:click={isRegistered ? scrollToFood : register}
        text={isRegistered ? "Hlakka til að mæta!!" : "Ég ætla að mæta!!"}
        bgColor="bg-emerald-500"
        {isLoading}
      />
    </div>
  </div>
</Section>
