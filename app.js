if (localStorage.getItem("auth") !== "true") {
  location.href = "login.html";
}

function logout() {
  localStorage.removeItem("auth");
  location.href = "login.html";
}

new Chart(document.getElementById("revenueChart"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Revenue",
      data: [12000, 15000, 14000, 18000, 21000, 25000],
      borderColor: "#2563eb",
      backgroundColor: "rgba(37,99,235,0.2)",
      tension: 0.4
    }]
  }
});

new Chart(document.getElementById("leadChart"), {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Leads",
        data: [40, 55, 60, 70, 86],
        backgroundColor: "#22c55e"
      },
      {
        label: "Customers",
        data: [25, 30, 45, 60, 74],
        backgroundColor: "#3b82f6"
      }
    ]
  }
});


// THEME TOGGLE
function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

let customers = JSON.parse(localStorage.getItem("customers")) || [
  { name: "Ayush Kumar", email: "ayush@gmail.com", status: "Active" },
  { name: "Anjali Kumari", email: "anjali@gmail.com", status: "Inactive" }
];

let editIndex = null;

function renderCustomers() {
  const table = document.getElementById("customerTable");
  table.innerHTML = "";

  customers.forEach((c, i) => {
    table.innerHTML += `
      <tr>
        <td>${c.name}</td>
        <td>${c.email}</td>
        <td><span class="badge ${c.status.toLowerCase()}">${c.status}</span></td>
        <td>
          <button onclick="editCustomer(${i})">✏️</button>
          <button onclick="deleteCustomer(${i})">🗑️</button>
        </td>
      </tr>
    `;
  });

  localStorage.setItem("customers", JSON.stringify(customers));
}

function openModal() {
  modal.style.display = "flex";
  editIndex = null;
}

function closeModal() {
  modal.style.display = "none";
  custName.value = "";
  custEmail.value = "";
}

function saveCustomer() {
  const customer = {
    name: custName.value,
    email: custEmail.value,
    status: custStatus.value
  };

  if (editIndex === null) customers.push(customer);
  else customers[editIndex] = customer;

  closeModal();
  renderCustomers();
}

function editCustomer(i) {
  editIndex = i;
  const c = customers[i];
  custName.value = c.name;
  custEmail.value = c.email;
  custStatus.value = c.status;
  openModal();
}

function deleteCustomer(i) {
  if (confirm("Delete this customer?")) {
    customers.splice(i, 1);
    renderCustomers();
  }
}

renderCustomers();
