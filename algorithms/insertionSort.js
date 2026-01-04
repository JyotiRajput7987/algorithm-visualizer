async function insertionSort() {
  const bars = document.getElementsByClassName("bar");

  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];

      bars[j + 1].style.height = `${array[j + 1] * 3}px`;
      bars[j + 1].nextSibling.innerText = array[j + 1];

      await sleep(getSpeed());
      j--;
    }

    array[j + 1] = key;
    bars[j + 1].style.height = `${key * 3}px`;
    bars[j + 1].nextSibling.innerText = key;
  }
}
