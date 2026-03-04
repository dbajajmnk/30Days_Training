
const output = document.getElementById("output");

function log(msg) {
  output.textContent += msg + "\n";
}

function runClosure() {
  output.textContent = "";
  function createCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }

  const counter = createCounter();
  log("Closure Counter:");
  log(counter());
  log(counter());
  log(counter());
}

function runMiddleware() {
  output.textContent = "";
  function withLogging(fn) {
    return function (...args) {
      log("Before execution");
      const result = fn(...args);
      log("After execution");
      return result;
    };
  }

  function greet(name) {
    log("Hello " + name);
  }

  const wrapped = withLogging(greet);
  wrapped("Enterprise Dev");
}

function runComposition() {
  output.textContent = "";

  const trim = str => str.trim();
  const toUpper = str => str.toUpperCase();
  const exclaim = str => str + "!";

  const compose = (f, g) => x => f(g(x));

  const shout = compose(exclaim, compose(toUpper, trim));

  log("Composition Result:");
  log(shout("  hello world  "));
}
