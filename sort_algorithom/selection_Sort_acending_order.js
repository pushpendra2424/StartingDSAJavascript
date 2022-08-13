let items = [1,2,8,5,7,4];
function selectionSortAcendingOrder(data){
    let mid;
    for(let i = 0; i < data.length; i++){
        mid = i;
        for(let j = i + 1; j < data.length; j++){
            if(data[j] < data[mid]){
                mid = j;
            }
        }
        let temp = data[mid];
        data[mid] = data[i]
        data[i] = temp;
    }
}
selectionSortAcendingOrder(items)
console.log(items)