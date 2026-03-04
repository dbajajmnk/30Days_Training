
const output = document.getElementById("output");
const searchInput = document.getElementById("search");

function log(msg) {
  output.textContent += msg + "\n";
}

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

const debouncedSearch = debounce((e) => {
  log("Debounced search: " + e.target.value);
}, 500);

searchInput.addEventListener("input", debouncedSearch);

function simulateHeavyTask() {
  log("Heavy task started...");
  for (let i = 0; i < 100000000; i++) {}
  log("Heavy task completed.");
}

// Lazy loading image
const img = document.createElement("img");
img.loading = "lazy";
img.src = "https://via.placeholder.com/400";
document.getElementById("image-container").appendChild(img);
