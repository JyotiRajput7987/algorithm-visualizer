async function linearSearch(target) {
  const bars = document.getElementsByClassName("bar");

  for (let i = 0; i < array.length; i++) {
    bars[i].style.backgroundColor = "yellow";
    await sleep(getSpeed());

    if (array[i] === target) {
      bars[i].style.backgroundColor = "green";
      alert(`Found at index ${i}`);
      return;
    }

    bars[i].style.backgroundColor = "steelblue";
  }

  alert("Element not found");
}
