// alert('Привет')

// const message = 'Привет от Алишер'

// alert(message)

// const userAge = prompt('Сколько тебе лет?')
// if(userAge == 18){
// console.log('Тебе можно')

// }
// else  if (userAge >= 18 ){
// console.log('Ну незнаю')

// }
// else{
//     console.log('Тебе рано')
// }

// console.log(userAge)



// const user = confirm ('Ты готов?')

// if(user){
//     console.log('Молодец')
// }
// else{
//     console.log('Ах тыш ...')
// }

const userAge = +prompt('Сколько тебе лет?')

switch(true){
case userAge === 0: { console.log ('Takogo ne mojet bit')
break}

case userAge<18: { console.log ('psport please')
break}

case userAge>18: { console.log ('Wait')
break}

default : { console.log ('proxodite')}

}
