
// function reverse1(arr) {
//     let n = arr.length - 1;
//     for (let i = 0; i <= n / 2; i++) {
//         let temp = arr[i];
//         arr[i] = arr[n - i];
//         arr[n - i] = temp;
//     }
//     return arr
// }
// const r = reverse1([1, 2, 3, 4, 5, 6, 7])
// console.log(r)

// //=================================================================

// console.log("second method")


function customReverse(originalArray) {
    let leftIndex = 0;
    let rightIndex = originalArray.length - 1;
    while (leftIndex < rightIndex) {
        // Swap the elements with temp variable
        // console.log(leftIndex,rightIndex)
        let temp = originalArray[leftIndex];
        originalArray[leftIndex] = originalArray[rightIndex];
        originalArray[rightIndex] = temp;
        // Move indices to the middle
        leftIndex++;
        rightIndex--;
    }
    return originalArray
}
const cus = customReverse([1, 2, 3, 4, 5, 6, 7]);
console.log(cus)

// //=============================================================================================

// function reverse(array) {
//     var output = [];
//     while (array.length) {
//         output.push(array.pop());
//     }
//     return output;
// }
// console.log(reverse([1, 2, 3, 4, 5, 6, 7]));

// //=======================================================================================

function reverseWithSwapMethod(arr) {
    let left = 0;
    let right = arr.length - 1;
    if (arr.length == 1 || 0) {
        return arr
    } else {
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++;
            right--
        }
        return arr
    }
}
let arr1 = [1]
console.log(reverseWithSwapMethod(arr1))

//===============================================================================


