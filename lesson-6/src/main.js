// let arrNumbers = [100, 200, 300];
// const arr = [1, 2, 3, 4, 5];

// arr.push(6);

// console.log(arr); // 1,2,3,4,5,6;

// let six = arr.pop();
// console.log(arr); // 1, 2, 3, 4, 5;

// let one = arr.shift();
// console.log(arr); // 2, 3, 4, 5;
// //
// arr.unshift(2000);
// console.log(arr); // 2000, 2, 3, 4, 5

// const newArray = arr.slice(2, 4);
// console.log(newArray);

// // arr = [2000, 2, 3, 4, 5]
// // arr = [2000, 1000, [1]];
// let a = [1];
// arr.splice(1, 4, 1000, a);
// console.log(arr);
// const concatenatedArr = arr.concat(200); // [2000, 1000, [1], 200];
// console.log(concatenatedArr);
// // arr.push(concatenatedArr);
// let someArr = concatenatedArr.concat(arr); // [2000, 1000, [1], 200] + [2000, 1000, [1]]
// console.log(someArr);

// console.log(someArr.indexOf(2000));

// // сделать предложение задом наперед
// const js = "JavaScript is cool language with awesome community";
// const splittedSentence = js.split(" ");
// const reverseJs = splittedSentence.reverse();
// const solution = reverseJs.join(" ");
// console.log(solution);
// const result = "community awesome with language cool is JavaScript";
// let shortSolution = js.split(" ").reverse().join(" ");
// console.log(shortSolution);




// function logEachElementInArray(array) {
//   console.log('-------------------')
//   for (let i = 0; i < array.length; i++) {
//     let elem = array[i];
//     console.log(elem);
//   }
// }

// function forEach(forEachArray, callbackFunction) {
//   for(let i=0; i<forEachArray.length; i++) {
//     let element = forEachArray[i];
//     callbackFunction(element);
//   }
// }

const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  let element = arr[i];

  //
  console.log(element);
}

function logFirstParam(param1) {
  console.log(param1);
}

logFirstParam('FOR EACH ARRAY!')

arr.forEach(function(elem) {
  console.log(elem);
});

/*
Напишите функцию, которая будет принимать массив с числами
И отображать в консоле все числа больше 25
*/
solution([0,1]) // 
solution([100,3,1,26,7]) // 100, 26 
solution([26,27,28,3,200]) // 26,27,27,200
