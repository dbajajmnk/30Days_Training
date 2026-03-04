
const log = document.getElementById("log")
const input = document.getElementById("data")

function send(){
 log.textContent="Sending raw user data to AI model... (risk!)"
}

function sanitize(){
 let clean = input.value.replace(/\d/g,"X")
 log.textContent="Sensitive data masked before sending: "+clean
}
