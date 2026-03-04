
const output = document.getElementById("output");
const input = document.getElementById("userInput");

function unsafeRender() {
  // Vulnerable to XSS
  output.innerHTML = input.value;
}

function safeRender() {
  // Safe rendering
  output.textContent = input.value;
}

function simulateCSRF() {
  output.textContent = "Simulating CSRF attack... In real systems, server must validate CSRF token.";
}

// Token storage example
const token = "fake-jwt-token";

// Bad practice (vulnerable to XSS)
localStorage.setItem("token", token);

// Better practice demonstration
document.cookie = "token=" + token + "; Secure; HttpOnly; SameSite=Strict";
