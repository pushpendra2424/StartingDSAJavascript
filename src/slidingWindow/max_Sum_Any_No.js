// function windowMax(arr, w) {
//     let result = [];
//     for (let currWindow = 0; currWindow < arr.length - w +1 ; currWindow++) {
//         let max = arr[currWindow];
//         // console.log(max)
//         for(let i = currWindow; i < currWindow + w; i++){
//             if(max < arr[i]){
//                  max = arr[i];
//                 //  console.log(max+"hi")
//             }
//         }
//         result.push(max);
//     } 
//     return result;
// }    
// // console.log(windowMax([1,3,-1,-3,5,3,6,7], 3))
// console.log(windowMax([23, 5, 8, 10, 50, 3, 0, 90], 3));
// w e will push Element in window in an smart way
// in which case element will not needed in window (remove ho jayega)
// 1. case => element does not inside the window
// 2 .case => while element inside curr window is less then incomming element
// else append element in last of window
// function optimalMaxWindow(arr){
//     const deque = []; 
//     let result = [];
//     let w = 3;
//     let n = arr.length;
//     for(let cel = 0;cel < w; cel++){
//         while(deque.length > 0 && arr[cel] >= deque.length - 1){
//             deque.pop()//removing element from last from deque which is less than in comming elemnt
//         }
//         deque.push(cel);
//     }
//     for(let cel = w; cel < n; cel++){
//         result.push(arr[deque[0]])
//         while(deque.length > 0 && arr[cel] >= deque[deque.length - 1]){
//             deque.shift();// removing element from last from deque which is less than in comming element
//         }
//         while(deque.length > 0 && cel - w >= deque[0]){
//             deque.pop();// removing element from last from deque which is less than in comming element
//         }
//         deque.push(cel);
//     }
//     result .push(arr[deque[0]])
//     return result;

// }
// console.log(optimalMaxWindow([1,2,3,4,6,9,10,15]))