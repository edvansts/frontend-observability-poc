import {
  createReactRouterV6DataOptions,
  getWebInstrumentations,
  initializeFaro,
  ReactIntegration,
} from "@grafana/faro-react";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";
import { matchRoutes } from "react-router-dom";

export const initializeObservability = () => {
  return initializeFaro({
    url: "http://localhost:12347/collect",
    app: {
      name: "frontend-observability-poc",
      version: "0.1alpha",
      environment: "development",
    },
    instrumentations: [
      ...getWebInstrumentations(),

      new TracingInstrumentation(),

      new ReactIntegration({
        router: createReactRouterV6DataOptions({
          matchRoutes,
        }),
      }),
    ],
  });
};

export {
  withFaroRouterInstrumentation as withObservabilityRouteInstrumentation,
  FaroErrorBoundary as ObservabilityErrorBoundary,
  withFaroProfiler as withObservabilityProfiler,
} from "@grafana/faro-react";
