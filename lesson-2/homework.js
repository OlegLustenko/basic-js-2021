/*

 1. Составить предложение из нижестоящих переменных:
 "Сколько нужно программистов чтобы сделать проект ? 1, 25, команда"
 */

let numbers = [25, 1];
let project = 'проект';
let team = `команда`;
let howMuch = 'Сколько';
let sentence = 'нужно программистов чтобы сделать проект ?';

let task1 = `${howMuch} ${sentence} ${numbers[1]}, ${numbers[0]}, ${team}`;
console.log(task1);

/*
 2. Составьте предложение из представленного массива
 и выведите предложение в консоль;
 "Так, когда Будда достиг Просветления, он обнаружил, что больше не ощущает себя мишенью.
  Он не был больше ни телом, к которому рано или поздно ..."
 */

let array = [
  'Он',
  'был больше ни телом, к которому рано или поздно',
  'он обнаружил',
  'не',
  'Так, когда Будда достиг Просветления',
  '...',
  'что больше',
  'ощущает себя мишенью',
];

const he = array[0];
const NOT = array[3];
const firstSentence = `${array[4]}, ${array[2]}, ${array[6]} ${NOT} ${array[7]}`;
const secondSentence = `${he} ${NOT} ${array[1]} ${array[5]}`;

let homeSentence = `${firstSentence}.
${secondSentence}`;

console.log(homeSentence);

/*
 3. Преобразуйте строку x,
    в максимально удобно читаемый для программиста вид
 */

let frameworks = [4.7, 'Angular', '4Angular', 'React/Redux'];
let x =
  'google \
released ' +
  'new version\
 ' +
  frameworks[1] +
  Math.floor(frameworks[0]) +
  '\
 But real speed is ' +
  `${frameworks[frameworks.length - 1]}`;

console.log(x);

const angularFramework = frameworks[1] + Math.floor(frameworks[0]);
const reactFramework = frameworks[frameworks.length - 1];

const solution3 = `google released new version ${angularFramework} But real speed is 
${reactFramework}
`

console.log(solution3);


// LINKS
// https://dorey.github.io/JavaScript-Equality-Table/

/*
1) Нужно сделать репозиторий на github и загрузить код на github
2) И отправить ссылку в чат с домашним заданием

*/
