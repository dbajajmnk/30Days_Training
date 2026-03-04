
// Closure Memory Leak Simulation

function createLeakyFunction() {
  const largeArray = new Array(1000000).fill("data");
  return function () {
    console.log("Using large array length:", largeArray.length);
  };
}

const leaky = createLeakyFunction();

// Even if outer function finishes,
// largeArray remains in memory due to closure reference.
