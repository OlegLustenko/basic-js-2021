/*
Напишите функцию, которая будет принимать массив с числами
И отображать в консоле все числа больше 25
*/

solution([0,1]) // 
solution([100,3,1,26,7]) // 100, 26 
solution([26,27,28,3,200]) // 26,27,27,200

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
  9
];

function moveZeroToEnd(arr) {
  
}

// console.log(moveZeroToEnd(arr1));
// console.log(moveZeroToEnd(arr2));

/*
 2. Верните сумму двух найменьших чисел в массиве

 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10

 */

function minimalNumber(arr) {
  
}

minimalNumber([10, 20, 30, 1, 31, 11, 10]);
// minimalNumber([-1, 0, 25]);
// minimalNumber([-4, -10, 25, 10]);
// minimalNumber([0, 200, 10, 25, 15]);

/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

function nameShuffler(str) {
  
}

/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

function capMe(arr) {
 
}

// @SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности
 Если вся последовательность верна, добавить число сначала


 example:
  [0,8,16,32] => 24
  [4, 6, 8, 10] => 2 // число сначала
  [0,16,24,32] => 8
 */

function random(arr) {
  
}

console.log(random([0, 8, 16, 32]));
console.log(random([0, 16, 24, 32]));
console.log(random([4, 6, 8, 10]));

/*
 Задача с собеседований

 2. Напишите функция которая преобразовывает/открывает скобки всех
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов

 example:

  [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
  [25,10,[10,[15]]] => [25,10,10,15]

 */

function openBraces(arr) {
 
}
