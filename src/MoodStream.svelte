<script>
  import Love from "./emotions/Love.svelte";
  import Excited from "./emotions/Excited.svelte";
  import Joy from "./emotions/Joy.svelte";
  import Sad from "./emotions/Sad.svelte";
  import Fear from "./emotions/Fear.svelte";
  import Angry from "./emotions/Angry.svelte";

  export let recentEmotions = [];
  const emotions = [
    { id: 0, name: "Love", component: Love },
    { id: 1, name: "Excited", component: Excited },
    { id: 2, name: "Joy", component: Joy },
    { id: 3, name: "Sad", component: Sad },
    { id: 4, name: "Fear", component: Fear },
    { id: 5, name: "Angry", component: Angry }
  ];

  let components = recentEmotions;

  $: {
    components = recentEmotions;
  }

  setInterval(() => {
    components = components.filter(component => component.age < 7);
  }, 10);
</script>

<style>
  #mood-stream {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .emotion {
    position: absolute;
    pointer-events: none;
    transition: transform cubic-bezier(0.81, 0.07, 1, 1) 2000ms,
      opacity cubic-bezier(0.81, 0.07, 1, 1) 2000ms;
  }
</style>

<div id="mood-stream">
  {#each components as component (component.created)}
    <div
      class="emotion"
      data-age={component.age}
      style="left: {component.left}%; top: 100%; opacity: {component.age > 1 ? 0 : 1};
      transform: translate(0, {component.age > 1 ? -160 : 0}vh)">
      <svelte:component
        this={emotions[component.emotion].component}
        width={component.size}
        height={component.size} />
    </div>
  {/each}
</div>
