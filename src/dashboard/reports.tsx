import { useState } from "react";

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState("sales");
  const [dateRange, setDateRange] = useState("month");

  const reports = {
    sales: {
      title: "Sales Report",
      data: [
        { period: "Week 1", value: "$12,345" },
        { period: "Week 2", value: "$15,678" },
        { period: "Week 3", value: "$11,234" },
        { period: "Week 4", value: "$18,901" },
      ],
    },
    users: {
      title: "User Growth Report",
      data: [
        { period: "Week 1", value: "234 new users" },
        { period: "Week 2", value: "312 new users" },
        { period: "Week 3", value: "189 new users" },
        { period: "Week 4", value: "456 new users" },
      ],
    },
    performance: {
      title: "Performance Report",
      data: [
        { period: "Page Load Time", value: "1.2s avg" },
        { period: "Server Response", value: "250ms avg" },
        { period: "Error Rate", value: "0.05%" },
        { period: "Uptime", value: "99.95%" },
      ],
    },
  };

  const currentReport = reports[selectedReport as keyof typeof reports];

  return (
    <div>
      <div className="dashboard-card">
        <h2>Reports</h2>
        <p>Generate and view detailed reports about your business metrics.</p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <label
              htmlFor="report-select"
              style={{ marginRight: "0.5rem", fontWeight: "bold" }}
            >
              Report Type:
            </label>
            <select
              id="report-select"
              value={selectedReport}
              onChange={(e) => setSelectedReport(e.target.value)}
              style={{
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            >
              <option value="sales">Sales Report</option>
              <option value="users">User Growth</option>
              <option value="performance">Performance</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="date-range"
              style={{ marginRight: "0.5rem", fontWeight: "bold" }}
            >
              Date Range:
            </label>
            <select
              id="date-range"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              style={{
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
            </select>
          </div>
        </div>

        <div className="dashboard-card" style={{ margin: 0 }}>
          <h3>{currentReport.title}</h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #eee" }}>
                <th style={{ textAlign: "left", padding: "0.75rem" }}>
                  Period
                </th>
                <th style={{ textAlign: "right", padding: "0.75rem" }}>
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {currentReport.data.map((item, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "0.75rem" }}>{item.period}</td>
                  <td
                    style={{
                      textAlign: "right",
                      padding: "0.75rem",
                      fontWeight: "bold",
                    }}
                  >
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="dashboard-card">
        <h2>Export Options</h2>
        <p>Download your reports in different formats:</p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button className="action-button">Export as PDF</button>
          <button className="action-button">Export as CSV</button>
          <button className="action-button">Export as Excel</button>
          <button className="action-button">Email Report</button>
        </div>
      </div>
    </div>
  );
}
