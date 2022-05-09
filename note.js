// A B n 5 3 1
// var A = 9;
// var B = 5;
// var n = 2;

// function isInteger(num) {
//     return (num ^ 0) === num;
//   }
  
// решение 1
// function helpVasya (string){
//     var [A, B, n] = string.split(" ");
    
//     if ((+A - +B) >= 2* +n && (+A - +B)%2 == 0) {
//         console.log("YES")}
//     else {
//         console.log("NO")
//     }
// }

// (helpVasya("5 3 1"))

// задача 2

var n = 5;
var m = 10;

// решение 2 
// function paint(string){
//     var[n, m] = string.split(" ");
//     var i = 1;
//     while (+n != +m) {
//         if (+n > +m){

//             n = +n- +m
//         }
//         else {
//             m = +m- +n
//         };
//         i++;
//     }
//     console.log(i);
// }

// paint("3 4")

// задача 3








function helpPete(n , A){
    var d = A.split(" ").map((a)=> parseInt(a));
    var c = d.reverse()
    var xo = 0;

    var i = 0;
    for(i in c){
        xo = Math.ceil((xo+c[i])**.5)

    }
    console.log(xo)

}

helpPete(3, "2 1 100")
