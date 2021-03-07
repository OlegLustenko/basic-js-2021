/*
 1. Добавьте свойста 4 новых свойства в объект используя 
    квадратные скобки и точку.
 */

let myObj = {};
myObj.name = 'asd';
myObj['something'] = 'random';

/*
 2. Используя метод .slice, добавьте недостающие символы в строку
 */

// let sliceString = 'Ytube'; //
// let solution2 = slice()

// console.log(sliceString); // YouTube

/*
  3. Напишите функцию которая будет возвращать объект
    с свойством name, а значением будет первый аргумент функции
*/

function solution3(someValue) {
  var obj = {
    //ключ
    //свойство    // значение
    name: someValue,
  };

  return obj;
}

console.log(solution3('qwerty')); // {name: "qwerty"}

/*
  4. Функция будет принимать 1 аргумент - ОБЪЕКТ у которого
   будет свойство name
   и возвращать новый объект изменяя свойство name
   в большой регистр
*/

function solution4(someObjWithPropertyName) {
  console.log(someObjWithPropertyName.name);
  const newObject = {
    name: "someObjWithPropertyName.name.toUpperCase()",
  };
  console.log(someObjWithPropertyName.name.toUpperCase());

  return newObject;
}

solution4({ name: 'qwerty' });
solution4({ name: 'oleg' });
solution4({ name: 'denis' });
solution4({ name: 'vlad' });
solution4({ name: 'vasya' });
solution4({ name: 'petya' });

/*
  6. Напишите функцию которая получает 3 параметра
  и возвращает объект типа:
     {
       argument1: param1,
       argument2: param2,
       argument3: param3,
     }
*/

function solution6(a, b, c) {
  const newObject = {
    argument1: a,
    argument2: b,
    argument3: c,
  }

  return newObject
}

console.log(solution6("привет", "как", "дела"));
// {argument1:"привет", argument2: "как", argument3: "дела" }

/* -> @@ SUPER 2

Напишите функцию, которая будет принимать 4 аргумента,
последний всегда функция.

Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом
*/

/*
  5. Напишите функцию которая принимает в
   качестве аргумент массив и элемент массива
  и добавляет элемент в конец массива
*/



function super2(arg1, arg2, arg3, myFunction) {}
