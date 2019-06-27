<script>
  import Map from "./Map.svelte";
  import Mood from "./Mood.svelte";
  import { store } from "./store.js";
</script>

<div style="position: relative;">
  <Mood />
  <Map colors={$store} />
</div>
