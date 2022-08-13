let data = [10,20,30,40,50,60,70]
let position = 0;
for(let i = position; i < data.length-1; i++){
    console.log(i)
    data[i] = data[i + 1]
}
data.length = data.length - 1
console.log(data)