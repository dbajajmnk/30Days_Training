
const output = document.getElementById("output");

function log(msg) {
  output.textContent += msg + "\n";
}

function runMacroMicro() {
  output.textContent = "";
  log("Script start");

  setTimeout(() => log("Macrotask (setTimeout)"), 0);

  Promise.resolve().then(() => log("Microtask (Promise.then)"));

  log("Script end");
}

function runPromiseDemo() {
  output.textContent = "";

  Promise.resolve("Step 1")
    .then(data => {
      log(data);
      return "Step 2";
    })
    .then(data => {
      log(data);
      return "Step 3";
    })
    .then(data => log(data));
}

function runAsyncAwait() {
  output.textContent = "";

  async function demo() {
    log("Async function start");
    await Promise.resolve();
    log("After await (microtask)");
  }

  demo();
  log("Outside async function");
}
