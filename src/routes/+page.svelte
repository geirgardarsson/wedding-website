<script>
  import Dessert from "../components/Dessert.svelte";
  import GiftList from "../components/GiftList.svelte";
  import Landing from "../components/Landing.svelte";
  import Location from "../components/Location.svelte";
  import Menu from "../components/Menu.svelte";
  import Register from "../components/Register.svelte";
  import RegisterSpouse from "../components/RegisterSpouse.svelte";
  import SelectFood from "../components/SelectFood.svelte";
  import SelectSpouseFood from "../components/SelectSpouseFood.svelte";
</script>

<div class="snap-y snap-mandatory h-screen w-screen mx:auto overflow-x-hidden">
  <Landing />
  <Register />
  <SelectFood />
  <RegisterSpouse />
  <SelectSpouseFood />
  <Location />
  <Menu />
  <Dessert />
  <!-- <GiftList  -->
</div>
