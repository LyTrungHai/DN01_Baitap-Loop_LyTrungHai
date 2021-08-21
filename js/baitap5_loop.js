function giaiThua() {
  var n = parseInt(document.getElementById("inputN2").value);
  var result = 1;
  for (i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(result);
  document.getElementById("txt!").innerHTML = "Giai Thừa: " + result;
}
