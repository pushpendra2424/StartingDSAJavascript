// function reverseStringMethod1(str) {
//     let reverseString = '';
//     for (let i = 0; i < str.length; i++) {
//         // str + reverseString
//         reverseString = str[i] + reverseString;
//     }
//     return reverseString;
// }
// console.log(reverseStringMethod1("hi i am rohit"))


function reverseStringMethod2(str) {
    let reverseString = '';
    for (let i = str.length-1; i >= 0; i--) {
        // str + reverseString

        reverseString = reverseString + str[i] ;
    }
    return reverseString;
}
console.log(reverseStringMethod2("hi i am rohit"))