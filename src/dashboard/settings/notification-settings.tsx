import { useState } from "react";

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
    dailyDigest: true,
    weeklyReport: true,
    securityAlerts: true,
    marketingEmails: false,
    productUpdates: true,
    maintenanceAlerts: true,
  });

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving notification settings:", notifications);
    alert("Notification settings saved successfully!");
  };

  const notificationGroups = [
    {
      title: "Communication Preferences",
      settings: [
        {
          key: "emailNotifications",
          label: "Email Notifications",
          description: "Receive notifications via email",
        },
        {
          key: "pushNotifications",
          label: "Push Notifications",
          description: "Receive browser push notifications",
        },
        {
          key: "smsNotifications",
          label: "SMS Notifications",
          description: "Receive notifications via SMS",
        },
      ],
    },
    {
      title: "Report & Digest Settings",
      settings: [
        {
          key: "dailyDigest",
          label: "Daily Digest",
          description: "Get a summary of daily activities",
        },
        {
          key: "weeklyReport",
          label: "Weekly Report",
          description: "Receive comprehensive weekly reports",
        },
      ],
    },
    {
      title: "Alert Settings",
      settings: [
        {
          key: "securityAlerts",
          label: "Security Alerts",
          description: "Important security-related notifications",
        },
        {
          key: "maintenanceAlerts",
          label: "Maintenance Alerts",
          description: "System maintenance and downtime notifications",
        },
      ],
    },
    {
      title: "Marketing & Updates",
      settings: [
        {
          key: "marketingEmails",
          label: "Marketing Emails",
          description: "Promotional content and offers",
        },
        {
          key: "productUpdates",
          label: "Product Updates",
          description: "New features and product announcements",
        },
      ],
    },
  ];

  return (
    <div className="dashboard-card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <h2>Notification Settings</h2>
        <button
          onClick={handleSave}
          style={{
            backgroundColor: "#2ecc71",
            color: "white",
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Save Settings
        </button>
      </div>

      <p style={{ marginBottom: "2rem", color: "#666" }}>
        Customize how and when you receive notifications from our platform.
      </p>

      {notificationGroups.map((group, groupIndex) => (
        <div key={groupIndex} style={{ marginBottom: "2.5rem" }}>
          <h3
            style={{
              marginBottom: "1rem",
              color: "#2c3e50",
              borderBottom: "2px solid #ecf0f1",
              paddingBottom: "0.5rem",
            }}
          >
            {group.title}
          </h3>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {group.settings.map((setting) => (
              <div
                key={setting.key}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "1rem",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "6px",
                  border: "1px solid #e9ecef",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    cursor: "pointer",
                    flex: 1,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={
                      notifications[setting.key as keyof typeof notifications]
                    }
                    onChange={(e) =>
                      handleNotificationChange(setting.key, e.target.checked)
                    }
                    style={{ transform: "scale(1.3)", marginTop: "2px" }}
                  />
                  <div>
                    <div
                      style={{ fontWeight: "bold", marginBottom: "0.25rem" }}
                    >
                      {setting.label}
                    </div>
                    <div style={{ color: "#666", fontSize: "0.9rem" }}>
                      {setting.description}
                    </div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: "#e8f4fd",
          borderRadius: "6px",
          border: "1px solid #bee5eb",
        }}
      >
        <h4 style={{ margin: "0 0 0.5rem 0", color: "#0c5460" }}>
          Quick Summary
        </h4>
        <p style={{ margin: 0, color: "#0c5460", fontSize: "0.9rem" }}>
          You currently have{" "}
          {Object.values(notifications).filter(Boolean).length} out of{" "}
          {Object.keys(notifications).length} notification types enabled.
        </p>
      </div>
    </div>
  );
}
