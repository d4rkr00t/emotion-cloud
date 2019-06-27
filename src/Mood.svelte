<script>
  import { slide } from 'svelte/transition';

  import Love from './emotions/Love.svelte';
  import Excited from './emotions/Excited.svelte';
  import Joy from './emotions/Joy.svelte';
  import Sad from './emotions/Sad.svelte';
  import Fear from './emotions/Fear.svelte';
  import Angry from './emotions/Angry.svelte';
  import  { addEmotion } from './db.js';
  
  const emotionSize = '24px'

  let selectedEmotion = { component: Joy };

  const emotions = [
    { id: 3, name: 'Love',   component: Love   },
    { id: 2, name: 'Excited', component: Excited },
    { id: 1, name: 'Joy',  component: Joy  },
    { id: 6, name: 'Sad',  component: Sad  },
    { id: 5, name: 'Fear',  component: Fear  },
    { id: 4, name: 'Angry',  component: Angry  },
  ];

  let moodPickerOpen = false;
  function toggleMoodPicker() {
    moodPickerOpen = !moodPickerOpen;
  }

  function handleMoodSelection(event, emotionId) {
    console.log(`You picked: ${emotionId}`);
    selectedEmotion = emotions.find(emo => emo.id === emotionId);
    moodPickerOpen = false;
    addEmotion({ emotion: emotionId })
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
        <button title={emotion.name} on:click="{(e) => handleMoodSelection(e, emotion.id)}">
          <svelte:component this={emotion.component} width={emotionSize} height={emotionSize} />
        </button>  
      {/each}
    </div>
  {/if}
  
  <button class="mood-toggle" on:click={toggleMoodPicker}>
    <svelte:component this={selectedEmotion.component} width="34px" height="34px" />
  </button>
</div>
