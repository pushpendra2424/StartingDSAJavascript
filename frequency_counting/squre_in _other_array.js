let a = [1, 2,2, 3, 4, 5];
let b = [1, 4,4, 9, 16, 25];
objA = {};
objB = {};
for (let element of a) {
    objA[element] = objA[element] ? objA[element] + 1 : 1
}
for (let element of b) {
    objB[element] = objB[element] ? objB[element] + 1 : 1
}
for(let element in objA){
console.log(element)
}
console.log(objB)