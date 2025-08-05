import { Link, Outlet } from "react-router-dom";
import "./dashboard-layout.css";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <nav className="dashboard-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link to="/dashboard/analytics" className="nav-link">
            Analytics
          </Link>
          <Link to="/dashboard/settings" className="nav-link">
            Settings
          </Link>
        </nav>
      </header>

      <div className="dashboard-content">
        <aside className="dashboard-sidebar">
          <nav className="sidebar-nav">
            <h3>Navigation</h3>
            <ul>
              <li>
                <Link to="/dashboard">Overview</Link>
              </li>
              <li>
                <Link to="/dashboard/analytics">Analytics</Link>
              </li>
              <li>
                <Link to="/dashboard/reports">Reports</Link>
              </li>
              <li>
                <Link to="/dashboard/settings">Settings</Link>
              </li>
              <li>
                <Link to="/dashboard/settings/profile">Profile</Link>
              </li>
              <li>
                <Link to="/dashboard/settings/notifications">
                  Notifications
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
