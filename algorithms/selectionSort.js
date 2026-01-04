async function selectionSort() {
  const bars = document.getElementsByClassName("bar");

  for (let i = 0; i < array.length; i++) {
    let min = i;
    bars[min].style.backgroundColor = "red";

    for (let j = i + 1; j < array.length; j++) {
      bars[j].style.backgroundColor = "yellow";

      if (array[j] < array[min]) {
        bars[min].style.backgroundColor = "steelblue";
        min = j;
        bars[min].style.backgroundColor = "red";
      }

      await sleep(getSpeed());
      bars[j].style.backgroundColor = "steelblue";
    }

    [array[i], array[min]] = [array[min], array[i]];

    bars[i].style.height = `${array[i] * 3}px`;
    bars[min].style.height = `${array[min] * 3}px`;

    bars[i].nextSibling.innerText = array[i];
    bars[min].nextSibling.innerText = array[min];

    bars[min].style.backgroundColor = "steelblue";
    bars[i].style.backgroundColor = "green";
  }
}
