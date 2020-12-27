// --@3--
// var add = document.querySelector("#add");
// var sub = document.querySelector("#sub");
// var input = document.querySelector("#input");

// add.addEventListener("click", () => {
//   input.value = parseInt(input.value) + 1;
//   while (input.value == 3) {
//     input.value = 0;
//   }
// })

// sub.addEventListener("click", () => {
//   input.value = parseInt(input.value) - 1;
// })


// billing app
// var amt = document.querySelector("#amtBill");
// var button = document.querySelector("#payCash");
// var paying = document.querySelector("#amtPaid");
// var final = document.querySelector("#val");
// var ret = document.querySelector("#val-ret");
// var two_th = document.querySelector("#twoth");
// var five_h = document.querySelector("#fhun");
// var one_h = document.querySelector("#ohun");
// var two_t = document.querySelector("#tten");
// var one_t = document.querySelector("#ten");
// var five = document.querySelector("#fi");
// var one = document.querySelector("#on");

// button.addEventListener("click", () => {
//   final.value = (paying.value - amt.value)
// })

// ret.addEventListener("click", () => {
//   two_th.value = parseInt(final.value / 2000);
//   var rem1 = final.value % 2000;
//   five_h.value = parseInt(rem1 / 500);
//   var rem2 = final.value % 500;
//   one_h.value = parseInt(rem2 / 100);
//   var rem3 = final.value % 100;
//   two_t.value = parseInt(rem3 / 20);
//   var rem4 = final.value % 20;
//   one_t.value = parseInt(rem4 / 10);
//   var rem5 = final.value % 10;
//   five.value = parseInt(rem5 / 5);
//   var rem6 = final.value % 5;
//   one.value = parseInt(rem6 / 1);
// })

// bday app

// var bdate = document.querySelector("#bd");
// var bmnth = document.querySelector("#mth");
// var byear = document.querySelector("#yr");
// var lucky_num = document.querySelector("#luck-num");
// var luck_btn = document.querySelector("#luck");
// var chk_luck = document.querySelector("#is-luck");

// luck_btn.addEventListener("click", () => {
//   var sum = 0;
//   var bdate1 = parseInt(bdate.value);
//   var sum1 = 0;
//   while (bdate1) {
//     sum1 += bdate1 % 10;
//     bdate1 = Math.floor(bdate1 / 10);
//   }
//   var bmnth1 = parseInt(bmnth.value);
//   var sum2 = 0;
//   while (bmnth1) {
//     sum2 += bmnth1 % 10;
//     bmnth1 = Math.floor(bmnth1 / 10);
//   }
//   var byear1 = parseInt(byear.value);
//   var sum3 = 0;
//   while (byear1) {
//     sum3 += byear1 % 10;
//     byear1 = Math.floor(byear1 / 10);
//   }
//   var sum = parseInt(sum1 + sum2 + sum3);
//   console.log(sum);

//   lucky_num1 = parseInt(lucky_num.value);
//   var check = parseInt(sum / lucky_num1);
//   console.log(check);

//   if (check == 0) {
//     chk_luck.value = "Your luck seems awesome!";
//   }
//   else {
//     chk_luck.value = "Your luck doesn't seem awesome!";
//   };

// })

// triangles

// var num_1 = document.querySelector("#num1");
// var num_2 = document.querySelector("#num2");
// var num_3 = document.querySelector("#num3");
// var btn_sm = document.querySelector("#ang-sum");
// var out_sm = document.querySelector("#ang-ans");

// btn_sm.addEventListener("click",() => {
//   var n1 = parseInt(num_1.value);
//   var n2 = parseInt(num_2.value);
//   var n3 = parseInt(num_3.value);
//   var angs = (n1+n2+n3);

//   if (angs == 180){
//     out_sm.value = parseInt(angs)+" , you are right!";
//   }
//   else{
//     out_sm.value = "oops u r wrong!";
//   }
// })



//palindrome bday
// var date = document.querySelector("#bdt");
// var month = document.querySelector("#bmnth");
// var year = document.querySelector("#byr");
// var btn = document.querySelector("#pal-bt");
// var ans = document.querySelector("#pal-ans");

// btn.addEventListener("click",() => {
//   var dt = parseInt(date.value);  
//   var mt = parseInt(month.value);
//   var yr = parseInt(year.value);

//   var no = [dt,mt,yr].join("");
//   console.log(no);
//   var a,b,temp=0;
//   b=no;
//   while(no>0) {
//     a=no%10;
//     no=parseInt(no/10);
//     temp=temp*10+a;
//   }

//   if (temp==b) {
//     ans.value = "Yay! its a palindrome."
//   }else{
//     ans.value = "Oh no! it aint a palindrome."
//   }
// })





const findNearestPalindrome = num => {
   const strNum = String(num);
   const half = strNum.substring(0, Math.floor(strNum.length/2));
   const reversed = half.split("").reverse().join("");
   const first = strNum.length % 2 === 0 ? half : strNum.substring(0,
   Math.ceil(strNum.length/2))
   return +(first+reversed);
};

console.log(findNearestPalindrome(1632001));
console.log(findNearestPalindrome(2331999));
