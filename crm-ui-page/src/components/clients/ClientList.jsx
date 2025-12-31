import "./Client.css";
function ClientList({ onAdd, onEdit, onView }) {
  const clients = [
    { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", phone: "9876543210" },
    { id: 2, name: "Anita Verma", email: "anita@gmail.com", phone: "9123456789" },
  ];
  return (
    <div className="client-container">
      <div className="client-header">
        <h2>Clients</h2>
        <button className="btn-primary" onClick={onAdd}>
          + Add Client
        </button>
      </div>

      <table className="client-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>
                    <button
  className="btn-secondary"
  onClick={() => onEdit(client)}
>
  Edit
</button>

<button
  className="btn-view"
  onClick={() => onView(client)}
>
  View
</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ClientList;
