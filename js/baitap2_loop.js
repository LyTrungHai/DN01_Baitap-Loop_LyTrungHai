function chiaHetCho3() {
  count = 0;
  for (i = 0; i < 1000; i++) {
    if (i % 3 == 0) {
      count++;
    }
  }
  console.log(count);
  document.getElementById("txtCount").innerHTML =
    "Số chia hết cho 3 nhỏ hơn 1000 : " + count;
}

//cach viet while
// var num = 0;
// var count = 0;
// while (num < 1000) {
//   if (num % 3 == 0) {
//     count++;
//   }
//   num++;
// }
// console.log(count);
