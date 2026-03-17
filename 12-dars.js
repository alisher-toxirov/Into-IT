// **********it is global 'this'
// const user = {
//     name : "Alisher",
//     logName: function () {console.log(this.name);}
// }
// user.logName()
// console.log('this-global', this.name)

// function th() {
//     console.log('this:', this)
// }

// th()
// *****************************************

// const user = {
//     name: 'Alex',
//     age: 15,
//     logThis: function () {
//         console.log('this metod in obj user:', this)
//     },
//     adress: {
//         name: 'Alisher',
//         age: 10,
//         logIt: function () {
//             console.log('this metod in obj adress:', this)
//         }
//     }
// }
// user.logThis()
// user.adress.logIt()
// ***********************************

// const calculator = {
//     read(){
//         this.a = Number(prompt('Первое число'))
//         this.b = Number(prompt('Второе число'))
//     },
//     sum(){
//         return  this.a + this.b
//     },
//     mull(){
//         return this.a * this.b
//     }
// }
// calculator.read()
// console.log('calculator:', calculator);
// console.log('Сумма:',calculator.sum());
// console.log('Умножение:',calculator.mull());


