for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue; 
  }
  console.log(i);
}

const input = prompt('Введите число для вычисления факториала:');
const n = Number(input);

if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
  console.log('Пожалуйста, введите целое неотрицательное число.');
} else {
  let factorial = 1;

  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }

  console.log(`${n}! = ${factorial}`);
}

