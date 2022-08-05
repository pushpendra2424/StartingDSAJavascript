let arr;
arr = [1,2,3,4,5,6,7,8,9,10];
let even_Number_count = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        even_Number_count +=1;
    }
}
console.log(even_Number_count)
