// let a = () => {
//     setTimeout(() => {
//         console.log("internal serval call.");
//     }, "5000");
//     console.log("One");
// };
// let b = () => {
//     setTimeout(() => {
//         console.log("Two");
//     }, "1000");
//     console.log("function b called");
// };
// console.log("Coding Test");
// a();
// b()
// // coding test 
// // one
// // function b called
// // Two
// // one


// for (var i = 0; i < 4; i++) {
//     for (var i = 0; i < 4; i++) {
//         // global scope
//         setTimeout(() => console.log(i));
//     }
// }
       
// // Simplify the array(convert it into 1D array)
// let array = [1, [2, 3], 2, [55, 2, 3], [2, 3, [4, 5], 6, 1], 4, 5];
            
            
// // Sort the array
// const arr1 = [8, 12, 44, 34, 55, 11, 22, - 11, -97, 0, 11, 0, 12, 66, 65, 33, 4];
// function acending(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(acending(arr1))
// function decending(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] < arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr;
// }
// console.log(decending(arr1))
// print pyramid
// let num = 3;
// let str = "";
// for(let i = 1; i <= num; i++){
//     for(let j = 1; i <= num - i; j++){
//        process.stdout.write(' ') 
//     }
//     for(let k = 0; k < 2 * i -1; k++){
//         process.stdout.write('*')
    
//     }
//     console.log()
// }
console.log(5)
//                 *
//                ***
//               *****
//              *******
//             *********
            
// write a schema for blog.
// const mongoose = require('mongoose')
// const blogschema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     // authorId : {
//     // required : true,
//     // type: mongoose.Types.ObjectId,
//     // refs:"Author"
//     // },
//     tags: [{
//         type: String,
//     }],
//     isPublished: {
//         type: Boolean,
//         default: false
//     },
//     isDeleted: {
//         type: Boolean,
//         default: false
//     },
//     publishedAt: {
//         type: Date
//     }
// })
// module.exports = mongoose.model("blog", blogschema)
    
    
    
    
    
// write down the systax for promise.
// let pro = new Promise()
