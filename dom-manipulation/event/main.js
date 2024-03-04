var addItemBtn = document.getElementById("addItem");
var input = document.getElementById("addItemInput");
var ul = document.querySelector("ul");

const inputLength = () => {
  return input.value.length;
};

const createListElement = () => {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
};

addItemBtn.addEventListener("click", function () {
  if (inputLength() > 0) {
    createListElement();
  }
});

input.addEventListener("keypress", function (event) {
  if (inputLength > 0 && event.key === 13) {
    createListElement();
  }
});
