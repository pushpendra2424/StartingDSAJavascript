// Initialize two variables first and second to INT_MIN as
// first = second = INT_MIN
// Start traversing the array,
// a) If the current element in array say arr[i] is greater
// than first. Then update first and second as,
// second = first
// first = arr[i]
// b) If the current element is in between first and second,
// then update second to store the value of current variable as
// second = arr[i]
// Return the value stored in second.
function findSecondLargestElem(arr){
    let first = -1 , second = -1;
    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }
        else if( arr[i] > second && arr[i] != first){
            second = arr[i];
        }
    }
    console.log(second);
}
let arr = [12, 35, 1, 10, 34, 1]
findSecondLargestElem(arr);
// Time Complexity: O(n). 
// Only one traversal of the array is needed.
// Auxiliary space: O(1). 
// As no extra space is required.
