<script>
  let firstName = "";
  let lastName = "";
</script>

<div class="w-screen h-screen snap-start shrink-0 bg-violet-400 flex">
  <div class="h-screen w-full md:w-96 m-auto flex flex-col">
  <div class="m-auto mb-0 flex flex-col">
    <input class="text-input text-violet-500 border-violet-500 placeholder:text-violet-300" bind:value={firstName} placeholder="Fornafn" />
    <input class="text-input text-violet-500 border-violet-500 placeholder:text-violet-300" bind:value={lastName} placeholder="Eftirnafn" />
  </div>
  <div class="m-auto">
    <button class="btn-primary bg-emerald-500">Ég ætla að mæta!!</button>
  </div>
  </div>
</div>
