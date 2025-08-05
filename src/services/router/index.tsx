import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { withObservabilityProfiler } from "../observability";
import { isValidElement } from "react";
import type { ReactElement } from "react";

/**
 * Creates a wrapper component that renders the provided element with observability profiling
 */
const createProfiledWrapper = (element: ReactElement) => {
  const WrapperComponent = () => element;
  const ProfiledWrapper = withObservabilityProfiler(WrapperComponent);
  return ProfiledWrapper({});
};

/**
 * Recursively adds observability profiler to all routes and their children
 * @param routes - Array of route objects to process
 * @returns Array of routes with observability profiler applied
 */
const addObservabilityToRoutes = (routes: RouteObject[]): RouteObject[] => {
  return routes.map((route) => {
    const processedRoute: RouteObject = {
      ...route,
    };

    // Add withObservabilityProfiler to the element if it's a valid React element
    if (route.element && isValidElement(route.element)) {
      processedRoute.element = createProfiledWrapper(
        route.element as ReactElement
      );
    } else {
      processedRoute.element = route.element;
    }

    // Recursively process children routes if they exist
    if (route.children && route.children.length > 0) {
      processedRoute.children = addObservabilityToRoutes(route.children);
    }

    return processedRoute;
  });
};

export const createRouter = (routes: RouteObject[]) => {
  const normalizedRoutes = addObservabilityToRoutes(routes);
  return createBrowserRouter(normalizedRoutes);
};
