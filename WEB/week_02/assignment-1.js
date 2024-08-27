// Promisified setTimeout

let promise = new Promise((resolve, reject) =>
  setTimeout(() => resolve("done"), 1000)
);

promise
  .then(function (result) {
    console.log(result);
  })
  .finally(() => console.log("All Done"))
  .catch(function (result) {
    console.log(result);
  });


// Promisified fetch

fetch("https://randomuser.me/api/")
  .then(function (response) {
    // response.json() returns a new promise that resolves with the full response text
    // when it loads
    return response.json();
  })
  .then(function (text) {
    console.log(text);
  })
  .catch((err) => console.log("Error",err));


const fs = require('fs')

