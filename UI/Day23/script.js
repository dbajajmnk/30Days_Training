
const output = document.getElementById("output");
const box = document.getElementById("box");

function log(msg) {
  output.textContent += msg + "\n";
}

function simulateReflow() {
  output.textContent = "";
  log("Reflow triggered: changing width affects layout.");
  box.style.width = Math.random() * 300 + "px";
}

function simulateRepaint() {
  output.textContent = "";
  log("Repaint triggered: changing color only.");
  box.style.background = box.style.background === "red" ? "steelblue" : "red";
}

function heavyDOM() {
  output.textContent = "";
  log("Heavy DOM operation started...");
  for (let i = 0; i < 10000; i++) {
    const div = document.createElement("div");
    div.textContent = "Node " + i;
    document.body.appendChild(div);
  }
  log("Heavy DOM manipulation completed.");
}
