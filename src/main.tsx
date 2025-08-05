import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { ROUTER } from "./routes";
import { initializeObservability } from "./services/observability";

initializeObservability();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={ROUTER} future={{ v7_startTransition: true }} />
  </StrictMode>
);
