// *************** forEach **********

// const data = [ 'alisher' , 100]

// const [ name , age] = data

// console.log(name , age);

// const letters = ['A','B','C']

// letters.forEach((letters , index , array) => {
//     console.log(letters);
// })

// ************              indexOf          ********

// const prices = [100 , 200 , 300 , 400 , 300, 600,]

// console.log(prices.indexOf(300 , 3));

// ******************* findIndex ***********************

// const user = [
// {
//     name: 'Василий',
//     age : 15
// },

// {
// name:'Alisher',
// age:20
// }

// ]

// console.log(user.findIndex((user) => {
//     if(user.name === 'Alisher'){
//         return true
//     }
// }));

// ************ includes ******************

// const number = [100 , 200 , 300]

// console.log(number.includes(100));

// ***************** some ***********************
const users = [
  {
    name: "Alisher",
    age: 17,
  },

  {
    name: "Vasiliy",
    age: 18,
  },

  {
    name: "galik",
    age: 20,
  },
  {
    name: "Vasiliy",
    age: 25,
  }
];
console.log(users.some((users) => users.name === 'Alisher'));

// ***************** every ***********************
console.log(users.every((users) => users.age >= 18));

// ***************** find ***********************
console.log(users.find((users) => users.name === 'Vasiliy'));

// ***************** filter ***********************
console.log(users.filter((users) => users.name === 'Vasiliy'));

