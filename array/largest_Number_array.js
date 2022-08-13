
let arr = [3, 6, 2, 56, 32, 5, 89, 32];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
console.log(largest);