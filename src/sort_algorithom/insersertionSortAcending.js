let data = [1,5,8,9,10,18,25];
function insertionSort(arr){
    let i, j, current;
    for(i = 1; i < arr.length; i++){
        current = arr[i];
        j = i - 1;
        while(j >= 0 && arr[j] > current){
            arr[j + 1] = arr[j]
            j = j - 1;
        }
        data[j + 1] = current;
    }
    return arr;
}
console.log(insertionSort(data))