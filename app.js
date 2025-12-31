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
