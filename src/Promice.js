// A Promise is a special JavaScript object. It produces a value after an asynchronous operation completes successfully, or an error if it does not complete successfully due to time out, network error, and so on.

// Successful call completions are indicated by the resolve function call, and errors are indicated by the reject function call.


// let promise = new Promise(function(resolve, reject) {    
//   // Make an asynchronous call and either resolve or reject
// });

// let promise = new Promise(function(resolve, reject) {
//   resolve("I am done");
// });

// let promise = new Promise(function(resolve, reject) {
//   reject(new Error('Something is not right!'));
// });
const myPromise = new Promise((resolve, reject) => {
  let a = 10;
  setTimeout(() => {
    return (a) ? resolve('a is found!'): reject('sorry, no a');
  }, 300);
}); 

myPromise
.then(value => { console.log(value) })
.catch(err => { console.log(err) });
