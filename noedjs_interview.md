# concurrency in node.js
Concurrency means that a program is able to run more than one task at a time — this is not to be confused with parallelism. During concurrency, different tasks with differing goals of the program can be performed at the same time, while in parallelism, different parts of the program execute one task.
# How does NodeJS handle concurrent tasks?
Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them.
# Why NodeJs is not single threaded?
NodeJs is not single threaded. The NodeJs event loop operates on a single thread yes, but the async blocking operations are delegated to separate worker threads. These threads notify the main thread when they are done processing.
# What is package json?
The package. json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.
# Why is node asynchronous?
Node. js favors asynchronous APIs because it is single-threaded. This allows it to efficiently manage its own resources, but requires that long-running operations be non-blocking, and asynchronous APIs are a way to allow for control of flow with lots of non-blocking operations.
# What is async / await in node JS?
Async functions return a Promise by default, so you can rewrite any callback based function to use Promises, then await their resolution. You can use the util. promisify function in Node. js to turn callback-based functions to return a Promise-based ones.
# What is event loop in Nodejs?
The event loop is what allows Node. js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible. Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background.
# Why Node is single-threaded?
Advantages of Single-Threaded Event Loop over Multi-Threaded Request/Response Stateless Model: Can handle more & more concurrent client's requests with ease. Eliminates the need of creating more and more threads, because of the Event loop. Applications built on top of node.
# What is difference between Promise and async await?
Promise is an object representing intermediate state of operation which is guaranteed to complete its execution at some point in future. Async/Await is a syntactic sugar for promises, a wrapper making the code execute more synchronously.
# Why Node.js is non blocking?
Non-Blocking methods are executed asynchronously. Asynchronously means that the program may not necessarily execute line by line. The program calls the function and move to the next operation and does not wait for it to return.
# What is difference between promise and callback?
Callbacks are functions passed as arguments into other functions to make sure mandatory variables are available within the callback-function's scope. Promises are placeholder objects for data that's available in the future.
# What is JWT used for?
JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued
# What is Express in node JS?
Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.
# Why Express is used?
The primary use of Express is to provide server-side logic for web and mobile applications, and as such it's used all over the place. Companies which use Express as a foundation of their internet presence include: Accenture.
# What is use of async and await?
The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains. Async functions may also be defined as expressions.
# What is HTTP and HTTPS in simple words?
Hyper Text Transfer Protocol Secure (HTTPS) is the secure version of HTTP, the protocol over which data is sent between your browser and the website that you are connected to. The 'S' at the end of HTTPS stands for 'Secure'. It means all communications between your browser and the website are encrypted.

# What is Aggregation in MongoDB? 
Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
# middleware 
Middleware functions can perform the following tasks: Execute any code. Make changes to the request and the response objects.
...
An Express application can use the following types of middleware:
Application-level middleware.
Router-level middleware.
Error-handling middleware.
Built-in middleware.
Third-party middleware.
# What is setTimeout?
setTimeout() The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
# Why do we use setTimeout?
The setTimeout() function registers the function provided as a parameter to be executed after some provided(3000) milliseconds. The browser keeps a record of it internally and as soon as the timer expires, it enqueues that function to the callback queue.
# What is difference between setInterval and setTimeout?
setTimeout allows us to run a function once after the interval of time. setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval
# What is meant by pass by value?
When you use pass-by-value, the compiler copies the value of an argument in a calling function to a corresponding non-pointer or non-reference parameter in the called function definition. The parameter in the called function is initialized with the value of the passed argument
# What is meant by pass-by-reference?
Pass-by-reference means to pass the reference of an argument in the calling function to the corresponding formal parameter of the called function. The called function can modify the value of the argument by using its reference passed in. The following example shows how arguments are passed by reference.
# What is pass by value and pass by reference ?
The difference between pass-by-reference and pass-by-value is that modifications made to arguments passed in by reference in the called function have effect in the calling function, whereas modifications made to arguments passed in by value in the called function can not affect the calling function.
# Waterfall model
The waterfall model is a breakdown of project activities into linear sequential phases, where each phase depends on the deliverables of the previous one and corresponds to a specialization of tasks. The approach is typical for certain areas of engineering design. 
# what is curring ?
Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument.In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.
<script>
    function calculateVolume(length) {
        return function (breadth) {
            return function (height) {
                return length * breadth * height;
            }
        }
    }
    console.log(calculateVolume(4)(5)(6));
</script>
<script>
    function calculateVolume(length, breadth, height) {
        return length * breadth * height;
    }
    console.log(calculateVolume(4, 5, 6));
</script>
# Why do we need to use currying?
Currying is helpful when you have to frequently call a function with a fixed argument. Considering, for example, the following function: If we want to define the function error , warn , and info , for every type, we have two options. Currying provides a shorter, concise, and more readable solution.
# Black-box testing
Black-box testing is a method of software testing that examines the functionality of an application without peering into its internal structures or workings. This method of test can be applied virtually to every level of software testing: unit, integration, system and acceptance