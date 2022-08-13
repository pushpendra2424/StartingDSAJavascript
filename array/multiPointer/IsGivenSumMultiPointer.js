//given a sorted array of integer find  whether a pair exist with given sum 
// const arr = [1,2,3,4,5];
// function isGivenSumIsPresent(arr,sum){
//     let isPairExist = false;
//     for(let i = 0; i < arr.length - 1; i++){
//         // console.log(arr[i])
//         for(let j = i + 1; j < arr.length; j++){
//             // console.log(arr[j])
//             if(arr[i] + arr[j] === sum){
//                 return isPairExist = true;
//             }
//         }
//     }
//     return isPairExist;
// }
// // time complexcity O(n^2)
// const result = isGivenSumIsPresent( [1,2,3],5)
// console.log(result)



function optimalIsGivenSumIsPresent(arr,sum){
   
    let left = 0;
    let right = arr.length - 1;
    let isPresent = false;
    // console.log(right)
    while(left < right){
        if(arr[left] + arr[right] === sum){
            isPresent = true;
            break;
        }
        else if(arr[left] + arr[right] > sum){
            right--;
        }
        else{
            left++;
        }
    }
console.log(isPresent);
}
optimalIsGivenSumIsPresent([1,2,3,4,5],5)
