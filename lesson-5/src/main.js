let number = 1;

number = number + 1;
number += 1;
number++
++number


let ten = 0;

if(10 > 5) {
  ten = 20
} else {
  ten = 50
}


let tenTernary = 10 > 5 ? (50 > 20 ? 20 : 100) : 50;



// console.log(ten);
// console.log(tenTernary);

for (let index = 1; index <= 12; index++) {
  let qwe = 'qwe';
  if (index % 2 === 0) {
    index = index + 1;
    console.log();
  }
}

for (var index = 1; index <= 12; index++) {
  if (index % 2 === 0) {
    index = index + 1;
    console.log();
  }
}

let num = 1;

while(num <=100) {
//  console.log(num);
 num++
}

const myObject = {
  name: 'Stas',
  surname: "Qwertyuin"
};

for(let key in myObject) {
  console.log("КЛЮЧ", key);
  console.log("ЗНАЧЕНИЕ", myObject[key]);
}

sum(5) // 5 + 4 + 3 + 2 + 1

function sum(num) {
  let counter = 0;

  while (num > 0) {
    counter = counter + num;
    num = num - 1;
  }

  return counter;
}

console.log(sum(5)); // 15
console.log(sum(4)); // 15
console.log(sum(10)); // 15


function sumRecursive(num) { // 5, 4, 3, 2, 1, 0
  if(num <= 0) {
    return num
  }

  const newNumber = num + sumRecursive(num - 1); // 4

  return newNumber;
}

console.log("recursive:", sumRecursive(5));
console.log("recursive:", sumRecursive(10));

/*




*/

/*
Отобразите в консоле числа от 20 до 1000
*/