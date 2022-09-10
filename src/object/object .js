//Object
var obj = {}; // time complexcity o(1)
obj.fistName = "Pushpendra";
obj.lastName = "Kumar";// obj.key => insertion o(1) constant
obj.age = 28;
obj.degignation = "Software devloper";
console.log(obj)

//access time complexcity o(1)

console.log(obj.fistName, obj['fistName'])

// deleting time complexcity O(1)

// searching time complexcity O(n)
//if any key have value 23

// time complexcity of Object.keys is O(n)
console.log(Object.keys(obj))

//time complexcity of Object.value is O(n)
console.log(Object.values(obj))

//time complexcity of Objact.entries O(n)
console.log(Object.entries(obj))//return array of array

// time complexcity of Object.hasOwnProperty O(1)
console.log(obj.hasOwnProperty('hobby'))// return bollean value
console.log(obj.hasOwnProperty('age'))


