import { useState } from "react";
import ClientList from "./components/clients/ClientList";
import ClientForm from "./components/clients/ClientForm";
import ClientDetail from "./components/clients/ClientDetails";

function App() {
  const [activePage, setActivePage] = useState("clients");
const [selectedClient, setSelectedClient] = useState(null);
  return (
    <>
      {activePage === "clients" && (
        <ClientList
  onAdd={() => {
    setSelectedClient(null);
    setActivePage("addClient");
  }}
  onEdit={(client) => {
    setSelectedClient(client);
    setActivePage("addClient");
  }}
  onView={(client) => {
    setSelectedClient(client);
    setActivePage("clientDetail");
  }}
/>
      )}
      {activePage === "clients" && (
  <ClientList
    onSelectClient={(client) => {
      setSelectedClient(client);
      setActivePage("clientDetail");
    }}
  />
)}

{activePage === "form" && (
  <ClientForm
    client={selectedClient}
    onBack={() => setActivePage("clients")}
  />
)}

{activePage === "clientDetail" && (
  <ClientDetail
    client={selectedClient}
    onBack={() => setActivePage("clients")}
  />
)}
    </>
  );
}
export default App;
