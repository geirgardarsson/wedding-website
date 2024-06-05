<script>
  import Dessert from "../components/Dessert.svelte";
  import GiftList from "../components/GiftList.svelte";
  import Landing from "../components/Landing.svelte";
  import Location from "../components/Location.svelte";
  import Menu from "../components/Menu.svelte";
  import Register from "../components/Register.svelte";
  import SelectFood from "../components/SelectFood.svelte";
</script>

<div class="snap-y snap-mandatory h-screen w-screen mx:auto overflow-x-hidden">
  <Landing />
  <Register />
  <SelectFood />
  <Location />
  <Menu />
  <Dessert />
  <!-- <GiftList  -->
</div>
