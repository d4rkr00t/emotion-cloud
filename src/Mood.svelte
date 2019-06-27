<script>
  import { slide } from 'svelte/transition';

  import Love from './emotions/Love.svelte';
  import Excited from './emotions/Excited.svelte';
  import Joy from './emotions/Joy.svelte';
  import Sad from './emotions/Sad.svelte';
  import Fear from './emotions/Fear.svelte';
  import Angry from './emotions/Angry.svelte';
  
  const emotionSize = '24px'

  let moodPickerOpen = false;
  function toggleMoodPicker() {
    moodPickerOpen = !moodPickerOpen;
  }

  function handleMoodSelection(event, emotion) {
    console.log(`You picked: ${emotion}`);
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
</style>

<div class="mood-wrapper">
  {#if moodPickerOpen}
    <div transition:slide="{{ delay: 250, duration: 300 }}">
      <button on:click="{(e) => handleMoodSelection(e, 'love')}"><Love width={emotionSize} height={emotionSize} /></button>
      <button on:click="{(e) => handleMoodSelection(e, 'excited')}"><Excited width={emotionSize} height={emotionSize} /></button>
      <button on:click="{(e) => handleMoodSelection(e, 'joy')}"><Joy width={emotionSize} height={emotionSize} /></button>
      <button on:click="{(e) => handleMoodSelection(e, 'sad')}"><Sad width={emotionSize} height={emotionSize} /></button>
      <button on:click="{(e) => handleMoodSelection(e, 'fear')}"><Fear width={emotionSize} height={emotionSize} /></button>
      <button on:click="{(e) => handleMoodSelection(e, 'angry')}"><Angry width={emotionSize} height={emotionSize} /></button>
    </div>
  {/if}
  
  <button on:click={toggleMoodPicker}>Pick Mood</button>
</div>
