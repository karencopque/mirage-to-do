import { createApp } from "vue";
import App from "./App.vue";
import { makeServer } from "./server.js";
import input from "./input.css";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

createApp(App).mount("#app");
