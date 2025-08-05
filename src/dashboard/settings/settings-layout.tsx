import { Link, Outlet } from "react-router-dom";

export default function SettingsLayout() {
  return (
    <div>
      <div className="dashboard-card">
        <h2>Settings</h2>
        <p>Manage your account and application preferences.</p>

        <nav style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              to="/dashboard/settings"
              className="nav-link"
              style={{
                backgroundColor: "#3498db",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              General
            </Link>
            <Link
              to="/dashboard/settings/profile"
              className="nav-link"
              style={{
                backgroundColor: "#3498db",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Profile
            </Link>
            <Link
              to="/dashboard/settings/notifications"
              className="nav-link"
              style={{
                backgroundColor: "#3498db",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Notifications
            </Link>
          </div>
        </nav>
      </div>

      <Outlet />
    </div>
  );
}
