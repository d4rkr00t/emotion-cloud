import { readable, get } from "svelte/store";
import { subscribeToEmotions } from "./db";

let locations = ["AU", "IN", "JP", "NL", "PH", "TR", "UA", "US"];

let offices = locations.map(id => ({
  id,
  color: "rgba(129,129,129,1)",
  label: "neutral",
  emotions: {},
  totalEmotions: 0
}));

function getColorForEmotions(emotions, total) {
  let strongest = Object.keys(emotions).reduce(
    (acc, emotion) => {
      if (emotions[emotion] > acc.val) {
        return { val: emotions[emotion], id: emotion };
      }
      return acc;
    },
    { val: -Infinity }
  );

  if (strongest.val > -Infinity) {
    let strength = strongest.val / total;

    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);

    return `rgba(${r},${g},${b},${strength})`;
  }
}

function processEmotion(store, emotion) {
  let recentEmotions = store.recentEmotions.slice(1);
  recentEmotions.push(emotion);

  let offices = store.offices;
  let office = offices[emotion.location];

  if (office) {
    office.totalEmotions += 1;
    office.emotions[emotion.emotion] =
      (office.emotions[emotion.emotion] || 0) + 1;

    office.color = getColorForEmotions(office.emotions, office.totalEmotions);
  }

  return { recentEmotions, offices };
}

export const store = readable({ offices, recentEmotions: [] }, function start(
  set
) {
  let val = get(store);
  subscribeToEmotions(emotions => {
    let newState = emotions.reduce(
      (acc, emotion) => processEmotion(acc, emotion),
      val
    );
    set(newState);
  });
});
