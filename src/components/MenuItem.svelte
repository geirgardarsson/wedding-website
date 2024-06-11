<script>
  export let icon;
  export let color = "text-pink-600";
  export let toggleFunction;
</script>

<button on:click={toggleFunction}>
  <div class="retro-item flex flex-col">
    <div
      class="ml-2 mt-2 bg-cyan-200 p-2 h-10 w-10 flex border-2 border-gray-400 rounded-md"
    >
      <i class="fa-solid {icon} text-xl {color} m-auto"></i>
    </div>
    <div class="w-6 m-2 mb-px border-b-2 border-gray-400 rounded-full"></div>
    <div class="w-14 m-2 my-px border-b-2 border-gray-400 rounded-full"></div>
    <div class="w-14 m-2 mt-px border-b-2 border-gray-400 rounded-full"></div>
  </div>
</button>
