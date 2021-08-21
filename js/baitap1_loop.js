function demChanLe() {
  var evenNums = "";
  var oddNums = "";
  for (i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      evenNums += i + " ";
    } else {
      // countOdd++;
      // console.log(i);
      oddNums += i + " ";
    }
  }
  console.log(evenNums, "\n", oddNums);
  document.getElementById("txtLift").innerHTML =
    "(-) Số chẵn: " + evenNums + "<br> (-)Số lẻ: " + oddNums;
}
