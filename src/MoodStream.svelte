<script>
  import Love from "./emotions/Love.svelte";
  import Excited from "./emotions/Excited.svelte";
  import Joy from "./emotions/Joy.svelte";
  import Sad from "./emotions/Sad.svelte";
  import Fear from "./emotions/Fear.svelte";
  import Angry from "./emotions/Angry.svelte";

  export let data;
  const emotions = [
    { id: 0, name: "Love", component: Love },
    { id: 1, name: "Excited", component: Excited },
    { id: 2, name: "Joy", component: Joy },
    { id: 3, name: "Sad", component: Sad },
    { id: 4, name: "Fear", component: Fear },
    { id: 5, name: "Angry", component: Angry }
  ];

  let components = [];

  const createRandomMood = () => {
    const component = emotions[Math.floor(Math.random() * 6)].component;
    const size = Math.floor(Math.random() * 25) + 50;
    const left = Math.floor(Math.random() * 100);
    return {
      id: `thing-${Math.random() * 10001020}`,
      created: Date.now(),
      get age() {
        return (Date.now() - this.created) / 1000;
      },
      size,
      left,
      component
    };
  };

  const emotion = createRandomMood();

  setTimeout(() => {
    components.push(emotion);
  }, 1000);

  setInterval(() => {
    components = components.filter(component => component.age < 10);

    if (Math.floor(Math.random() * 100) === 1) {
      const emotion = createRandomMood();
      components.push(emotion);
    }
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
  {#each components as component (component.id)}
    <div
      class="emotion"
      data-age={component.age}
      style="left: {component.left}%; top: 100%; opacity: {component.age > 3 ? 0 : 1};
      transform: translate(0, {component.age > 3 ? -160 : 0}vh)">
      <svelte:component
        this={component.component}
        width={component.size}
        height={component.size} />
    </div>
  {/each}
</div>
