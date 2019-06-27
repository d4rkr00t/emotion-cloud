import App from './App.svelte';
import { initializeDb } from './db';

initializeDb();

const app = new App({
  target: document.body,
  props: {
    name: 'world'
  }
});

export default app;
