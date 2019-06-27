<script>
  import Map from "./Map.svelte";
  import Mood from "./Mood.svelte";
  import MoodStrip from "./MoodStrip.svelte";
  import { store } from "./store.js";
</script>

<style>
  .app {
    position: relative;
    display: flex;
    background: rgba(80, 80, 80, 1);
    flex-direction: column;
    height: 100%;
  }
</style>

<div class="app">
  <MoodStrip mapData={$store} />
  <Map mapData={$store} />
  <Mood />
</div>
