// function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
//   }
  
//   // usage example:
//   var a = ['a', 1, 'a', 2, '1'];
//   var unique = a.filter(onlyUnique);
  
//   console.log(unique); // ['a', 1, 2, '1']

//   // usage example:
// var myArray = ['a', 1, 'a', 2, '1'];
// // myArray.filter
// var uniquevalue = myArray.filter((vh, element, aarr) => aarr.indexOf(vh) === element);

// console.log(uniquevalue); // unique is ['a', 1, 2, '1']





function toUniqueArray(a){
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        if (newArr.indexOf(a[i]) === -1) {
            newArr.push(a[i]);
        }
    }
  return newArr;
}
var colors = ["red","red","green","green","green"];
var colorsUnique=toUniqueArray(colors); // ["red","green"]
console.log(colorsUnique)






// var myArray = ['a', 1, 'a', 2, '1'];

// let unique = [...new Set(myArray)];

// console.log(unique); // unique is ['a', 1, 2, '1']