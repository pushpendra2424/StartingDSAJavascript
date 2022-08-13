let data = [1,2,3,4,5,6,7,10,15,19,20]
console.log(data[5])//print value by  index no 
function traverse(value){
    for(let i = 0; i<value.length; i++){
        console.log(value[i])//print all element traversing
    } 
}
traverse(data)//function call