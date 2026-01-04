async function binarySearch(target) {
  array.sort((a, b) => a - b);
  generateArrayFromSorted();

  let left = 0, right = array.length - 1;
  const bars = document.getElementsByClassName("bar");

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    bars[mid].style.backgroundColor = "yellow";

    await sleep(getSpeed());

    if (array[mid] === target) {
      bars[mid].style.backgroundColor = "green";
      alert(`Found at index ${mid}`);
      return;
    }

    bars[mid].style.backgroundColor = "steelblue";
    array[mid] < target ? left = mid + 1 : right = mid - 1;
  }

  alert("Element not found");
}

function generateArrayFromSorted() {
  container.innerHTML = "";
  for (let value of array) {
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
