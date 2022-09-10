// obj = {name: pushpendra} object keys always string
// map = {name => Pushpendra} map keys any type


let data = new Map([
    ['name','anil'],
    [true,'bool key']
])
data.set('color','green');
data.set('dfe','green');
data.set('dsf','green');
data.set('sdw','green');
data.size 
 console.log(data.delete('name'))
// check key are awailable or not
console.log(data.has('color'))

// get value
console.log(data.get('name'))
// if all data clear
// data.clear()

// console.log(data);

// for(x of data){
//     console.log(x[0])
// }

// data.forEach((value, key)=>{
//     console.log(key)
// })





