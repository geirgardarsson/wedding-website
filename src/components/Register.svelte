<script>
  import Button from "./Button.svelte";
  import TextInput from "./TextInput.svelte";
  import Section from "./Section.svelte";

  let firstName = "";
  let lastName = "";

  function register() {
    // todo plögga api hér
    console.log(`Velkomin(n) ${firstName} ${lastName}!!`);
  }

  /**
   * @param {{ preventDefault: () => void; key: string; }} e
   */
  function handleKeyup(e) {
    e.preventDefault();

    if (e.key == "Enter") {
      register();
    }

  }
</script>

<Section 
  sectionId="rsvp-section" 
  backgroundColor="bg-violet-400">
  <div class="h-screen w-full md:w-96 m-auto flex flex-col">
    <div class="m-auto mb-0 flex flex-col">
      <TextInput
        bind:text={firstName}
          placeholder="Fornafn"
          textColor="text-violet-500"
          borderColor="border-violet-500"
          placeholderColor="placeholder:text-violet-300"
          on:keyup={handleKeyup} />
      <TextInput
        bind:text={lastName}
          placeholder="Eftirnafn"
          textColor="text-violet-500"
          borderColor="border-violet-500"
          placeholderColor="placeholder:text-violet-300"
          on:keyup={handleKeyup} />
    </div>
    <div class="m-auto">
      <Button on:click={register} text="Ég ætla að mæta!!" bgColor="bg-emerald-500" />
    </div>
  </div>
</Section>
