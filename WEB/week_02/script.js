function sum(a, b) {
  return a + b;
}
// let ans = sum(1,2)
// console.log(ans);

function allSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }

  return sum;
}

// let ans = allSum(100)
// console.log(ans);

// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);

let promise = new Promise((resolve, reject) =>
  setTimeout(() => resolve("done"), 1000)
);

promise
  .then(function (result) {
    console.log("result");
  })
  .finally(() => console.log("All Done"))
  .catch(function (result) {
    console.log(result);
  });


  fetch('https://randomuser.me/api/')
  // .then below runs when the remote server responds
  .then(function(response) {
    // response.text() returns a new promise that resolves with the full response text
    // when it loads
    return response.json();
  })
  .then(function(text) {
    // ...and here's the content of the remote file
    console.log(text);
  }).catch((e)=>console.log(e)
  );


  const now = Date();
console.log("Without new: ", now);

const now1 = new Date();
console.log("With new: ", now1);