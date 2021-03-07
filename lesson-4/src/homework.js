/*
 Напишите условие, в котором сценарий пойдет 
 по альтернативной ветке.
 Будет содержать 2 уровня вложенности и будет 
 выполняться самый нижный уровень вложенности
*/

/*
Напишите функцию, которая принимает 1 аргумент объект 
И ЕСЛИ у этого объекта нет свойста salary 
ИЛИ значение salary не заполнено,
добавляет в эту переменную свойство salary с значением 800
*/

function addSalary(someUser) {

}


addSalary({salary: 200}) // {salary: 200}
addSalary({name: "Junior Dev"}) // {name: "Junior Dev", salary: 800}
addSalary({salary: 3000}) // {salary: 800}
addSalary({salary: null}) // {salary: 800}

/*
1. Напишите функцию которая принимает в
качестве аргумента массив и элемент массива
и добавляет элемент в конец массива
*/

let arr = [];

function addToArray(arrParam, newElem) {

}

addToArray(arr, 'qwe') // ['qwe']
addToArray(arr, 'qwe') // ['qwe', 'qwe']
addToArray(arr, ['privet']) // ['qwe', 'qwe', ['privet'] ]

///////////////////////////////////////////////
/*
3.  Напишите функцию которая принимает 3 аргумента,
     третий аргумент - это объект.

    Функция создает новый объект и добавляет ключ
    это первый аргумент, а значение - второй аргумент
    Проверяет если есть свойство name в переданном объекте,
    тогда добавляет данное свойство и возвращает новый объект

*/
var myName = { name: 'Oleg' };

function addNameToUser(newKey, newValue, someObject) {
}

console.log(addNameToUser('family', '%Lustenko%', myName));
// {name:'Oleg', family:'%Lustenko%'}

console.log(addNameToUser('name', 'privet Pasha', {}));
// { name:'privet Pasha'}


console.log(myName);
// { name:'Oleg'}


/*
-> @@ SUPER
  Напишите функцию, которая будет возвращать 'Fizz'
   если передаваемый параметр кратен 3,
   'Buzz', если передаваемый параметр кратен 5,
   'FizzBuzz' - если параметер кратен 3 и 5
   Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр

   % – module
*/

function fizzBuzz(num) {
  /* Ваш код здесь */
}

fizzBuzz(1); // 1
fizzBuzz(2); // 2
fizzBuzz(3); // 'Fizz'
fizzBuzz(5); // 'Buzz'
// ...
fizzBuzz(15); // 'FizzBuzz'
fizzBuzz(21); // 'Fizz'


/* -> @@ SUPER 2

Напишите функцию, которая будет принимать 4 аргумента,
последний всегда функция.

Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом

*/

function super2(arg1, arg2, arg3, callback) {

}