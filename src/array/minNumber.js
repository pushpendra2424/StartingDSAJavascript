let arr = [3, 6, 2, 56, 32, 5, 89, 32];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (min > arr[i] ) {
        min = arr[i];
    }
}
console.log(min);