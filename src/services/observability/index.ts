import { initializeFaro } from "@grafana/faro-react";

export const initializeObservability = () => {
  initializeFaro({
    url: "http://127.0.0.1:65390",
    app: {
      name: "frontend-observability-poc",
      version: "0.1alpha",
      environment: "development",
    },
  });
};

export { withFaroRouterInstrumentation as withObservabilityRouteInstrumentation } from "@grafana/faro-react";
