import { readable, get } from "svelte/store";
import { subscribeToEmotions } from "./db";

let locations = {
  a12a50054f1a55944bb55f7e9f3a183f47ee23b6: "AU",
  "516b18ae43d11ffad821a01306fcfbb7b1a699a1": "NL",
  f32746ce7bfe8c5af880d05befcbb17b0cdb9d83: "US",
  d97e538e8a103f8023d27937519b26aa72d60455: "US",
  c0f9e76ae87a44d09f4ecc3638893280374d4d9d: "US",
  f346ebea1e75403daab6d606573cee04feb64890: "US",
  "133286126346044a11684c98194097d0d9e80aaf": "US",
  e301220d593fa1756ae0dfe89a6dba74164a4cb3: "US",
  "1f3533226035e0d6f3ac71ddf0d327bc9fc4f178": "US",
  fd6923b3ff11ab7edee1cb1038e3ed69a99e2b6e: "IN",
  "8b30de8d0026b9a13991ae34e9156dae60320522": "TR",
  "89669a88161843d8f82875bc1ac0bb10a814c15d": "PL",
  c4a315a05b9a529c54af2caccc5ae9bb8662059c: "MY",
  "5e8d5f3446f5a0aafbd528523c50c7af683e1143": "UA",
  d40655e729700e8c723336383e0b17ccdd947625: "PH",
  a23e3ba4ad7dddafd1c17bffaaae42ec5b7bdf1d: "BR",
  "2f1e3b97386fe65984f83bedd6a0d22b8d02cd34": "BR",
  b3b30a080f4801c52a9b2ae8fe1a11c044a8655c: "JP"
};

let emotionToColor = [
  [255, 105, 120],
  [85, 214, 190],
  [249, 231, 132],
  [144, 166, 255],
  [20, 20, 20],
  [249, 57, 67]
];

let offices = Object.values(locations).reduce((acc, id) => {
  acc[id] = {
    id,
    color: "rgba(129,129,129,1)",
    label: "neutral",
    emotions: {},
    totalEmotions: 0
  };
  return acc;
}, {});

function getColorForEmotions(emotions, total) {
  let mappedEmotions = Object.keys(emotions)
    .map(emotion => [emotion, emotions[emotion] / total])
    .sort((a, b) => b[1] - a[1])[0];

  return `rgba(${emotionToColor[mappedEmotions[0]][0]},${
    emotionToColor[mappedEmotions[0]][1]
  },${emotionToColor[mappedEmotions[0]][2]},${mappedEmotions[1]})`;
}

function processEmotion(offices, emotion) {
  let office = offices[locations[emotion.location]];

  if (office) {
    office.totalEmotions += 1;
    office.emotions[emotion.emotion] =
      (office.emotions[emotion.emotion] || 0) + 1;

    office.color = getColorForEmotions(office.emotions, office.totalEmotions);
  }

  return offices;
}

function processGlobalEmotion(globalEmotion, emotion) {
  function buildGradient(total, emotions) {
    // linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);

    return (
      "linear-gradient(90deg, " +
      Object.entries(emotions)
        .map(([id, val]) => [id, val / total])
        .sort((a, b) => b[1] - a[1])
        .reduce(
          (acc, [id, val]) => {
            return {
              total: acc.total + val,
              gradient: acc.gradient.concat(
                `rgba(${emotionToColor[id][0]}, ${emotionToColor[id][1]}, ${
                  emotionToColor[id][2]
                }, 1) ${acc.total * 100}%`
              )
            };
          },
          { total: 0, gradient: [] }
        )
        .gradient.join(", ") +
      ")"
    );
  }
  globalEmotion.total += 1;
  globalEmotion.emotions[emotion.emotion] =
    (globalEmotion.emotions[emotion.emotion] || 0) + 1;
  globalEmotion.gradient = buildGradient(
    globalEmotion.total,
    globalEmotion.emotions
  );
  return globalEmotion;
}

export const store = readable(
  { offices, recentEmotions: [], globalEmotion: { total: 0, emotions: {} } },
  function start(set) {
    let val = get(store);
    subscribeToEmotions(emotions => {
      let newState = {
        recentEmotions: store.recentEmotions,
        offices: emotions.reduce(
          (acc, emotion) => processEmotion(acc, emotion),
          val.offices
        ),
        globalEmotion: emotions.reduce(
          (acc, emotion) => processGlobalEmotion(acc, emotion),
          val.globalEmotion
        )
      };
      set(newState);
    });
  }
);
