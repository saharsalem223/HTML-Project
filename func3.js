

/* هنا نبغى نحسب مساحة مستطيل */
//let recArea = function (length, width){
   // let area = length * width;
    //document.getElementById("output").innerHTML =
   // area;
//}
//let length = prompt ("length?");
//let width = prompt("width?");
/* هذي المتغيرات خارج الفنكشن حقتنا للمستخدم يعني */
//recArea(length, width);

//اللي يكون حولها زي علامة التعليق هذي يعني انها اوامر برمجية



/* we can do the same function but with the return */

let recArea = function( lengthX, widthX){
    let Area = lengthX * widthX;
    /* here we declare the recarea and theformula for the area by the same varables as in the recarea*/
    return Area;

}

let lenght = prompt("lenght?");
let width = prompt("width?");

/* هنا عرفنا متغيرات للمستخدم خارج الفنكشن حقتنا */
document.getElementById("output").innerHTML =
recArea(lenght, width);
/* هنا الريترن عندنا تشتغل لما نسوي ريكول للفنكشن حقتنا فتطبق العملية اللي علمناها فوق في المتغيرين حقت المستخدم مو المتغيرين حقت الفنكشن */
