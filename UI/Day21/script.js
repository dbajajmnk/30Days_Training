
const output = document.getElementById("output");

function log(msg) {
  output.textContent += msg + "\n";
}

function showPrototype() {
  output.textContent = "";
  function User(name) {
    this.name = name;
  }

  User.prototype.sayHi = function() {
    return "Hi " + this.name;
  };

  const u = new User("Enterprise Dev");

  log("Prototype Chain:");
  log(Object.getPrototypeOf(u));
  log(Object.getPrototypeOf(User.prototype));
}

function testThis() {
  output.textContent = "";

  const obj = {
    name: "JS Engine",
    normalFunc: function() {
      log("Normal function this: " + this.name);
    },
    arrowFunc: () => {
      log("Arrow function this: " + (this.name || "undefined"));
    }
  };

  obj.normalFunc();
  obj.arrowFunc();

  const standalone = obj.normalFunc;
  standalone(); // strict mode => undefined
}

function testPollution() {
  output.textContent = "";

  const malicious = JSON.parse('{ "__proto__": { "polluted": "Yes!" } }');
  const innocent = {};

  Object.assign(innocent, malicious);

  log("Prototype Pollution Check:");
  log({}.polluted); // demonstrates pollution
}
