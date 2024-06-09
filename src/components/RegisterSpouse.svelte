<script lang="ts">
  import Button from "./Button.svelte";
  import TextInput from "./TextInput.svelte";
  import Section from "./Section.svelte";
  import { onMount } from "svelte";
  import { spouseStore, guestStore } from "../stores";
  import { get } from "svelte/store";

  let firstName = "";
  let lastName = "";
  let isRegistered = false;
  let guestId = null;
  let error = false;
  let isLoading = false;

  onMount(() => {
    var { spouse, guestId } = get(spouseStore);
    var { guest } = get(guestStore);
    console.log(guestId);

    if (guest) {
      setGuestData(guest.id);
    }

    if (spouse) {
      setSpouseData(spouse, guestId);
    }
  });

  function setGuestData(guestId: number | null) {
    console.log(guestId);
    guestId = guestId;
  }

  function setSpouseData(spouse: StoredGuest, guestId: number | null) {
    isRegistered = true;
    firstName = spouse.firstName;
    lastName = spouse.lastName;
  }

  async function register() {
    isLoading = true;
    var { guest } = get(guestStore);

    if (!guest) {
      error = true;
      isLoading = false;
      return;
    }

    if (!firstName) {
      isLoading = false;
      return;
    }

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
        guestId: guest.id,
      }),
    });

    const result = await res.json();

    spouseStore.set({
      spouse: {
        ...result,
      },
      guestId: result.guestId,
    });

    setSpouseData(result, result.guestId);

    isLoading = false;
  }

  function scrollToFood() {
    const foodSection = document.getElementById("spouse-food-section");

    if (!foodSection) {
      return;
    }

    foodSection.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToRegisterMyself() {
    const rsvpSection = document.getElementById("rsvp-section");

    if (!rsvpSection) {
      return;
    }

    rsvpSection.scrollIntoView({ behavior: "smooth" });
  }

  function handleKeyup(e: { preventDefault: () => void; key: string }) {
    e.preventDefault();

    if (e.key == "Enter") {
      register();
    }
  }
</script>

<Section sectionId="spouse-rsvp-section" backgroundColor="bg-purple-400">
  <div class="h-screen w-full md:w-96 m-auto flex flex-col">
    {#if isRegistered}
      <h1 class="text-center text-xl text-white m-auto">
        Takk fyrir að mæta {firstName}!!
      </h1>
    {:else}
      <div class="m-auto flex flex-col m-auto justify-center">
        <TextInput
          bind:text={firstName}
          placeholder="Fornafn maka"
          textColor="text-violet-500"
          borderColor="border-violet-500"
          placeholderColor="placeholder:text-violet-300"
          on:keyup={handleKeyup}
        />
        <TextInput
          bind:text={lastName}
          placeholder="Eftirnafn maka"
          textColor="text-violet-500"
          borderColor="border-violet-500"
          placeholderColor="placeholder:text-violet-300"
          on:keyup={handleKeyup}
        />
      </div>
    {/if}
    <div class="m-auto mx-6 mb-12">
      <Button
        on:click={isRegistered ? scrollToFood : register}
        text={isRegistered
          ? `${firstName} hlakkar til að mæta!!`
          : "Maki ætlar að mæta!!"}
        bgColor="bg-pink-500"
        {isLoading}
      />
    </div>
    {#if error}
      <div class="h-screen w-full md:w-96 m-auto flex flex-col">
        <h1 class="text-center text-xl text-white m-auto">
          Þú verður að skrá sjálfan þig áður en þú skráir maka!
        </h1>
        <div class="m-auto mx-6">
          <Button
            on:click={scrollToRegisterMyself}
            text="Okei þá"
            bgColor="bg-pink-500"
          />
        </div>
      </div>
    {/if}
  </div></Section
>
