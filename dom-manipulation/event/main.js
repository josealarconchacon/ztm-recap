var addItemBtn = document.getElementById("addItem");
var input = document.getElementById("addItemInput");
var ul = document.querySelector("ul");

addItemBtn.addEventListener("click", function () {
  if (input.value === "") return;
  // Create a new li element and set its
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("testing"));
  ul.appendChild(li);
});
