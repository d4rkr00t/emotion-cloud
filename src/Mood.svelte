<script>
  import { slide } from 'svelte/transition';

  import Love from './emotions/Love.svelte';
  import Excited from './emotions/Excited.svelte';
  import Joy from './emotions/Joy.svelte';
  import Sad from './emotions/Sad.svelte';
  import Fear from './emotions/Fear.svelte';
  import Angry from './emotions/Angry.svelte';
  
  const emotionSize = '24px'

  let selectedEmotion = { component: Joy };

  const emotions = [
    { name: 'Love',   component: Love   },
    { name: 'Excited', component: Excited },
    { name: 'Joy',  component: Joy  },
    { name: 'Sad',  component: Sad  },
    { name: 'Fear',  component: Fear  },
    { name: 'Angry',  component: Angry  },
  ];

  let moodPickerOpen = false;
  function toggleMoodPicker() {
    moodPickerOpen = !moodPickerOpen;
  }

  function handleMoodSelection(event, emotion) {
    console.log(`You picked: ${emotion}`);
    selectedEmotion = emotions.find(emo => emo.name === emotion);
    moodPickerOpen = false;
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

  .emotion-wrapper button, .mood-toggle {
    background: none;
    border: none;
    cursor: pointer;
  }
</style>

<div class="mood-wrapper">
  {#if moodPickerOpen}
    <div class="emotion-wrapper" transition:slide="{{ delay: 250, duration: 300 }}">
      {#each emotions as emotion}
        <button title={emotion.name} on:click="{(e) => handleMoodSelection(e, emotion.name)}">
          <svelte:component this={emotion.component} width={emotionSize} height={emotionSize} />
        </button>  
      {/each}
    </div>
  {/if}
  
  <button class="mood-toggle" on:click={toggleMoodPicker}>
    <svelte:component this={selectedEmotion.component} width="34px" height="34px" />
  </button>
</div>
