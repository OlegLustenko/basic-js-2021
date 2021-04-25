const name = "о привет";

function functionName(argument1, argument2) {
  // ТЕЛО ФУНКЦИИ
  const name = "Внутренняя область видимости функции";

  console.log(name);
  console.log(argument1);
  console.log(argument2);
}

// ВЫЗОВ ФУНКЦИИ
// functionName(
//   "Привет, что нового? Как твои функции?",
//   "JavaScript is the best"
// );

const privetkakDela = functionName;

privetkakDela(
  "Привет, что нового? Как твои функции?",
  "JavaScript is the best"
);

functionName(); // ВЫЗОВ ФУНКЦИИ
