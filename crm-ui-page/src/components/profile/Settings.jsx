import "./Profile.css";

function Settings() {
  return (
    <div className="page">
      <div className="card">

        <h2>Settings</h2>

        <div className="setting-item">
          <label>
            <input type="checkbox" /> Email Notifications
          </label>
        </div>

        <div className="setting-item">
          <label>
            <input type="checkbox" /> SMS Alerts
          </label>
        </div>

        <div className="setting-item">
          <label>
            <input type="checkbox" /> Dark Mode
          </label>
        </div>

        <button className="btn">Save Settings</button>

      </div>
    </div>
  );
}

export default Settings;
