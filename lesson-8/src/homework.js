/*
Напишите функцию, которая будет принимать массив с числами
И отображать в консоле все числа больше 25
*/

// 1) Создать массивы
const array = [0, 1];
const array2 = [100, 3, 1, 26, 7];
const array3 = [26, 27, 28, 3, 200];

// 2) Написать функцию которая принимает 1 аргумент
function solution(array) {}

solution(array);
solution(array2);
solution(array3);

/*
1) Создать массивы
2) Написать функцию которая принимает 1 аргумент
3) Написать цикл который перебирает каждый элемент массива
4) Написать условие сравнения в котором сравнить элемент массива с числом 25
5) Если число больше 25, отобразить в консоле
*/

// -----------------

/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 // concat
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = [
  "a",
  0,
  0,
  "b",
  null,
  "c",
  "d",
  0,
  1,
  false,
  0,
  1,
  0,
  3,
  [],
  0,
  1,
  9,
  0,
  0,
  {},
  0,
  0,
  9,
];

function moveZeroToEnd(arr) {}

// console.log(moveZeroToEnd(arr1));
// console.log(moveZeroToEnd(arr2));

/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

function nameShuffler(str) {}

/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

function capMe(arr) {}

/*
Напишите функцию, которая принимает 1 аргумент объект 
И ЕСЛИ у этого объекта нет свойста salary 
ИЛИ значение salary не заполнено,
добавляет в эту переменную свойство salary с значением 800
*/

addSalary({ salary: 200 }); // {salary: 200}
addSalary({ name: "Junior Dev" }); // {name: "Junior Dev", salary: 800}
addSalary({ salary: 3000 }); // {salary: 3000}
addSalary({ salary: null }); // {salary: 800}

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

function addNameToUser(newKey, newValue, someObject) {}

console.log(addNameToUser("age", 20, { name: "Sasha" })); // {age: 20, name: "Sasha"}
console.log(addNameToUser("qwe", 2000, {})); // {qwe: 2000}
