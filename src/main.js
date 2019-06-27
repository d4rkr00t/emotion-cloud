import App from './App.svelte';
import { initializeDb } from './db';
import { determineLocation } from './location';

console.log(determineLocation({ latitude: -33.86882, longitude: 151.20929 }));
console.log(determineLocation({ latitude: 52.370216, longitude: 4.895168 }));
console.log(determineLocation({ latitude: 37.780079, longitude: -122.420174 }));

initializeDb();

const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
});

export default app;
