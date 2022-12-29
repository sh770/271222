// loops - repeat code X times
let condition = true;
//  while (condition){
//     console.log(1)
//  }
//  as long as the condition is true, print 1 - this can continue for ever
// כל דבר שיש לו ערך ולא ריק הוא יהיה אמת (1)
// אם הערך ריק אנחנו לא צריכים שום מידע בשביל לייצג אותו
// אם רוצים לשבור לללואה אינסופית צריך לשים תנאי
//  ברייק שובר ללואה אחת
// בספירה אפשר לעשות ++ לפני או אחרי המספר:
// לפני הסופר קודם מעלים את הערך ואז מדפיס
// אחרי הסופר קודם מדפיס ואז מעלה
// while (true){
//     console.log(1)
//     if(5 > 3){
//         break;
//         // or
//         condition = false;
//     }
//  }

//  while (true){
//      if(5 > 3){
//          condition = false;
//         }
//         console.log(number++);
//     }
//     console.log("i'm outside the while loop:", number);

// let number = 0;
// while (condition) {
//     if (number > 100) {
//         if (number % 2 == 0) {
//             console.log("even");
//         } else {
//             if (number % 11 == 0) {
//                 console.log("my number:", number);
//                 while ((number > 0 || condition == false)) console.log(number--);
//                 condition = false;
//             }
//         }
//     }
//     console.log(number++);
// }
// console.log("i'm outside the while loop:", number);


// -------------------------------------------------------------------------------------------


//  לולאת FOR -זאת לולאה שאני רוצה שתרוץ מספר פעמים שאני מגדיר
// let index;
// for (index = "a"; index != "aaa"; index += "a"){
// // code goes here
// }
// console.log(index); //aaa

// let x,y,z;
// x= "JavaScript"
// for (index = 0; index < x.length; index++){
//     console.log(x[index]); //מדפיס את כל המערך לפי במקום שלו

// }


// let x,y,z;
// y = ["adsd", "asdf", "Aassd" ["assf"], 123, {"name":"alisa"}]
// x= ["JavaScript", "Payton", "Java", "CPP", ["JavaScript"]];
// for (i = 0; i < x.length; i++){
//     console.log(x[i]); //מדפיס את כל המערך לפי המקום שלו
//     for(j = 0; j < x[i].length; j++){ //מתסכל על התווים הפנימיים של כל מערך
//         console.log(x[i][j]);
//     }

// }

let mystr = "JavaScript";
let arr=[];
for(let i = 0; i < mystr.length; i++){
    arr.push(mystr[i]);
}
console.log(arr); //מדפיס כל תו לבד בתוך המערך