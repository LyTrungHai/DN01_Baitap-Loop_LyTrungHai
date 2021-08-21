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

// cach viet while
// var num = 0;
// var evenNums = "";
// var oddNums = "";
// while (num < 100) {
//   if (num % 2 == 0) {
//     evenNums += num + " ";
//   } else {
//     oddNums += num + " ";
//   }
//   num++;
// }
// console.log(evenNums, " \n", oddNums);
