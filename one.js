// function go() {
//   var a = parseInt(document.getElementById("a").value);
//   var b = parseInt(document.getElementById("b").value);
//   var c = a + b;
//   document.getElementById("result").value = c;
// }
// function go1() {
//   // var a = 10;
//   // console.log(a);
//   // a += 10;
//   // console.log(a);
//   // a -= 10;
//   // console.log(a);
//   // a *= 10;
//   // console.log(a);
//   // a /= 10;
//   // console.log(a);
//   // var b = "hello";
//   // console.log(b);
//   //  b += " world";
//   // console.log(b);
// }

// function go2(){
//   var output = "";
//   var a = 10;
//   output += a + "<br>";

//   a += 10;
//   output += a + "<br>";

//   var b = "novi";
//   b += " sandhu";
//   output = b + "<br>";

//   document.getElementById("output").innerHTML = output;

// }
//
// function go5() {
//   var a = parseInt(document.getElementById("a").value);
//   var b = parseInt(document.getElementById("b").value);
//   var c = parseInt(document.getElementById("c").value);

//   var d = a>b && a>c;
//   document.getElementById("result").innerHTML= "<strong>" + d + "</strong>";

// }

// function go5() {
//   var a = parseInt(document.getElementById("a").value);
//   var b = parseInt(document.getElementById("b").value);

//   var c = a <= b;

//   //  var lbl = document.getElementById("result");
//   //  lbl.innerText=c;
//   //  lbl.className=(c==true)?"text-success":"text-danger";

//   document.getElementById("result").innerText = c;

//   document.getElementById("result").className =
//     c == true ? "text-success" : "text-danger"
//     document.getElementById("result").innerText=c

// }
// function go6() {
//   var a = 1000;
//   var b = 200;
//   if (a > b) {
//     var c = a - b;
//     alert(c);
//   }
//   if (a <= b) {
//     alert("value of A must be greater than B");
//   }
// }

// function calc() {
//   var a = parseInt(document.getElementById("a").value);
//   var b = parseInt(document.getElementById("b").value);
//   var c = parseInt(document.getElementById("c").value);
//   var result = "";
//   if (a > b && a > c) {
//     result = a + " is gratest among all";
//   }
//   if (b > a && b > c) {
//     result = b + " is gratest among all";
//   }
//   if (c > b && c > a) {
//     result = c + " is gratest among all";
//   }
//   document.getElementById("r").innerText = result;
// }

// function calc2(){
//   var a = parseInt(document.getElementById("a").value);
//   var day = "";
//   switch (a){
//     case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//   default:
//     day = "invalid day"

// }
// document.getElementById("r").innerHTML = "<mark>" + day + "</mark>";
// }

// function go() {
//   var div = document.getElementById("c");
//   // alert(div)
//   for (var i = 1; i <= 20; i++) {
//     // div.innerHTML += "<div class='alert alert-success'>" + i +".HELLO </div>";
//     if (i % 2 == 0) {
//       div.innerHTML +=
//         "<div class='alert alert-warning'>" + i + ".HELLO </div>";
//     } else {
//       div.innerHTML +=
//         "<div class='alert alert-success'>" + i + ".HELLO </div>";
//     }
//   }
// }
// function go(){
//     var num = parseInt(document.getElementById("a").value);
//     var prime = true;
//     for(var i = 2; i<num ; i++){
//         if(num%i==0){
//             prime=false;
//             break;
//         }
//     }
//     if(prime == true){
//         document.getElementById("t").innerText = num + " is a prime number";
//     }else{
//         document.getElementById("t").innerText = num + " is not a prime number";

//     }

// }

// function create() {
//   var num = parseInt(document.getElementById("num").value);
//   var content = document.getElementById("content");
//   content.innerHTML +=
//     "<table class='table table-bordered'>" +
//     "<thead>" +
//     "<tr>" +
//     "<th> columns" +
//     "</th>" +
//     "</tr>" +
//     "</thead>" +
//     "<tbody>";
//   for (var i = 1; i <= num; i++) {
//     content.innerHTML += "<tr>\n <td>\n <input type='text' placeholder='enter value'>\n </td>\n </tr>\n "
//   }

//   content.innerHTML += "</tbody>\n </table>";
// }

// function grid(){
//   var num = parseInt(document.getElementById("num").value);
//   var content = document.getElementById("content");
//   content.innerHTML="";
//   var temp = "";
//   for(var i =1 ; i<=num ; i++){
//     temp += "<div class='col-lg-3 col-md-4 col-sm-6  txt-center'";
//     if(i%2==0){
//       temp += "<a href='#'><img src='images/icons_03.jpg' class='img-fluid'>";
//     }else{
//       temp += "<a href='#'><img src='images/icons_05.jpg' class='img-fluid'>";
//     }
//     temp +="<h4>product name</h4></a>";
//     temp +="<h5 class='text-success'><del class='text-danger'>old price</del>new price</h5>";
//     temp +="<input type='button' onlick='go()' class='btn btn-info' value='add to cart'>";
//     temp +="</div>"
//   }
//   content.innerHTML = temp;
// }

// function reverse(){
//  var num = parseInt(document.getElementById("num").value);
//  var reverse = 0;
//  while(num>0){
//    var remainder = num%10;
//    reverse = reverse*10 + remainder;
//    num = parseInt(num/10);
//  }
//  document.getElementById("content").innerHTML = "<strong>" + reverse + "</strong>"
// }

// function go() {
//   var count = 0;
//   for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j <= 3; j++) {
//       count++;
//       // document.write(" hello");
//       document.getElementById("output").innerHTML += " <span class='badge badge-danger'>*</span>";
//       document.getElementById("output").innerHTML += "<br>";
//     }
//   }
// }
// function go() {
//   var count = 0;
//    for (var i = 1; i <= 5; i++){
//      for(var k = 1; k<=5-i;k++){
//       document.getElementById("output").innerHTML += " <span class='badge badge-dark'>&nbsp</span>";
//      }
//      for(j=i;j<=i;j++){
//        count++;
//        document.getElementById("output").innerHTML += " <span class='badge badge-warning'>*</span>";
//        document.getElementById("output").innerHTML += "<br>";
//      }
//    }
//   }

// function go() {
//   var count = 0;
//   for (var i = 1; i <= 6; i++) {
//     for (j = i; j <= (2*i); j++) {
//       count++;
//       document.getElementById("output").innerHTML +=
//         " <span class='badge badge-warning'>*</span>";
//       document.getElementById("output").innerHTML += "<br>";
//     }
//     for (var k = 2; k <= 1 + i; k++) {
//       document.getElementById("output").innerHTML +=
//         " <span class='badge badge-dark'>&nbsp</span>";
//     }
//   }
// }

// function go(){
//   var from = parseInt(document.getElementById("from").value);
//   var to = parseInt(document.getElementById("to").value);
//   document.getElementById("output").innerHTML = "";
//   var k = from;
//   while(k<=to){
//     var prime = true;
//     var num = k;
//     for(var i = 2; i<parseInt(num/2);i++){
//       if(num%i ==0);
//       prime=false;
//       break;
//     }
//   }
//   if(prime == true){
//     document.getElementById("output").innerHTML = "<div class='alert alert-success'>" + num + " is a prime number</div>";
//   }else{
//     document.getElementById("output").innerHTML = "<div class='alert alert-danger'>" + num + " is a prime number</div>";
//   }
// }




// arrays in java script

// var ar = [10 , 20, 30, 40];
// funtion go() {
//     var ar = [10 ,87 ,40 ,5];
//     console.log(ar)
//     console.log(ar.length)
// }

// var ar = [10 ,20 ,30, 40, "hello"];
// console.log(ar);
