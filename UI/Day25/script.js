
const out = document.getElementById("output")
const input = document.getElementById("input")

function unsafe(){
 out.innerHTML = input.value
}

function safe(){
 out.textContent = input.value
}

function csrf(){
 out.textContent = "Simulating CSRF attack request to backend endpoint."
}

function cors(){
 out.textContent = "Browser blocked request due to CORS policy."
}
