import "./Client.css";

function ClientDetail({ client, onBack }) {
  if (!client) return null;
return (
  <div className="client-detail-bg">
    <div className="client-detail-card colorful">
      <div className="client-avatar">
        {client.name.charAt(0)}
      </div>
      <h2>{client.name}</h2>
      <span className="client-badge">Active Client</span>

      <div className="detail-row">
        <span>Email</span>
        <p>{client.email}</p>
      </div>
      <div className="detail-row">
        <span>Phone</span>
        <p>{client.phone}</p>
      </div>
      <button className="btn-primary" onClick={onBack}>
        ← Back to Clients
      </button>
    </div>
  </div>
);
}
export default ClientDetail;
