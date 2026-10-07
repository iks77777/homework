const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];

users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
);

console.log(users);



function getAverageAge(users) {
  if (users.length === 0) return 0;

  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

const users1 = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
  { name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
];

console.log(getAverageAge(users1));

function getAllAdmins(users2) {
  return users2.filter(user2 => user2.isAdmin === true);
}

const users2 = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true }
];

const admins = getAllAdmins(users2);
console.log(admins);


function first(arr, n) {
  if (n === undefined) {
    return arr.length > 0 ? [arr[0]] : [];
  }
  if (n === 0) {
    return [];
  }

  const newArr = new Array(n);
  for (let i = 0; i < n; i++) {
    newArr[i] = arr[i];
  }
  return newArr;
}

console.log(first([10, 15, 33, 50, 14]));