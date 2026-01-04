let array = [];
const container = document.getElementById("array-container");

function generateArray(size = 15) {
  container.innerHTML = "";
  array = [];

  for (let i = 0; i < size; i++) {
    const value = Math.floor(Math.random() * 90) + 10;
    array.push(value);

    const wrapper = document.createElement("div");
    wrapper.classList.add("bar-wrapper");

    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`;

    const label = document.createElement("div");
    label.classList.add("bar-label");
    label.innerText = value;

    wrapper.appendChild(bar);
    wrapper.appendChild(label);
    container.appendChild(wrapper);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getSpeed() {
  return 101 - document.getElementById("speed").value;
}

async function start() {
  const algo = document.getElementById("algorithm").value;

  if (algo === "bubble") await bubbleSort();
  else if (algo === "selection") await selectionSort();
  else if (algo === "insertion") await insertionSort();
  else {
    const target = Number(document.getElementById("searchValue").value);
    if (isNaN(target)) {
      alert("Enter a value to search");
      return;
    }
    if (algo === "linear") await linearSearch(target);
    if (algo === "binary") await binarySearch(target);
  }
}
