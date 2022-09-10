let data = [1, 52, 10, 50, 40, 60, 70, 80, 90];
let searchData = 90;
function search(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == searchData) {
            return console.log(i);
        }
    }
    return false
}
search(data)
