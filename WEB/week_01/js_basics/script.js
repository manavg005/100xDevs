// Function declaration
function greet(name) {
  return "Hello, " + name;
}

// Function call
let message = greet("John"); // "Hello, John"
console.log(message);

// ------- Assignment --------
/// Write a function sum that finds the sum of two numbers.
function sum(num1, num2, num3) {
  return `Sum: ${num1 + num2 + num3}`;
}

let ans = sum("a", 2, 3);
// console.log(ans);

// function canVote(age) {
//     if(age>18){
//         return true;
//     }else{
//         return false;
//     }
// }

// let answer=canVote(15);
// console.log(answer);

let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

let users = [
  {
    name: "manav",
    age: 21,
    gender: "male",
  },
  {
    name: "anjali",
    age: 21,
    gender: "female",
  },

  {
    name: "ankur",
    age: 21,
    gender: "male",
  },
];

function getuser(user) {
  let arr = [];
  for (let i = 0; i < users.length; i++) {
    if (user[i].age > 18 && user[i].gender === "male") {
      arr.push(user[i]);
    }
  }
  return arr;
}
// console.log(getuser(users));



let filtered = users.filter((user)=>user.age>=21&&user.gender==='male')

  

console.log(filtered);


let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 299;

console.log(uint8Arr);
