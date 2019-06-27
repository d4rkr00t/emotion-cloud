<script>
  import Map from "./Map.svelte";
  import Mood from "./Mood.svelte";
  import { store } from "./store.js";
</script>

<div style="position: relative;">
  <Map colors={$store} />
  <Mood />
</div>
