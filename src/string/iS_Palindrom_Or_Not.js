function isPalindrome(data) {
    let start = 0;
    let end = data.length - 1;
    let result = true;
    while (start < end) {
        if (data[start] != data[end]) {
            result = false;
        }
        start++;
        end--;
    }
    return result;
}
let str = 180;
console.log(isPalindrome(str))