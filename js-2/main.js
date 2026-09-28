const number = "2";

if (number % 2 === 0) {
	console.log("Число чётное");
} else {
    console.log("Число нечётное");  
}


const  age = 35; 
const  discount = age < 18 ? 10 : (age >= 18 && age <= 65) ? 20  : 30;
  
console.log(discount);
  


let age_2 = 35;
let discount_2;

switch (true) {
  case age_2 < 18:
    discount_2 = 10;
    break;
  case age_2 >= 18 && age <= 65:
    discount_2 = 20;
    break;
  default: 
    discount_2 = 30;
    break;
}

console.log(discount_2);


let username = prompt('Введите имя пользователя:');
let password = prompt('Введите пароль:');

if ((username === 'admin' || username === 'user') && password === '123456') {
  console.log('Доступ разрешен');
} else {
  console.log('Доступ запрещен');
}

