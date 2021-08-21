function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function nguyenTo() {
  var n = document.getElementById("inputPrime").value;
  var primeNums = "";

  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      primeNums += i + " ";
    }
  }
  document.getElementById("ketqua").innerHTML =
    "Các số nguyên tố nhỏ hơn " + n + ": " + primeNums;
}
