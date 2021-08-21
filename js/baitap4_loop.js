function Sum() {
  var x = parseInt(document.getElementById("numberX").value);
  var n = parseInt(document.getElementById("numberN").value);

  var sum = 0;
  for (i = 1; i <= n; i++) {
    sum = sum + x ** i;
  }
  console.log(sum);
  document.getElementById("txtSum").innerHTML = "Tổng: " + sum;
}
