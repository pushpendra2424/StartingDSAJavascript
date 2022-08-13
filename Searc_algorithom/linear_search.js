let data = [30,50,60,70,1,32,3,5,6];
let find = 200;
let position = undefined;
function linearSearch(data){
    for(let i = 0; i <= data.length; i++){
        if(data[i] == find){
            position = i;
            break;
        }
    }
    return position = "element not found"

}
linearSearch(data)
console.log(position)