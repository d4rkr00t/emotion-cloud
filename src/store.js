import { readable } from "svelte/store";

export const store = readable(
  [
    {
      id: "AU",
      color:
        "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    }
  ],
  function start(set) {
    const interval = setInterval(() => {
      set([
        {
          id: "AU",
          color:
            "#" +
            (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
        }
      ]);
    }, 2000);

    return function stop() {
      clearInterval(interval);
    };
  }
);
