let items = [20,25,36,18,50];
// first ways
// function selectionSortAcendingOrder(data){
//     let mid;
//     for(let i = data.length - 1; i >= 0; i--){
//         mid = i;
//         for(let j = i -1; j >= 0; j--){
//             if(data[j] < data[mid]){
//                 mid = j;
//             }
//         }
//         let temp = data[mid];
//         data[mid] = data[i]
//         data[i] = temp;
//     }
// }
// Second ways 
function selectionSortAcendingOrder(data){
    let mid;
    for(let i = 0; i < data.length; i++){
        mid = i;
        for(let j = i + 1; j < data.length; j++){
            if(data[j] > data[mid]){
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