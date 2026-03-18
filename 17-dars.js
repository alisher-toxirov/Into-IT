const user = {
    name: "John",
    age: 30,
    city: "New York"
};


//Object.keys() 
// const userKeys = Object.keys(user);
// console.log(userKeys); 

//forEach() yordamida userKeys massivining har bir elementini konsolga chiqarish
// userKeys.forEach((key) => {
//     console.log(key);
// });

//Object.values()
// const userValues = Object.values(user);
// console.log(userValues);

// userValues.forEach((value) => {
//     console.log(value);
// });

//Object.entries()
// const userEntries = Object.entries(user);
// console.log(userEntries);

// userEntries.forEach(([key, value]) => {
//     console.log(key);
//     console.log(value);
// });

//Map()
const data = new Map();

//set() metodi yordamida Map obyektiga kalit-qiymat juftlarini qo'shish
data.set(1 , "one");
data.set('1' , "one string");

//get() metodi yordamida kalit orqali qiymatni olish
// console.log(data.get(1)); // "one"
// console.log(data.get('1')); // "one string"

//has() metodi yordamida kalit mavjudligini tekshirish
console.log(data.has(1)); // true
console.log(data.has(2)); // false

//delete() metodi yordamida kalit-qiymat juftini o'chirish
// data.delete(1);
// console.log(data.has(1)); // false

//clear() metodi yordamida Map obyektini tozalash
// data.clear();
// console.log(data.size); // 0

//size xususiyati yordamida Map obyektidagi kalit-qiymat juftlarining sonini olish
console.log(data.size); // 2