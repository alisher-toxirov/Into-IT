// const obj1 = { name:'Alex'}
// const obj2 = obj1

// console.log(obj2 === obj1);

// obj2.name = 'Mister'
// console.log(obj2)

// const value1 = {name : 'Alex'}
// const value2 = Object.assign(  {} , value1)

// value2.name = 'Max'

// console.log(value1);
// console.log(value2);

// const value1 = {name : 'Alex'}
// const value2 = {age : 15}
// const value3 = { name2:true, name : 'Max'}

// const user = Object.assign({} , value1 , value2,value3 )

// console.log('user:', user);

// const obj1 = {
//   age: 15,
//   name: "Alex",
// }

// const obj2 = {
//   age: 15,
//   name: "Alex",
//   age2:5
// };

// const objEqual = (obj1, obj2) => {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   console.log("keys1:", keys1.length);
//   console.log("keys2:", keys2.length);
//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (const key in obj1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log("is this teng?:", objEqual(obj1, obj2));

// const user = {
//     name :'Alex',
//     age : 15,
// addres:{
//      city : 'Moskva',
//     zipCode : 12321
// }
// }
// console.log(user.addres?.city);

// const user = {
//     name : 'Max',
//     age : 15
// }

// const {
//     name , age , addres
// } = user

// console.log(name);
// console.log(age);
// console.log(addres);

// const logUser = (user) => {
//     const { name, age, adres, ...otherInfo } = user

//     console.log(
//         `
//     imya:${name}
//     yosh:${age}
//     adress:${adres}
// `
//     )
//     console.log('Доп. инфо:',otherInfo);
// }
// logUser({
//     name: 'alex',
//     age: 15,
//     adres: '15.pushkin',
//     name2: 'Alisher',
//     name3:'Maksim'
// })
