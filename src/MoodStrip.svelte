<script>
  import { emotionNames, emotionToColor, buildColor } from "./store.js";
  export let mapData;
  let gradient = "";
  let isLegendVisible = false;

  function toggleLegend() {
    isLegendVisible = !isLegendVisible;
  }

  function calcPercentage(emotion, total) {
    if (total == 0) {
      return 0;
    }

    return Math.round((emotion || 0) / total) * 100;
  }

  $: {
    gradient = mapData.globalEmotion.gradient;
  }
</script>

<style>
  .mood-strip {
    height: 30px;
    background: transparent;
    opacity: 0.8;
  }

  .mood-legend {
    position: absolute;
    top: 29px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 2;
    padding: 21px;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.8);
  }

  .mood-colors-list {
    display: flex;
    flex-direction: column;
  }

  .mood-colors-item + .mood-colors-item {
    margin-top: 18px;
  }

  .mood-colors-item {
    flex-grow: 1;
    padding: 18px;
    background: red;
    color: #333;
    display: flex;
  }

  .mood-colors-item.fear {
    color: #fff;
  }

  .mood-colors-item .mood-colors-item-name {
    flex-grow: 1;
  }
</style>

<div
  class="mood-strip"
  style={'background:' + gradient}
  on:click={toggleLegend} />

{#if isLegendVisible}
  <div class="mood-legend" on:click={toggleLegend}>
    <h2>Global Mood:</h2>
    <div class="mood-colors-list">
      {#each emotionNames as name, i}
        <div
          class={'mood-colors-item ' + name.toLowerCase()}
          style={'background-color: ' + buildColor(emotionToColor[i])}>
          <div class="mood-colors-item-name">{name}</div>
          <div>
             {calcPercentage(mapData.globalEmotion.emotions[i], mapData.globalEmotion.total)}%
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}
