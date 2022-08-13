let arr = [12, 20, 25, 50, 90, 100];

function binarySearchItrative(data,value){
    let start = 0;
    let end = data.length - 1;
    let position = undefined;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(data[mid] == value){
            position = mid;
            break;
        }
        else if(data[mid] < value){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    if(!position){
        console.log("Element not exist")
    }else{
        console.log(position)
    }
}
binarySearchItrative(arr, 500)