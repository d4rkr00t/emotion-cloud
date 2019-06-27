<script>
  import { slide } from "svelte/transition";

  import Love from "./emotions/Love.svelte";
  import Excited from "./emotions/Excited.svelte";
  import Joy from "./emotions/Joy.svelte";
  import Sad from "./emotions/Sad.svelte";
  import Fear from "./emotions/Fear.svelte";
  import Angry from "./emotions/Angry.svelte";
  import { addEmotion, currentTimestamp } from "./db.js";
  import { determineLocation } from "./location.js";

  const emotionSize = "24px";

  let officeLocation;
  function getOfficeLocation(pos) {
    const loc = determineLocation(pos.coords);
    officeLocation = loc;
  }

  let selectedEmotion = { component: Joy };

  const emotions = [
    { id: 0, name: "Love", component: Love },
    { id: 1, name: "Excited", component: Excited },
    { id: 2, name: "Joy", component: Joy },
    { id: 3, name: "Sad", component: Sad },
    { id: 4, name: "Fear", component: Fear },
    { id: 5, name: "Angry", component: Angry }
  ];

  let moodPickerOpen = false;
  function toggleMoodPicker() {
    if (!officeLocation && moodPickerOpen === false && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getOfficeLocation);
    }

    moodPickerOpen = !moodPickerOpen;
  }

  function handleMoodSelection(event, emotionId) {
    if (!officeLocation) {
      // TODO make this not suck
      return;
    }
    console.log(`You picked: ${emotionId}`);
    selectedEmotion = emotions.find(emo => emo.id === emotionId);
    moodPickerOpen = false;
    addEmotion({
      emotion: emotionId,
      location: officeLocation.id,
      created: currentTimestamp()
    });
  }
</script>

<style>
  .mood-wrapper {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #fff;
    border-radius: 4px;
    padding: 5px 8px;
  }

  p {
    margin: 0;
  }

  .emotion-wrapper button,
  .mood-toggle {
    background: none;
    border: none;
    cursor: pointer;
  }
</style>

<div class="mood-wrapper">
  {#if moodPickerOpen}
    <div
      class="emotion-wrapper"
      transition:slide={{ delay: 10, duration: 300 }}>
      {#each emotions as emotion}
        <button
          title={emotion.name}
          on:click={e => handleMoodSelection(e, emotion.id)}>
          <svelte:component
            this={emotion.component}
            width={emotionSize}
            height={emotionSize} />
        </button>
      {/each}
    </div>
  {/if}

  <button class="mood-toggle" on:click={toggleMoodPicker}>
    <svelte:component
      this={selectedEmotion.component}
      width="34px"
      height="34px" />
  </button>

  {#if officeLocation}{officeLocation.name}{/if}
</div>
