let data = [1,89,12,35,56,464,45];
let newData = 500;
let position = 5;
for(let i = data.length-1; i >= 0; i--){
    // console.log(data[i])
    if(i>=position){
        data[i+1] = data[i]
        if(i==position){
            data[i] = newData
        }
    }
    // console.log(data)
}
console.log(data)
