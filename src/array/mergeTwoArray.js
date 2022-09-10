let data1 = [1,2,3,4,6,7,8,9];
let data2 = [10,11,12,13,15];
let data3 = [];
let d1 = 0;
let d2 = 0;
let d3 = 0;

// first way

function merge(arry1, array2){
    for(let i = 0; i < data1.length; i++){
        data3[i] = data1[i]
    }
    // console.log(data3)
    for(let j = 0; j < data2.length; j++){
        data3[data1.length+j] = data2[j]
    }
    console.log(data3.sort((a,b)=>(a-b)))
}
merge(data1,data2)

// second way 

// while(d1 < data1.length && d2 < data2.length){
//     if(data1[d1] < data2[d2]){
//         data3[d3] = data1[d1];
//         d3++;
//         console.log(data3[d3])
//     } 
// }
//merge(data1, data2)

