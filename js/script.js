"use strict";

// a = 15;
// console.log(a);

// let number = 5; // let это объявление переменной, number её имя, = знак присвоения, мы что-то кладем в нее в данном случае 5
// const leftBorderWidth = 1; // const задается один раз задали и она такой остается

// number = 10; // Мы изменяем значение переменной number
// console.log(number); // Выводим ее в консоль и вуаля значение изменилось на 10 вместо 5.

// const obj = { // это хитрость позволяющая изменить значение const
//     a: 50
// };

// obj.a = 10;

// console.log(obj); // Прямых const-ант не бывает

// console.log(name);
// var name = 'Ivan'; // Устаревший вариант

// name = 'Alex';

// {
//     let result = 50;
// }

// alert(5);
// [].push('a');

// let number = 4.6; // числовой тип данных

// console.log(-4/0);
// console.log('string' * 9); <== в числовом типе данных так делать нельзя

// const persone = '5'; // строчный тип данных

// const bool = true; // логический тип (boolean) true/false

  
// let und; Если в переменной нет значение в консоле будет undefined  
// console.log(und);

// const obj = { // Объект
//     name: 'John',
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name); // Способы обращение к объекту 
//  console.log(obj['name']);

//             0           1             2 
// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];  //Массив
// console.log(arr[0]); // Обращение к массиву нумерация с 0

// alert('hello'); // при входе посылаем сообщение 'hello'

// const result = confirm('Are you here?'); // confirm нужен для ответа на вопрос да или нет
// console.log(result);

// const answer = +prompt('Вам есть 18?', ''); // prompt для развернутого ответа на вопрос
// console.log(answer + 5);

// const answers = []; //Массив

// answers[0] = prompt('Как ваше имя?', ''); //Записываем в массив вопросы
// answers[1] = prompt('Как ваши дела??', '');
// answers[2] = prompt('Как ваше ничего?', '');

// console.log(typeof(answers)); // Typeof позволяет узнать что за тип данных 
// console.log(typeof(null)); // это ошибка официальна признана

// const category = 'toys'; //Это интерполяция

// console.log(`https://someurl.com/${category}/5`);

// const category = 'toys'; //Это конкатенация

// console.log('https://someurl.com/' + category + '/' + '5');

// const user = 'ДАРТ ВЕЙДЕР';

// alert(`Привет, ${user}`);

// console.log('darr' + ' - jobject');
// console.log(1 + +'15');
 
// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2); 
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