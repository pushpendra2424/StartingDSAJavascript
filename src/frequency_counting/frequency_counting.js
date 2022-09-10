// BRUITE FORCE APPROACH

// let arr = [1,1,4,3,3,6,2,2];
// // let b = [4,36,4,16];
// let max_occaurance = 0;
// let max_occaurance_character = null;
// for(let i = 0; i < arr.length; i++) {
//     let curCharacterCount = 0;
//     for(let j = 0; j < arr.length; j++){
//         if(arr[i] == arr[j]){
//             curCharacterCount =curCharacterCount + 1;
//         }
//     }
//     if(curCharacterCount > max_occaurance){
//         max_occaurance = curCharacterCount;
//         max_occaurance_character = arr[i];
//     }
// }
// console.log(max_occaurance,max_occaurance_character);
// // time Complexcity O(n^2)

//========================================
// let arr = [1,1,4,3,3,6,2,2];
// let max_occaurance = 0;
// let max_occaurance_character = null;
// for(let i = 0; i < arr.length; i++) {
//     let curCharacterCount = 0;
//     for(let j = i; j < arr.length; j++){
//         if(arr[i] == arr[j]){
//             curCharacterCount =curCharacterCount + 1;
//         }
//     }
//     if(curCharacterCount > max_occaurance){
//         max_occaurance = curCharacterCount;
//         max_occaurance_character = arr[i];
//     }
// }
// // time complexcity O(n*(n-1)/2) = O(n^2)
// console.log(max_occaurance,max_occaurance_character);
  
//==================================================================
// if one element in an array then 
let arr = [1]
let freqObj = {};
let max_occaurance = 0;
let max_occaurance_character = null;
// freqObj[i] //insertion and deletion O(1)
for(let i = 0; i < arr.length; i++){
    if(freqObj.hasOwnProperty(arr[i])){
         freqObj[arr[i]] += 1;
    }
    else{
        freqObj[arr[i]] = 1
    }
    if(max_occaurance < freqObj[arr[i]]){
        max_occaurance = freqObj[arr[i]];
        max_occaurance_character = arr[i];
    }
}
// time complexcity =>  O(n)
console.log(max_occaurance,max_occaurance_character);

//===============================================


// // word counting max 
// let arr = "lorem lorem abc iuf jwete jgtfw"
// arr = arr.split(' ')
// console.log(arr)
// // console.log(arr.toString())
// let freqObj = {};
// let max_occaurance = 0;
// let max_occaurance_character = null;
// // freqObj[i] //insertion and deletion O(1)
// for(let i = 0; i < arr.length; i++){
//     if(freqObj.hasOwnProperty(arr[i])){
//         freqObj[arr[i]] += 1;
//     }
//     else{
//         freqObj[arr[i]] = 1
//     }
//     if(max_occaurance < freqObj[arr[i]]){
//         max_occaurance = freqObj[arr[i]];
//         max_occaurance_character = arr[i];
//     }
// }
// // time complexcity =>  O(n)
// console.log(max_occaurance,max_occaurance_character);
