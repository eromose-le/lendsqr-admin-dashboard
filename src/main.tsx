import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/styles/global.scss";
import storeQ from "./store/storeQ";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={storeQ}>
      <App />
    </Provider>
  </React.StrictMode>
);
