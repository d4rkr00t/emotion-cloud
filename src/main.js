import App from "./App.svelte";
import { initializeDb } from "./db";
import { initializeSw } from "./sw";

initializeDb();
initializeSw();

const app = new App({ target: document.body });

export default app;
