// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
//Функция считает общую сумму запрплаты работников и возращает ее.Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

const countTotalSalary = function (employees) {
  "use strict";
  // Write code under this line
  const entries = Object.entries(employees);
  let sumEmployee = 0;
  for (const employee of entries) {
    sumEmployee += employee[1];
  }
  console.log(sumEmployee);
  return sumEmployee;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
//console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
//console.log(countTotalSalary(supports));
// 500
