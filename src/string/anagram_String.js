// anagram

// function anagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     const result = {};
//     for (let i = 0; i < str1.length; i++) {
//         let char = str1[i];
//         result[char] = result[char] ? result[char] += 1 : result[char] = 1;
//     }

//     for (let i = 0; i < str2.length; i++) {
//         let char = str2[i];
//         if (!result[char]) {
//             return false;
//         }
//         else {
//             result[char] = -1;
//         }
//     }
//     return true;
// }

// console.log(anagram('ronak', 'konar'));

//==================================================================

function checkAnagram(str1, str2) {
    let objStr1 = {};
    // console.log(str1, str2)
    if (str1 != str2) {
        return false;
    }
    for (let char of str1) {
        // console.log(char)
        objStr1[char] = (objStr1[char] || 0) + 1;
    }
    for (let char of str2) {
        // consolr.log(char)
        if(!objStr1[char]){
            return false;
        }
        else{
            objStr1[char]--;
        }
    }
    return true;
}
console.log(checkAnagram("hellop","hellop"))