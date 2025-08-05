import { createBrowserRouter } from "react-router-dom";
import Home from "./home/home";
import HelloWorld from "./hello-world/hello-world";
import { withObservabilityRouteInstrumentation } from "./services/observability";

export const ROUTER = withObservabilityRouteInstrumentation(
  createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/hello-world",
      element: <HelloWorld />,
    },
  ])
);
