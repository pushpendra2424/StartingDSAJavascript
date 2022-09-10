// function pairSumZero(arr) {
// // sorted array work
// // brute force
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == 0) {
//                 console.log(([arr[i], arr[j]]))
//             }
//             break;
//         }
//     }
//     return false
//     // time comlexcity O(n^2)
//     // try time complexcity reduce O(n)
// }
// const result = pairSumZero([-5, -4, -2, 3, 5, 6, 7]);
// console.log(result);
// let arr1 = [-5,-4,-3,-2,1,2,8,9,10]
// let i = 0,j=arr1.length - 1
// while(i<j){
//     if(arr1[i] + arr1[j] ==0 ){
//         console.log((arr1[i], arr1[j]))
//     }
//     else if (arr1[i] + arr1[i] > 0){ 
//         j = j-1;
//     }
//     else if(arr1[i] + arr1[j] < 0){
//         i = i + 1;
//     }
// }
// console.log(false)
// console.log(arr1)


function closestSumPair(arr, closestSum){
    let result = []
    let proximity = Infinity;
    let j = arr.length - 1;
    let i = 0;
    while(i < j){
        if(Math.abs(arr[i] + arr[j] -12) < proximity){
            result = [arr[i], arr[j]];
            proximity = Math.abs(arr[i] + arr[j] -closestSum);
        }
        if(arr[i] + arr[j] - closestSum > 0){
            j--;
        }
        if(arr[i] + arr[j] -closestSum <0){
            i++;
        }
    }
    return proximity
}
closestSumPair([1,2,5,8,9,14], 12)