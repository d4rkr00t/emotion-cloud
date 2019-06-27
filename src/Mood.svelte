<script>
  import { slide } from "svelte/transition";

  import Flag from "./Flag.svelte";
  import GetLocation from "./emotions/GetLocation.svelte";
  import Love from "./emotions/Love.svelte";
  import Excited from "./emotions/Excited.svelte";
  import Joy from "./emotions/Joy.svelte";
  import Sad from "./emotions/Sad.svelte";
  import Fear from "./emotions/Fear.svelte";
  import Angry from "./emotions/Angry.svelte";

  import { addEmotion, currentTimestamp } from "./db.js";
  import { determineLocation } from "./location.js";

  const emotionSize = "24px";

  const cachedOffice = window.localStorage.getItem("emotion-cloud.office");
  let officeLocation = (cachedOffice && JSON.parse(cachedOffice)) || undefined;

  function handleLocation() {
    if (officeLocation) {
      return;
    }

    navigator.geolocation.getCurrentPosition(geolocation => {
      const location = determineLocation(geolocation.coords);
      window.localStorage.setItem(
        "emotion-cloud.office",
        JSON.stringify(location)
      );
      officeLocation = location;
    });
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
    const lock = window.localStorage.getItem('emotion-cloud.flood-lock');
    if (validateLock(lock)) {
      return;
    }

    moodPickerOpen = !moodPickerOpen;
  }


  function setLock() {
    window.localStorage.setItem('emotion-cloud.flood-lock', Date.now());
  }

  function validateLock(lockTime) {
    if (!lockTime || (Date.now() - lockTime) / 60 >= 1000) {
      window.localStorage.removeItem('emotion-cloud.flood-lock');
      return false;
    }

    return true;
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

    setLock();
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

  .emotion-wrapper button,
  .mood-toggle,
  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  .base-picker {
    position: relative;
  }

  .flag-wrapper {
    position: absolute;
    bottom: 9px;
    left: 25px;
    border: 1px solid #fff;
    border-radius: 100%;
    display: inline-block;
    width: 15px;
    height: 15px;
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
          class="emotion"
          on:click={e => handleMoodSelection(e, emotion.id)}>
          <svelte:component
            this={emotion.component}
            width={emotionSize}
            height={emotionSize} />
        </button>
      {/each}
    </div>
  {/if}

  {#if officeLocation}
    <div class="base-picker">
      <button class="mood-toggle" on:click={toggleMoodPicker}>
        <svelte:component
          this={selectedEmotion.component}
          animate={false}
          width="34px"
          height="34px" />
      </button>
      <span class="flag-wrapper">
        <Flag locationId={officeLocation.id} />
      </span>
    </div>
  {:else}
    <button on:click={handleLocation}>
      <GetLocation width="34px" height="34px" />
    </button>
  {/if}
</div>
