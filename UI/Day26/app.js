
// Simulated modular architecture

function Header(){
 return "<h2>Reusable Header Component</h2>"
}

function Content(){
 return "<p>This content module is separated from UI logic.</p>"
}

function loadComponent(){
 const app = document.getElementById("app")
 app.innerHTML = Header() + Content()
}
