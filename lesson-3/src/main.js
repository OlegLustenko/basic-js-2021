// // Примеры по изменению свойств объекта

// const myObject = {
//   name: 'Oleg'
// };
// // myObject['age'] = 31;

// const age = 'age';
// myObject[age] = 31;
// console.log(myObject.age);

// myObject.surname = 'Lustenko';
// myObject[myObject.surname] = 'PRIVET KAK DELA';
// console.log(myObject['Lustenko']);

// // Разная семантика – при этом одинаковый результат
// console.log(myObject);
// /*
// {
//  name: 'Oleg',
//  surname: 'Lustenko',
//  age: 31,
//  Lustenko: 'PRIVET KAK DELA'
// }
// */
// console.log(myObject.name);

// // Создайте объект
// // Добавьте данному объекту свойства myCars, speed
// // выведите в консоле предложение используя свойства myCars & speed
    
// // Все мои bmw,vaz ездят на скорости 360

// const newTask = {
//   speed: 360
// };
// newTask.myCars = 'bmw,vaz';

// const solution = `Все мои ${newTask.myCars} ездят на скорости ${newTask.speed}`;
// console.log(solution);

// var name = 'Oleg';


// // Используя методы строки JS, модернизируйте test и 
// // отобразите нужное значение 
// var test = 'JaScript';
// //console.log(test) // JavaScript


// // 1. Получить/Отрезать Ja
// const solution2 = test.slice(0, 2) + 'va' + test.slice(2);
// console.log(solution2);
// // 2. Получить/Отрезать Script


function helloUser(name, surname) {
  console.log(`Привет ${name}`);
  console.log(`Привет ${surname}`);
}

helloUser("Влад", 'ЫЫЫ')
helloUser("Денис")

/*
Напишите функцию sum которая будет складывать 2 числа
и отображать в консоле результат сложения
*/

function sum(a, b) {
  console.log(a + b);

  return a + b;
}

const sum100 = sum(50+50);
