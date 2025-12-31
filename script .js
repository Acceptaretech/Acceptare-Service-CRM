function login() {
  const u = username.value;
  const p = password.value;

  if (u === "admin" && p === "admin123") {
    localStorage.setItem("auth", "true");
    location.href = "dashboard.html";
  } else {
    error.textContent = "Invalid credentials";
  }
}
