function changeText() {
  const textElement = document.getElementById("text");
  textElement.textContent = "The text has been dynamically changed!";
}

function toggleColor() {
  document.body.classList.toggle("highlight");
}

function addElement() {
  const container = document.getElementById("container");
  const newDiv = document.createElement("div");
  newDiv.textContent = "New Element Added!";
  newDiv.className = "added-element";
  container.appendChild(newDiv);
}

function removeElement() {
  const container = document.getElementById("container");
  if (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
}
      