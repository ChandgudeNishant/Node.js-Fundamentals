// Asynchronous programming

//==> Callback:

// console.log("Let's Start..");

// 1

// function asyncTask(cb){
//     console.log("Task started");
//     setTimeout(() => {
//         cb(null, name)
//     }, 5000);
// }

// asyncTask((err, data)=> {
//     if(err){
//         throw err;
//     } else{
//         console.log(data);
//     }
// })

// console.log("End of the program")

// const name = "Nishant"

// 2

// const greet = (name, callback) =>{
//     console.log(`Hello ${name}`);
//     callback()
// }
// const sayGoodBye = ()=>{
//     console.log("Good Bye");
// }
// greet("Nishant", sayGoodBye)


//==> Promises

// 1
// const promised = new Promise((resolve, reject)=>{
//     const x = false;
//     if(x){
//         resolve("Yes its true");
//     }
//     else{
//         reject("No its false");
//     }
// });
// promised.then(((val)=>{
//     console.log("Promise resolved as--> " + val);
// }),((err)=>{
//     console.log("Promised rejected as--> "+ err)
// }))

// 2

// const promise1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(`Promise 1 is resolved`)
//     }, 3000);
// })
// const promise2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(`Promise 2 is resolved`)
//     }, 1000);
// })

// Promise.all([promise1,promise2])
// .then((val)=>console.log(val[0],val[1]))
// .catch((err)=>console.log(err))

//==> Async/Await

// 1

// const promise1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(`Promise 1 is resolved`)
//     }, 3000);
// })
// const promise2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(`Promise 2 is resolved`)
//     }, 1000);
// })

// const runAll = async()=>{
//     try{
//         const val1 = await promise1;
//         const val2 = await promise2;
//         console.log(val1,val2);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// runAll()
