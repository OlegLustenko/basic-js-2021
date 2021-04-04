// /*
//  Напишите условие, в котором сценарий пойдет 
//  по альтернативной ветке.
//  Будет содержать 2 уровня вложенности и будет 
//  выполняться самый нижный уровень вложенности
// */

// if (isMoreThanTen(9)) {
// } else {
//   if (isMoreThanTen(200)) {
//     if (true != false) {
//       console.log("самый нижный уровень вложенности");
//     }
//   }
// }

// function isMoreThanTen(comparableNumber) {
//   const myTen = 10;

//   return comparableNumber > 10;
// }

// /*
// 1) Ключевые слова в JavaScript
// 2) Создаем профили на linkedin
// 3) Используем ключевые слова в JavaScript для написания приложений
// 4) Где-то деньги
// */

// /*
// Напишите функцию, которая принимает 1 аргумент объект 
// И ЕСЛИ у этого объекта нет свойста salary 
// ИЛИ значение salary не заполнено,
// добавляет в эту переменную свойство salary с значением 800
// */

// function addSalary(user) {
//   if (!user.salary) {
//     user.salary = 800;
//   }
//   console.log(user);
// }

// addSalary({ salary: 200 }); // {salary: 200}
// addSalary({ name: "Junior Dev" }); // {name: "Junior Dev", salary: 800}
// addSalary({ salary: 3000 }); // {salary: 3000}
// addSalary({ salary: null }); // {salary: 800}

// /*
// 1. Напишите функцию которая принимает в
// качестве аргумента массив и элемент массива
// и добавляет элемент в конец массива
// */

// let arr = [];

// function addToArray(arrParam, newElem) {
//   // arrParam[arrParam.length] = newElem;
//   arrParam.push(newElem);
// }

// addToArray(arr, "qwe"); // ['qwe']
// // arr === ['qwe'];
// addToArray(arr, "qwe"); // ['qwe', 'qwe']
// // arr === ['qwe'];
// addToArray(arr, ["privet"]); // ['qwe', 'qwe', ['privet'] ]
// // arr === [['privet']];

// ///////////////////////////////////////////////
// /*
// 3.  Напишите функцию которая принимает 3 аргумента,
//     третий аргумент - это объект.

//     Функция создает новый объект и добавляет ключ
//     это первый аргумент, а значение - второй аргумент

//     Проверяет если есть свойство name в переданном объекте,
//     тогда добавляет данное свойство 
    
//     и возвращает новый объект

// */
// var myName = { name: "Oleg" };

// function addNameToUser(newKey, newValue, someObject) {
//   const myNewObject = {};

//   myNewObject[newKey] = newValue; // newKey = 'age', newValue = 20, someObject = { name: "Sasha" }
  
//   if (someObject.name) {
//     myNewObject.name = someObject.name;
//   }

//   if (someObject.surname) {
//     myNewObject.surname = someObject.surname;
//   }

//   return myNewObject;
// }

// console.log(addNameToUser("age", 20, { name: "Sasha" }));
// // {}

// console.log(myName);
// // { name:'Oleg'}

// /*
// -> @@ SUPER
//   Напишите функцию, которая будет возвращать 'Fizz'
//    если передаваемый параметр кратен 3,
//    'Buzz', если передаваемый параметр кратен 5,
//    'FizzBuzz' - если параметер кратен 3 и 5
//    Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр

//    % – module
// */

// function fizzBuzz(num) {
//   /* Ваш код здесь */
// }

// fizzBuzz(1); // 1
// fizzBuzz(2); // 2
// fizzBuzz(3); // 'Fizz'
// fizzBuzz(5); // 'Buzz'
// // ...
// fizzBuzz(15); // 'FizzBuzz'
// fizzBuzz(21); // 'Fizz'

/* -> @@ SUPER 2

Напишите функцию, которая будет принимать 4 аргумента,
последний всегда функция.

Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом

*/

// super2 -> new array -> callback function

function super2(arg1, arg2, arg3, callback) {
  let newArray = [arg1, arg2, arg3];

  callback(newArray);
}

function showInConsole(anything) {
  console.log(anything);
}

function showInAlert(anything) {
  alert(anything);
}

super2('JavaScript','Позитив', 'Мир всем', showInAlert);
super2(50,'привет', 'JavaScript', showInConsole);


function lightSuper2(arg1, arg2, arg3) {
  let newArray = [arg1, arg2, arg3];

  showInConsole(newArray);
}

function lightSuper2_1(arg1, arg2, arg3) {
  let newArray = [arg1, arg2, arg3];

  showInAlert(newArray);
}

lightSuper2_1('JavaScript', 'React', 'Redux');
lightSuper2('100', 'vk', 'facebook');


