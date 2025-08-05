import Home from "./home/home";
import HelloWorld from "./hello-world/hello-world";
import DashboardLayout from "./dashboard/dashboard-layout";
import DashboardOverview from "./dashboard/dashboard-overview";
import Analytics from "./dashboard/analytics";
import Reports from "./dashboard/reports";
import SettingsLayout from "./dashboard/settings/settings-layout";
import GeneralSettings from "./dashboard/settings/general-settings";
import ProfileSettings from "./dashboard/settings/profile-settings";
import NotificationSettings from "./dashboard/settings/notification-settings";

import { createRouter } from "./services/router";

export const ROUTER = createRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hello-world",
    element: <HelloWorld />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardOverview />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "settings",
        element: <SettingsLayout />,
        children: [
          {
            index: true,
            element: <GeneralSettings />,
          },
          {
            path: "profile",
            element: <ProfileSettings />,
          },
          {
            path: "notifications",
            element: <NotificationSettings />,
          },
        ],
      },
    ],
  },
]);
