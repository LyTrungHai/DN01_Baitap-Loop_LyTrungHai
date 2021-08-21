function CreateDivs() {
  var divs = document.querySelector(".divs");
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      var newDiv = document.createElement("div");
      newDiv.classList.add("bg-red");
      newDiv.innerText = "div" + i;
      divs.appendChild(newDiv);
    } else {
      var newDiv = document.createElement("div");
      newDiv.innerText = "div" + i;
      newDiv.classList.add("bg-blue");
      divs.appendChild(newDiv);
    }
  }
}
