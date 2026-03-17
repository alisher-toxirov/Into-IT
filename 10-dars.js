// const user = {
//     login: 'alisher001',
//     password: '0.9.0.8',
//     date:'01.12.2025',
//     sayHi:() =>console.log('Привет')
// }
// console.log(user.login); 
// console.log(user.password);
// console.log(user.date);
// user.sayHi()


// const user1 = {}

// user1.name = 'алишер'
// user1['is developer']=false

// console.log(user1);

// delete user1["is developer"]

// console.log(user1);

// const name='Alisher'
// const age = 16

// const user = { name,  age,}
// console.log(user);

// const exampleName = prompt('Твой объект?')
// const exampleValue = prompt(`Что писать в твой объект ${exampleName}? `)

// const obj = {
// [exampleName]:exampleValue,
// }
// console.log(obj);

// const user = {
//     name1 : 'Alisher',
//     age : 15
// }
// console.log('name1' in user);

const user = {
    name : 'alisher',
    age : 15,
}

for (let anymore in user) {
    console.log(anymore);
}

for (let guest in user) {
    console.log(user[guest]);
}