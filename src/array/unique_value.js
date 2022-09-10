
// function toUniqueArray(a){
//     var newArr = [];
//     for (var i = 0; i < a.length; i++) {
//         if (newArr.indexOf(a[i]) === -1) {
//             newArr.push(a[i]);
//         }
//     }
//   return newArr;
// }
// var colors = ["red","red","green","green","green"];
// var colorsUnique=toUniqueArray(colors); // ["red","green"]
// console.log(colorsUnique)

//===================================================================================



// let items1 = ["rohit", "rahul", "vikas"]
// function uniq(items,item){
//     if((items.indexOf(item)=== -1)) {
//         items.push(item);
//         console.log(items);
//     }
//     else{
//         console.log("allready exists")
//     }
// }
// uniq(items1,"rohit")

// function uniqNum(numArr, num){
//     if (!array.includes(num)){
//         array.push(num);
//     }
//     else{
//         console.log("allready exists")
//     }
//     return numArr
// }
// const array = [5,8];
// console.log(uniqNum(array, 5))



//============================================================================


function unique12(arrr){
    let obj = {};
    for(let i = 0; i < arrr.length; i++){
        let key = arrr[i]
        if(!obj[key]){
            obj[key] = 1
        }
    }
    return Object.keys(obj)
}
const res = unique12(["ram","vikas","rohit","rohit"])
console.log(res)




//=================================================================================


// var myArray = ['a', 1, 'a', 2, '1'];

// let unique = [...new Set(myArray)];

// console.log(unique); // unique is ['a', 1, 2, '1']


//==================================================================





