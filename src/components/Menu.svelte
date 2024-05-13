<script>
  import austurIndia from '$lib/austurindia.png'
  import MenuItem from './MenuItem.svelte';
</script>

<div id="menu-section" class="screen-section bg-cyan-400 flex-col">
  <div class="flex flex-col mx-auto my-6">
    <img class="w-24 h-24 m-auto" alt="austurindiafjelagid" src={austurIndia} />
    <h1 class="m-auto mt-6 px-8 w-full md:w-1/2 text-white text-center m-auto">Við munum bjóða upp á girnilegt hlaðborð frá Austur-Indía Fjélaginu</h1>
  </div>
  <div class="flex flex-col mt-4">
    <div class="text-center text-white text-sm w-64 mx-auto my-4">
      <div>
        <div>Aðalréttur:</div>
      </div>
    </div>
    <div class="m-auto">
      <MenuItem icon="fa-drumstick-bite" />
      <MenuItem icon="fa-bowl-rice" />
      <MenuItem icon="fa-bowl-food" color="text-emerald-600" />
    </div>
  </div>
  <div class="flex flex-col mt-8">
    <div class="text-center text-white text-sm w-64 mx-auto my-4">
      <div>
        <div>Og fyrir þau sem vilja grænmetis:</div>
      </div>
    </div>
    <div class="m-auto">
      <MenuItem icon="fa-bowl-rice" color="text-emerald-600" />
      <MenuItem icon="fa-plate-wheat" color="text-emerald-600" />
      <MenuItem icon="fa-bowl-food" color="text-emerald-600" />
    </div>
  </div> 
</div>
