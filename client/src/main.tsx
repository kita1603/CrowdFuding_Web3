import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import "./index.css";
import { StateContextProvider } from "./context";
import { Router } from "react-router-dom";
import { client } from "./client";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={"sepolia"} clientId="33368a44d48d22cf16a67de751c15cea" >
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
