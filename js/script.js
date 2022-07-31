"use strict";
// alert("Я Javascript");
// let admin;
// let name = "John";
// admin = name;
// alert(admin);
// // console.log(1);

// const userName = prompt('Как тебя зовут?', '');
// alert(userName);

// a = 15;
// console.log(a);

// let number = 5; // let это объявление переменной, number её имя, = знак присвоения, мы что-то кладем в нее в данном случае 5
// const leftBorderWidth = 1; // const задается один раз задали и она такой остается

// number = 15; // Мы изменяем значение переменной number
// console.log(number); // Выводим ее в консоль и вуаля значение изменилось на 10 вместо 5.

// leftBorderWidth = 13;
// console.log(leftBorderWidth);

// const obj = { // это хитрость позволяющая изменить значение const
//     a: 50
// };

// obj.a = 13;

// console.log(obj); // Прямых const-ант не бывает

// console.log(name);
// var name = 'Evgeniy'; // Устаревший вариант


// name = 'Alex';

// {
//     let result = 50;
// }

// console.log(result);

// const vehicleBodyWidth = 5000;
// const vehicleBodyLength = 4000;

// console.log("Ширина кузова автомобиля: " + vehicleBodyWidth + ', длина: ' + vehicleBodyLength);




// ['verre', 'gfgfgfg', 'fdfdf'].map(item =>)

//snake_case
//UPPER_SNAKE_CASE
//Kebab-case
//PascalCase

// Request
// Data
// Response
// let a = 50,
//     b = 90;


// alert(5);
// [].push('a');

// let number = 5.3; // числовой тип данных

// console.log(-10/0);
// // console.log('string' * 9); <== в числовом типе данных так делать нельзя

// const user = `3`; // строчный тип данных

// const bool = false; // логический тип (boolean) true/false

  
// let underground; //Если в переменной нет значение в консоле будет undefined  
// console.log(underground);

// const persone = {
//     name: "Evgeniy", //свойства записаны в формате ключ:значение
//     age: 25,
//     isMarried: false
// };

// console.log(persone.age);// Способы обращение к объекту 
//  console.log(persone['name']);

//             0           1             2 
// let arr = ['plum.png', 'orange.jpeg', 6,  'apple.bmp', {}, []];  //Массив свойства записаны в формате ключ:значение
// console.log(arr[2]); // Обращение к массиву нумерация с 0

// const arr = ['a', 'b', 'c']; //так делать лучше не надо

// arr[10] = '1234';

// console.log(arr);

// const arrObj = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     abc: {
//         df: [{}, {}],
//         def: {

//         }
//     }
// };
// const b = 'b';


// arrObj.b = '9876'; //Добавление новых свойств в объект
// arrObj['b'] = '9876'; //Добавление новых свойств в объет
// arrObj[b] = '9876'; //изменять их значение
// // console.log(arr[1]);
// console.log(arrObj['b']);
// console.log(arrObj.b);

// // const obj = {a: 1, b: 2};
// const persone = {
//     'Evgeniy': 5000000,
//     'Ivan': 500
// };


// alert('hello'); // при входе посылаем сообщение 'hello'

// const result = confirm('Ты долбаеб?');
// console.log(result);

// // const result = confirm('Are you here?'); // confirm нужен для ответа на вопрос да или нет
// // console.log(result);

// const answer = +prompt('Вам есть 18?', '18'); // prompt для развернутого ответа на вопрос
// console.log(answer + 5);

// const answers = []; //Массив

// answers[0] = prompt('Ты гей или Dungeon Master?', ''); //Записываем в массив вопросы
// answers[1] = prompt('Как ваши дела??', '');
// answers[2] = prompt('Как ваше ничего?', '');

// console.log(typeof(answers)); // Typeof позволяет узнать что за тип данных 
// console.log(typeof(null)); // это ошибка официальна признана

// const category = 'toys'; //Это интерполяция

// console.log(`https://someurl.com/${category}/5`);

// const category = 'toys'; //Это конкатенация

// console.log(`https://someurl.com/${category}/5`); //Это  конкатенация

// const user = 'Энакин Скайуокер';

// alert(`Привет, ${user}`);

// console.log(4 + ' - object');
// console.log(1 + +'15');
 
let incr = 10,
    decr = 10;

// ++incr;
// --decr;

console.log(++incr);
console.log(--decr);

console.log(8%2); 
console.log(2 + 2 * 2 !== '6');

const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose);

let persone = "1" + "master";
console.log(persone);


let apersone = 3;
let zpersone = 34;

let country = 3 - (apersone = zpersone + 3);
console.log(country);

// let a, b, c;

// c = 2 + 2;
// b = c;
// a = b;

// console.log(a, b, c);

let persz = 79 + 10 * 2;

persz += 5;
persz -= 4;
console.log(persz);

let n = 25,
    couner = 20;

let ar = ++couner + ++n;

console.log(ar);

// let aaz = 1 + 2, 3 + 4;

// console.log( aaz );

// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?

let adasd = "";

adasd = + 1;
console.log(adasd);

let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

alert(a + b); // 12

// console.log(2 + 2 * 2 !== 6);

// console.log(2 + 2 * 2 != 8); //6 не равно 8 != оператор неравенства

// console.log(2 + 2 * 2 != 6); //6 не равно 6 != оператор неравенства

// console.log(2 + 2 * 2 !== '8'); //6 не равно 8 != оператор неравенства


// = знак присваивания, мы присваиваем значение переменной выше
// == знак равенства, если мы хотим что-то сравнить можно 'сравнить числовой тип с числом в строке'
// === знак сторогого равенства если хотим сравнить строгого число с типом данных.  <== здесь это не сработает

// && значит 'и' работает тогда только если два или более выражения являются правдой
// || значит 'или' работает тогда только если один из вариантов будет правдой 'или это правда или эта правда'


// const isChecked = false,
//       isClose = false;

// console.log(isChecked || !isClose);

// if (4 == 9) { /// Условие не выполнено т.к 4 не равно 9
//     console.log('ok!');
// } else { // если условие не выполнено то выведим ошибку в консоле
//     console.log('error!');
// }

// const num = '50';

// if (num < 49) {
//     console.log('error!');
// } else if (num > 100) {
//     console.log('много');
// } else {
//     console.log('ok!')
// }

// switch (num) { /// switch это модификации if которая содержит несколько проверок и условий
//     case '49': // если переменная num равна 49 то мы выполним какое-то действие если нет идем дальше
//         console.log('неверно!');
//         break;
//     case '100':
//         console.log('неверно!');
//         break;
//     case '50': 
//         console.log('правда!');
//         break;
//     default:
//         console.log('не в этот раз!');
//         break;
// }

// (num == 50) ? console.log('ok!') : console.log('error'); /// ? тернарный оператор 
// если условие выполняется дальше идет какое-то действие тернарным его называют потому что выполняются 3 аргумента
// это единственный оператор который есть в js

// 4+4 // это бинарный аргумент +4 унарный плюс

// let num = 50;

// while (num <= 55) { // пока что это условие выполняется мы будем делать какие-то действия
//     console.log(num); /// пока наше условие не выполнено выполняй таки-ето действие
//     num++; // в нашем случае увеличивать на 1
// } 

// do { // сделай пожалуйста что-то
//     console.log(num);
//     num++;
// }
// while (num < 55); // проверяем выполнение условия

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }