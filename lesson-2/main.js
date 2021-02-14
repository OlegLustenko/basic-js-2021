/*
var   -  var можно переопределять
let   -  let можно объявить 1 раз
const -  нельзя переопределять
*/

const myString = 'привет я строка'; // 2015
console.log(myString);

let myStringTwo = 'привет я строка 2';

console.log(myStringTwo);

const soul_log = 'soul_log';
let myStringES6 = `привет ${soul_log} ${myStringTwo} ${myString}`;
const forOldes = 'привет ' + soul_log + ' ' + myStringTwo + ' ' + myString;

console.log(myStringES6);
console.log(forOldes);

/*
1) Используя 3 переменных вывести в консоль
Привет меня зовут <Твое имя>!
*/

const hello = 'Привет';
const myNameIs = 'меня зовут';
const name = 'Олег';

const solution = `${hello} ${myNameIs} <${name}>!`;

console.log(solution);

const number1 = 1;
const number2 = 2;

console.log(number1 + number2);
console.log('100' + number1 * number2);
console.log('1' + 1);
console.log(1 - '1');
console.log(0.1 + 0.1);
console.log(0.1 + 0.2);

const myBoolean = true;
const myBoolean2 = false;
const myArray = [1, 2, 3, 4, 5, '10', 'Oleg'];
// -------- Продумать приложение "Телефонный справочник"
// 2) Создать контакт 1го пользователя при помощи объекта – Типами
/*
требования к пользователю
 имя, телефон, отметка удален, email, 
    адрес в виде (номер улицы, имя улицы, номер квартиры),
    список имен друзей
*/
const address = {
  streeName: 'Сумская',
  streetNumber: '46',
};

let friend1 = {
  id: 2,
  name: 'Oleh',
  middleName: 'Lustenko',
  phoneNumber: '+3820912391923',
  isDeleted: true,
  address: address,
};

let friend2 = {
  id: 1,
  name: 'Oleh',
  middleName: 'Lustenko',
  phoneNumber: '+3820912391923',
  isDeleted: true,
  address: address,
};

let user = {
  name: 'Oleh',
  middleName: 'Lustenko',
  phoneNumber: '+3820912391923',
  isDeleted: true,
  address: address,
  friendListIds: [1, 2],
};

const arr = [1, 2, 3, 4, 5];
// const names = ['Vasya',   'Petya',   'Sasha'];
              //names[0], names[1],   names[2]

// console.log(names[0]);


/*
Отобразите "Привет JavaScript", используя индексы массива

0) переписать array к себе в точно таком же виде
1) Написать сonsole.log()
2) Отобразить Привет
3) Получить нужный мне элемент массива для слова Java
4) Посчитать индекс массива
5) Склеить "Привет" с 4м индексом массива
6) Получить нужный мне элемент массива длля слова Script
7) Посчитать индекс массива
8) Склеить Привет Java с "Script"

*/

// 0) переписать array к себе в точно таком же виде
const array = ['Script', 0, 100, 'Java'];
// 1) Написать сonsole.log()
// 2) Отобразить Привет
const java = array[3];

// 3) Получить нужный мне элемент массива для слова Java
// 4) Посчитать индекс массива
// 5) Склеить "Привет" с 4м индексом массива
// 6) Получить нужный мне элемент массива длля слова Script
// 7) Посчитать индекс массива
// 8) Склеить Привет Java с "Script"
console.log("Привет " + java);