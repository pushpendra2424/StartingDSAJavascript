var exp = 'pushpendra' ;
var expCounts = {};
var maxKey = '';
for(var i = 0; i < exp.length; i++){
    var key = exp[i];
    if(!expCounts[key]){
     expCounts[key] = 0;
    }
    expCounts[key]++;
    if(maxKey == '' || expCounts[key] > expCounts[maxKey]){
        maxKey = key;
    }
}

console.log(maxKey + ":" + expCounts[maxKey]);


// function unique_char(string) { 
//     var unique = ''; 
//     var count = 0; 
//     for (var i = 0; i < string. length; i++) { 
//         for (var j = i+1; j < string. length; j++) { 
//             if (string[i] == string[j]) { 
//                 count++; 
//                 unique += string[i]; 
//             } 
//         } 
//     } 
//     return unique; 
// } 
// const result = unique_char('aaabbbccc');
// console.log(result)
