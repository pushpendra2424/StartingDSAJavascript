// maximum occuring char

function maximumOccurChar(str){
    let strObj = {};
    let maxKey = '';

    for(let i = 0; i < str.length; i++){
        // console.log(str[i]);
        let key = str[i];
        if(!strObj[key]){
            strObj[key] = 0;
        }
        strObj[key]++;
        if(maxKey == '' || strObj[key] > strObj[maxKey]){
            maxKey = key
        }
    }
    return maxKey
}
const re = maximumOccurChar("heello")
console.log(re)