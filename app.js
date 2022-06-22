const area = document.querySelector("textarea");
const body = document.querySelector("chose");
const textContainer = document.querySelector(".choices");
const firstText = document.querySelector(".chose");
const button = document.querySelector("button");

area.addEventListener("input", updateValue);

function updateValue(e) {
  if (e.target.value == "") {
    firstText.classList.add("first");
  } else {
    firstText.classList.remove("first");
    firstText.textContent = e.target.value;
  }
}

area.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    const newText = document.createElement("p");
    newText.textContent = firstText.textContent.slice(0, -1);
    newText.classList.add("chose");
    textContainer.appendChild(newText);
    e.target.value = ``;
    firstText.textContent = "";
    firstText.classList.add("first");
  }
});

button.addEventListener("click", (a) => {
  let randomNumber = Math.ceil(
    Math.random() * textContainer.childNodes.length - 1
  );
  if (textContainer.childNodes.length > 2) {
    textContainer.childNodes[randomNumber].style =
      "background-color:red; Color:white;";
  } else {
    alert("Lütfen çekilişe katılacak olanların ismini giriniz.");
  }
});
