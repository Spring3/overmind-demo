import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider as OvermindProvider } from "overmind-react";
import { createOvermind } from "overmind";
import { createConfig } from "./store";
import { createClient } from "contentful-management";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const sdk = createClient(
  { accessToken: "<INSERT_YOUR_TOKEN>" },
  {
    type: "plain",
    defaults: { spaceId: "<INSERT_YOUR_SPACE>", environmentId: "master" },
  }
);

const overmindStore = createOvermind(createConfig(sdk));

root.render(
  <React.StrictMode>
    <OvermindProvider value={overmindStore}>
      <App />
    </OvermindProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
