function minimum() {
  var sum = 0;

  for (var i = 1; sum <= 10000; i++) {
    sum += i;
    console.log(i);
    document.getElementById("txtMinimum").innerHTML =
      "Số nguyên dương nhỏ nhất: " + i;
  }
}
