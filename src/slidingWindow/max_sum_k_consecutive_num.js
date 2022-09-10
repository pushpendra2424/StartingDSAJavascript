// Example: Given an array of integers of size ‘n’, 
// Our aim is to calculate the maximum sum of ‘k’ 
// consecutive elements in the array.
// Input  : arr[] = {100, 200, 300, 400}, k = 2
// Output : 700

// Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}, k = 4 
// Output : 39
// We get maximum sum by adding subarray {4, 2, 10, 23}
//  of size 4.

// Input  : arr[] = {2, 3}, k = 3
// Output : Invalid
// There is no subarray of size 3 as size of whole array is 2.

//================================start===================

// O(n*k) solution for finding maximum sum of
// a subarray of size k
// Returns maximum sum in a subarray of size k.
// function maxSum( arr, n, k){
//     // let max_sum = Number.MIN_VALUE;
//     let max_sum = 0;
//     for (let i = 0; i < n - k + 1; i++) {
//         let current_sum = 0;
//         for (let j = 0; j < k; j++){
//             // console.log(i,j+","+(i+j))
//             current_sum = current_sum + arr[i + j];
//         }
//         if(current_sum > max_sum){
//             max_sum = current_sum
//         }//or
//         // max_sum = Math.max(current_sum, max_sum);
//     }
//     return max_sum;
// }
// let arr = [ 1, 4, 2, 10, 2, 3, 1, 0, 20 ],k = 4,n = arr.length
// console.log(maxSum(arr, n, k));//time complexcity O(n*k)



//===============second method time complexcity O(n)
    // O(n) solution for finding
    // maximum sum of a subarray
    // of size k
//     function maxSum(arr, n, k) {
//         let max = 0;
//         let sum = 0;
//         // find initial sum of first k elements
//         for (let i = 0; i < k; i++) {
//             sum += arr[i];
//             max = sum;
//         }
//         // console.log(sum,max)
//         // iterate the array once
//         // and increment the right edge
//         for (let j = k; j < n; j++) {
//             sum += arr[j] - arr[j - k]; //4-
//             // compare if sum is more than max,
//             // if yes then replace
//             // max with new sum value
//             if (sum > max) {
//                 max = sum;
//             }
//         }
//         return (max);
//     }
// let arr = [1, 3, 5, 6, 2, 7, 8], k = 3, n = arr.length;
// console.log(maxSum(arr, n, k));

//===========================================

let arr = [1, 3, 5, 6, 2, 7, 8],maxSum = 0;  //to keep track of maximum sum.
let sumOfWindow = 0; //to keep track of sum of the window.
let windowSize = 0;
for (let i = 0; i < arr.length + 1; i++){
  if(windowSize == 3){
    console.log('current windows sum is');
    console.log(sumOfWindow);
    maxSum = Math.max(maxSum, sumOfWindow);//storing the maximum sum
    sumOfWindow = sumOfWindow - arr[i - 3];//deleting the end element of the window
    windowSize--;
  }
//   console.log(sumOfWindow,windowSize+"ji")
  sumOfWindow = sumOfWindow + arr[i];//adding elements to the window.
  windowSize++;
}
console.log("The maximum sum is: " + maxSum);