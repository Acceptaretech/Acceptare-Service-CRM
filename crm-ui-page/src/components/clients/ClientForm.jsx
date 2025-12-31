import { useState } from "react";
import "./Client.css";
function ClientForm({ client, onBack }) {
  const [formData, setFormData] = useState({
    name: client?.name || "",
    email: client?.email || "",
    phone: client?.phone || "",
  });
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert("Client Saved Successfully");
    onBack();
  }
  return (
    <div className="client-form-container">
      <h2 className={client ? "edit-title" : "add-title"}>
  {client ? "Edit Client" : "Add New Client"}
       </h2>
      <form onSubmit={handleSubmit} className="client-form">
        <input
          name="name"
          placeholder="Client Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            Save
          </button>
          <button type="button" className="btn-secondary" onClick={onBack}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ClientForm;
