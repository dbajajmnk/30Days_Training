
const stack = document.getElementById('stack');
const heap = document.getElementById('heap');

function pushStack(name) {
  const li = document.createElement('li');
  li.textContent = name;
  stack.prepend(li);
}

function popStack() {
  stack.removeChild(stack.firstChild);
}

function addHeap(item) {
  const li = document.createElement('li');
  li.textContent = item;
  heap.appendChild(li);
}

function runDemo() {
  stack.innerHTML = '';
  heap.innerHTML = '';

  pushStack('Global Execution Context');

  function a() {
    pushStack('Function a()');
    addHeap('Object created in a()');
    b();
    popStack();
  }

  function b() {
    pushStack('Function b()');
    addHeap('Object created in b()');
    popStack();
  }

  a();
  popStack();
}
