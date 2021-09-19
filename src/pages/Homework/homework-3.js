// Используя рекурсию попросите пользователя ввести
// возраст, если он больше 18, то покажите сообщение об
// успехе, если меньше, то запустите функцию снова.

function getAge () {
    let age = +prompt('введите свой возраст');

if (age >= 18) {
    console.log('успешно');
} else {
    getAge();
  }
} 
getAge();


// Напишите 4 чистые функции, add (сложение 2 чисел),
// subtract (вычитание из первого аргумента второго),
// divide (деление первого аргумента на второй) и
// multiply (умножение). В комментариях напишите,
// почему эти функции чистые.

// ничего не выводят на экран,
// не использует глобальные переменные,
// всегда возвращают одинаковое значение с одинаковыми аргументами

function add(x, y) {
  return x + y;
}
add(8, 4);
  
function subtract(x, y) {
  return x - y;
}
subtract(8, 4);
  
function divide(x, y) {
  return x / y;
}
divide(8, 4);
  
function multiply(x, y) {
  return x * y;
}
multiply(8, 4);


// Напишите функцию addCreator 
//   const add = addCreator(5);
//   console.log(add(5)); // 10
//   console.log(addCreator(1)(3)); // 4


function addCreator (step = 1) {
	return function(innerStep = 1) {
		return step + innerStep;
	}
}

const add = addCreator(5);
console.log(add(5));
console.log(addCreator(1)(3));	


// Создайте свой счетчик, который будет принимать шаг
// счетчика. То есть ваш counterCreater должен
// принимать аргумент step и изменять index на step.
// Step должен иметь значение по умолчанию 2.
// Изначально index равен 0.	

	// let myCounter1 = counterCreater(-1);
	// console.log(myCounter1()); // -1
	// console.log(myCounter1()); // -2
	// let myCounter2 = counterCreater(4);
	// console.log(myCounter2()); // 4
	// console.log(myCounter2()); // 8
	// let myCounter3 = counterCreater();
	// console.log(myCounter3()); // 2
	// console.log(myCounter3()); // 4

function counterCreater (step = 2) {
	let index = 0;
	return function() {
		return index += step;
	}
}

let myCounter1 = counterCreater(-1);

console.log(myCounter1());
console.log(myCounter1());

let myCounter2 = counterCreater(4);

console.log(myCounter2());
console.log(myCounter2());

let myCounter3 = counterCreater();

console.log(myCounter3());
console.log(myCounter3());