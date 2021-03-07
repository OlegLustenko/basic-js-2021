// alert("всем привет из мира JavaScript")
// const userName = prompt("Как тебя зовут?", "ВВЕДИТЕ ИМЯ");
// const doesUserApprove = confirm("Оденьте маску пожалуйста");

/*
  Отобразите 2 модальных окна в которые пользователь вводит число
  Дальше нам нужно отобразить 
  в новом модальном окне сумму первых двух введеных чисел
*/
  
const stringTwenty = '20';

const number1 = Number(prompt('введите число 1'));
const number2 = +prompt('введите число 2');

/*
Если пользователь ввел не число в одно из модальных окон
тогда нужно отобразить "ошибка расчетов, попробуйте снова"
в модальном окне
Иначе показать сумму 

-> isNaN()
*/

alert(number1 + number2);

const doesUserHasPermissions = confirm("ты человек?");
const doesUserHasCitizens = confirm("ты гражданин?");

if(true) {
  console.log(20)
} else {
  console.log(10)
}

if(doesUserHasPermissions) {
  alert('Добро пожаловать')
  const areYouFromUkraine = confirm("Ты с Украины?")

  if(doesUserHasCitizens || areYouFromUkraine) {
    alert("Привет Человеку с Украины!")
  }
} else if(doesUserHasCitizens) {
  alert("Привет гражданину")
} else {
  alert('роботам вход воспрещен!')
}



// console.log(Number(stringTwenty));
// console.log(+stringTwenty);

// const numberToString = 20;
// console.log(numberToString.toString());
// console.log('' + numberToString);




// ==
// ===
// !==
// !=


// if(100 / 20 == 5) {
//   console.log(123)
// }

// if(100 / 20 !== 50) {
//   console.log('@@@@@') // выполнится
// }

// if(100 / 20 == 50 || 10 - 10 == 0) { 
//   console.log(500000) 
// }
// if(100 / 20 == 50 && 10 - 10 == 0) { 
//   console.log(500000) 
// }


// if(true) {

// } if else()