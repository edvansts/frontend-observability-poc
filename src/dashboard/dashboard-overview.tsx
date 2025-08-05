import { useState, useEffect } from "react";

export default function DashboardOverview() {
  const [stats, setStats] = useState({
    users: 0,
    sales: 0,
    orders: 0,
    revenue: 0,
  });

  useEffect(() => {
    // Simulate loading stats
    const timer = setTimeout(() => {
      setStats({
        users: 1234,
        sales: 5678,
        orders: 890,
        revenue: 12345,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="dashboard-card">
        <h2>Dashboard Overview</h2>
        <p>
          Welcome to your dashboard! Here you can see all your important metrics
          at a glance.
        </p>

        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-value">{stats.users.toLocaleString()}</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{stats.sales.toLocaleString()}</span>
            <span className="stat-label">Total Sales</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{stats.orders.toLocaleString()}</span>
            <span className="stat-label">Orders</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">
              ${stats.revenue.toLocaleString()}
            </span>
            <span className="stat-label">Revenue</span>
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <h2>Recent Activity</h2>
        <ul>
          <li>New user registered - 5 minutes ago</li>
          <li>Order #12345 completed - 12 minutes ago</li>
          <li>Payment processed - 18 minutes ago</li>
          <li>New product added - 1 hour ago</li>
          <li>System backup completed - 2 hours ago</li>
        </ul>
      </div>

      <div className="dashboard-card">
        <h2>Quick Actions</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button className="action-button">Add New User</button>
          <button className="action-button">Create Report</button>
          <button className="action-button">View Analytics</button>
          <button className="action-button">Settings</button>
        </div>
      </div>
    </div>
  );
}
