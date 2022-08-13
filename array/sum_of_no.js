// let n = 500;
// let sum = 0;
// for(let i = 1; i <= n; i++){
//     sum += i 
// }
// console.log(sum)
// // time complexcity Big o(n)
// let n = 500;
// let sum = 0
// sum = (n * (n+1) / 2)
// console.log(sum)

function addSum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i 
    }
    return console.log(sum)

    //second approach
    // sum = (n * (n+1) / 2)
    // // time complexcity o(1)
    // return console.log(sum)
}
// time complexcity o(n)
addSum(10000)
// const result = addSum(500)
// console.log(result)
// time complexcity Big o(1)
// ===============================================
function countUpDown(n){
    console.log("going up")
    for(var i = 0; i < n; i++){
        console.log(i)
    }
    console.log("going dowm")
    for(var j = n-1; j >= n; j--){
        console.log(j)
    }
    console.log("back dowm bye")
}
countUpDown(5)
// time complexcity o(n) or o(2n)
//===========================================================

function printAllPairs(n){
    for(var i =0; i < n; i++){
        for(var j = 0; j < n; j++){
            console.log(i,j)
        }
    }
}
printAllPairs(5)
// time complexcity o(n^2)
//==================================================================

function numberOfHalves(n){
    var count = 0;
    while(n > 1){
        console.log(n)
        n /=2;
        count++
    }
    return count;
}
const result1 = numberOfHalves(5)
console.log(result1+"half")

// time complexcity o(log n)
//=============================================================================

function totalNumberOfHalves(n){
    var total = 0;
    for(var i = 0; i < n; i++){
        total += numberOfHalves(n)
    }
    return total

}
const total = totalNumberOfHalves(400)
console.log(total + " total")
 // time complexcity o(n * (log n))
//=================================================================

// two number swap 
// space complexity
// let a = 10;
// let b = 5;
// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(a);
// console.log(b);


