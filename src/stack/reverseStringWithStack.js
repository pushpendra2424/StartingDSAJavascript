let data = [];
let currentSize = data.length;
function push(newVal){
  data[currentSize] = newVal;
currentSize += 1;
}
function pop(){
  currentSize -= 1;
  data.length = currentSize;
}

function reverseStr(item){
  // console.log(item)
  for(let i = 0; i < item.length; i++){
    push(item[i])
  }
}
let str = 'pushpendra'
str = str.split('')
reverseStr(str)
console.log(str)
push(30);
push(20);

pop()



console.log(data)


