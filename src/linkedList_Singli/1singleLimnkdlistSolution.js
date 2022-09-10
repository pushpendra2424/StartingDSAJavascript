// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.firstNode = null;
//         this.lastNode = null;
//     }
//     insertInFrontofList(data) {
//         //node is created
//         //does not linked with any list
//         const node = new Node(data);
//         //if list is empty
//         if (!this.firstNode) {
//             this.firstNode = node;
//             this.lastNode = node;
//         }
//         else {
//             const temp = this.firstNode;
//             this.firstNode = node;
//             node.next = temp;
//         }
//     }

//     insertInLastofList(data) {
//         const node = new Node(data);
//         if (!this.firstNode) {
//             this.firstNode = node;
//             this.lastNode = node;
//         }
//         else {
//             this.lastNode.next = node;
//             this.lastNode = node;
//         }
//     }
//     printList() {
//         let curr = this.firstNode;
//         while (curr) {
//             // console.log(curr);
//             console.log(curr.data);
//             curr = curr.next;
//         }
//     }
//     insertAfterKthPosition(data,k){
//         let count = 1;
//         let curr = this.firstNode;
//         while(curr && count !==k){
//             curr  = curr.next;
//             count++;
//         }
//         if(!curr && count !== k){
//            return console.log("Invalid position");
//             // throw Error("Invalid position")

//         }
//         else if(!curr && count ===k){
//             this.insertInLastofList(data)
//         }
//         else{
//             const node = new Node(data);
//             node.next = curr.next;
//             curr.next = node; 
//         }
//     }
//     //delete From Front
//     deleteFromFront(){
//         if(!this.firstNode){
//             throw Error("We can't delete from empty list");
//         }
//         let temp = this.firstNode;
//         this.firstNode = this.firstNode.next;
//         temp.next = null;
//         if(!this.firstNode){
//             this.lastNode = null;
//         }
//     }
//     //delete from last
//     deleteFromLast(){
//         let curr = this.firstNode;
//         while(curr.next !== this.lastNode){
//             curr = curr.next;
//         }
//         curr.next = null;
//         this.lastNode = curr;
//     }
//     //delete from Kth position
//     deleteFromKthPosition(k){
//         let count = 1;
//         let curr = this.firstNode;
//         if(k==1){
//             this.deleteFromFront();
//         }
//         while(curr && count !== k -1){
//             curr  = curr.next;
//             count++
//         }
//         if(!curr){
//             console.log("invalid position")
//             throw Error("invalid postion")
//         }
//         else{
//             let targetNode = curr.next;
//             curr.next = targetNode.next;
//             targetNode.next = null;
//         }
//         //if we remove last node
//         if(!curr.next){
//             this.lastNode = curr;
//         }

//     }
//     reverseList(){
//         let curr = null;
//         while(this.firstNode){
//             if(!curr){
//                 this.lastNode = this.firstNode;
//             }
//             let nextNode = this.firstNode.next;
//             this.firstNode.next = curr;
//             curr = this.firstNode;
//             this.firstNode = nextNode;
//         }
//         this.firstNode = curr;
//     }



//     loopStartNodeHashingTchnique(){
//         console.log("jhfj")
//         let isLoopStarted = false;
//         let set = new Set();
//         let curr = this.firstNode;
//         while(curr && !isLoopStarted){
//             if(set.has(curr)){
//                 isLoopStarted = true;
//             }
//             else{
//                 set.add(curr);
//                 curr = curr.next;
//             }
//         }
//         if(isLoopStarted){
//             return curr;
//         }
//         return null;
//     }
//     loopDetectWithSlowPointer(){
//         let slowPoniter = this.firstNode;
//         let fastPointer = slowPoniter;
//         while(slowPoniter && fastPointer && fastPointer.next){
//             slowPoniter = slowPoniter.next;
//             fastPointer = fastPointer.next.next;
//             if(slowPoniter === fastPointer){
//                 return true
//             }
//         }
//         return false;
//     }
   

// }
// /*
// time comlexcity
// insert in front o(1)
// insert in last o(1)
// insert in kth position o(n)
// delete in front o(1)
// delete in last o(1)
// delete in middle o(n)
// */


// const list = new LinkedList();
// list.insertInFrontofList(10);
// list.insertInFrontofList(9);
// list.insertInFrontofList(8);
// list.insertInFrontofList(7);
// list.insertInFrontofList(6);
// list.insertInFrontofList(5);
// // list.insertInFrontofList(3);
// // list.insertInLastofList(11);
// list.printList()
// console.log("==========================")
// // list.deleteFromKthPosition(2);
// // list.reverseList()
// // list.printList()
// list.lastNode.next = list.firstNode.next.next.next;
// console.log(list.loopStartNodeHashingTchnique())
// console.log(list.loopDetectWithSlowPointer())


// (function (x) {
//     return (function (y) {
 
//       console.log(x);
//     })(10);
// })(20);
let isBalanced = (input) => {

    let brackets = "[]{}()<>"
    let stack = []
  
    for(let bracket of input) {
      let bracketsIndex = brackets.indexOf(bracket)
  
      if(bracketsIndex % 2 === 0) {
        stack.push(bracketsIndex + 1)
      } else {
        if(stack.pop() !== bracketsIndex) {
          return false;
        }
      }
    }
    return stack.length === 0
  }
  
  isBalanced('   {}[]()[{()}]')
//   > true
  
//  
function areBracketsBalanced(expr)
{
      
    // Using ArrayDeque is faster
    // than using Stack class
    let stack = [];
  
    // Traversing the Expression
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
  
        if (x == '(' || x == '[' || x == '{')
        {
              
            // Push the element in the stack
            stack.push(x);
            continue;
        }
  
        // If current character is not opening
        // bracket, then it must be closing. 
        // So stack cannot be empty at this point.
        if (stack.length == 0)
            return false;
              
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
  
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
  
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
  
    // Check Empty Stack
    return (stack.length == 0);
}
  
// Driver code
let expr = "([{}])";
  
// Function call
if (areBracketsBalanced(expr))
    console.log("Balanced ");
else
    console.log("Not Balanced ");
  