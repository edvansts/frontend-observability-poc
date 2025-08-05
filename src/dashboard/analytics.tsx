import { useState } from "react";

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState("7days");
  const [isLoading, setIsLoading] = useState(false);

  const handlePeriodChange = (period: string) => {
    setIsLoading(true);
    setSelectedPeriod(period);

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  const analyticsData = {
    "7days": {
      pageViews: 12500,
      uniqueVisitors: 3200,
      bounceRate: "45.2%",
      avgSessionDuration: "3m 24s",
    },
    "30days": {
      pageViews: 45600,
      uniqueVisitors: 11800,
      bounceRate: "42.8%",
      avgSessionDuration: "3m 41s",
    },
    "90days": {
      pageViews: 125000,
      uniqueVisitors: 28500,
      bounceRate: "41.5%",
      avgSessionDuration: "3m 52s",
    },
  };

  const currentData =
    analyticsData[selectedPeriod as keyof typeof analyticsData];

  return (
    <div>
      <div className="dashboard-card">
        <h2>Analytics Dashboard</h2>
        <p>Track your website performance and user behavior.</p>

        <div style={{ marginBottom: "2rem" }}>
          <label
            htmlFor="period-select"
            style={{ marginRight: "1rem", fontWeight: "bold" }}
          >
            Time Period:
          </label>
          <select
            id="period-select"
            value={selectedPeriod}
            onChange={(e) => handlePeriodChange(e.target.value)}
            style={{
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ddd",
            }}
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="90days">Last 90 days</option>
          </select>
        </div>

        {isLoading ? (
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <p>Loading analytics data...</p>
          </div>
        ) : (
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-value">
                {currentData.pageViews.toLocaleString()}
              </span>
              <span className="stat-label">Page Views</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">
                {currentData.uniqueVisitors.toLocaleString()}
              </span>
              <span className="stat-label">Unique Visitors</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{currentData.bounceRate}</span>
              <span className="stat-label">Bounce Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">
                {currentData.avgSessionDuration}
              </span>
              <span className="stat-label">Avg Session Duration</span>
            </div>
          </div>
        )}
      </div>

      <div className="dashboard-card">
        <h2>Top Pages</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #eee" }}>
              <th style={{ textAlign: "left", padding: "0.75rem" }}>Page</th>
              <th style={{ textAlign: "right", padding: "0.75rem" }}>Views</th>
              <th style={{ textAlign: "right", padding: "0.75rem" }}>
                Unique Views
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "0.75rem" }}>/home</td>
              <td style={{ textAlign: "right", padding: "0.75rem" }}>4,532</td>
              <td style={{ textAlign: "right", padding: "0.75rem" }}>3,201</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "0.75rem" }}>/dashboard</td>
              <td style={{ textAlign: "right", padding: "0.75rem" }}>2,847</td>
              <td style={{ textAlign: "right", padding: "0.75rem" }}>1,965</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "0.75rem" }}>/hello-world</td>
              <td style={{ textAlign: "right", padding: "0.75rem" }}>1,234</td>
              <td style={{ textAlign: "right", padding: "0.75rem" }}>876</td>
            </tr>
            <tr>
              <td style={{ padding: "0.75rem" }}>/dashboard/analytics</td>
              <td style={{ textAlign: "right", padding: "0.75rem" }}>892</td>
              <td style={{ textAlign: "right", padding: "0.75rem" }}>654</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
