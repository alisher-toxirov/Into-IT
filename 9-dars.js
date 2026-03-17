// function hello () {
//     console.log('Пока')
// }
// hello()
// function hello () {
//     console.log('Привет')
// }

// const hello = function () {
//     console.log('Привет')
// }
// hello()

// const example =  (a,b) => {
//     console.log(a+b)
// }
//  example(111,222)




// const helo = (a, b) => {
//     console.log(a + b)
// }
// helo(1, 4)


// const fn1 = () =>{

//     return 'I am fn1'
// }

// const fn2 = fn1


// console.log(fn2());


// const Message = (before, after) => {
//     before()
//     console.log('Privet');
//     after()
// }

// const fn1 = () => console.log('before');
// const fn2 = () => console.log('after');

// Message(
//     () => console.log('before'),
//     () => console.log('after')
// )
// Message(fn1, fn2)



const validate = (access) => {
    if(access){
        return ()=> console.log('Доступ разрешен')
    }
    return ()=> console.log('Нет');
}
const Access = validate(true)
Access()