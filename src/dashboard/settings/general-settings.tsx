import { useState } from "react";

export default function GeneralSettings() {
  const [settings, setSettings] = useState({
    appName: "Frontend Observability POC",
    theme: "light",
    language: "en",
    autoSave: true,
    notifications: true,
  });

  const handleSettingChange = (key: string, value: string | boolean) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving settings:", settings);
    alert("Settings saved successfully!");
  };

  return (
    <div className="dashboard-card">
      <h2>General Settings</h2>
      <p>Configure basic application settings and preferences.</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          maxWidth: "500px",
        }}
      >
        <div>
          <label
            htmlFor="appName"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}
          >
            Application Name
          </label>
          <input
            id="appName"
            type="text"
            value={settings.appName}
            onChange={(e) => handleSettingChange("appName", e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
        </div>

        <div>
          <label
            htmlFor="theme"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}
          >
            Theme
          </label>
          <select
            id="theme"
            value={settings.theme}
            onChange={(e) => handleSettingChange("theme", e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="language"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}
          >
            Language
          </label>
          <select
            id="language"
            value={settings.language}
            onChange={(e) => handleSettingChange("language", e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          >
            <option value="en">English</option>
            <option value="pt">Português</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>

        <div>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={settings.autoSave}
              onChange={(e) =>
                handleSettingChange("autoSave", e.target.checked)
              }
              style={{ transform: "scale(1.2)" }}
            />
            <span style={{ fontWeight: "bold" }}>Enable Auto-Save</span>
          </label>
          <p
            style={{
              margin: "0.5rem 0 0 2rem",
              color: "#666",
              fontSize: "0.9rem",
            }}
          >
            Automatically save changes as you make them
          </p>
        </div>

        <div>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) =>
                handleSettingChange("notifications", e.target.checked)
              }
              style={{ transform: "scale(1.2)" }}
            />
            <span style={{ fontWeight: "bold" }}>Enable Notifications</span>
          </label>
          <p
            style={{
              margin: "0.5rem 0 0 2rem",
              color: "#666",
              fontSize: "0.9rem",
            }}
          >
            Receive notifications about important updates
          </p>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <button
            onClick={handleSave}
            style={{
              backgroundColor: "#2ecc71",
              color: "white",
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
