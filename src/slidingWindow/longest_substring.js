// // Find the largest substring of a string that contains distinct characters
// // subtring = consecutive
// let str = "pushpendra"
// let indexStartOfLongestSub = 0;
// let indexEndOfLongestSub = 0;
// let swStart = 0;
// let swEnd = 0;
// let windowMap = {}
// while (swStart <= str.length) {
//     if (!windowMap[str[swEnd]]) {
//         windowMap[str[swEnd]] = 1;
//         if (swEnd - swStart > indexEndOfLongestSub - indexStartOfLongestSub) {
//             indexStartOfLongestSub = swStart;
//             indexEndOfLongestSub = swEnd;
//         }
//         swEnd++
//     }
//     else {
//         while (str[swStart != str[swEnd]]) {
//             swStart++;
//             windowMap[str[swStart]]
//         }
//     }
// }
// console.log(indexEndOfLongestSub, indexStartOfLongestSub)


//=========================================================================================
// find the largest substring with k distinct character

// find all the substring and check each substrig with k chracter O(n^2)
//  substirng find O(n) each substring check time O(n^3)

// let a = 51;
// let b = 10541;
//  console.log(a+b)
function isCurrentValidWindow(count, k) {

    let curr_u_c = 0;
    for (let i = 0; i < count.length; i++) {
        curr_u_c++;
    }

    return k >= curr_u_c
}

function findKthLargestSubstring(str, k) {
    let u_c_Count = 0;   // unique character count
    let count = []; // array contains the frequency of character
    // a-z(26)   // indexing of array is 0,1,2,3,4.......
    for (let i = 0; i < 26; i++) {
        count.push(0);
    }
    // return count
    // count the number of uniqe character
    // console.log('a-z'.charCodeAt(0))
    for (let i = 0; i < str.length; i++) {
        if (count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] == 0) {
            u_c_Count++;
        }
        count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    }
    // console.log(count, u_c_Count)
    // if number of unique cahracter is less than k then substring can not possible
    if (k > u_c_Count) {
        console.log("substring can not found")
    }
    // reset the count array 
    for (let i = 0; i < 26; i++) {
        count[i] = 0;
    }
    let start = 0;
    let end = 0;
    let max_window_size = 1;
    let max_window_start = 0;
    count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    for (let i = 1; i < str.length; i++) {
        count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        end++;    // increasing the window size

        while (!isCurrentValidWindow(count, k)) {
            count[str[start].charCodeAt(0) - 'a'.charCodeAt(0)]--;
            start++;
        }
        if (end - start > max_window_size) {
            max_window_size = end - start + 1;
            max_window_size = start;
        }
    }
}
const result = findKthLargestSubstring("aaaaaaaaaaaabc", 5)
console.log(result)





