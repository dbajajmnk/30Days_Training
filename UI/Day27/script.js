
const output = document.getElementById("output");

function log(msg) {
  output.textContent += msg + "\n";
}

function fakeAPI() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
      success ? resolve("API Success") : reject("API Failed");
    }, 500);
  });
}

async function callAPI() {
  output.textContent = "";
  try {
    const res = await fakeAPI();
    log(res);
  } catch (err) {
    log("Error handled: " + err);
  }
}

async function simulateRetry(retries = 3) {
  output.textContent = "";
  let attempt = 0;

  while (attempt < retries) {
    try {
      const res = await fakeAPI();
      log("Success on attempt " + (attempt + 1));
      return;
    } catch (err) {
      log("Retry attempt " + (attempt + 1));
      attempt++;
    }
  }
  log("All retries failed.");
}

let circuitOpen = false;

async function simulateCircuit() {
  output.textContent = "";

  if (circuitOpen) {
    log("Circuit is OPEN. Request blocked.");
    return;
  }

  try {
    await fakeAPI();
    log("Request successful.");
  } catch (err) {
    log("Failure detected. Opening circuit.");
    circuitOpen = true;
    setTimeout(() => {
      circuitOpen = false;
      log("Circuit reset.");
    }, 3000);
  }
}
