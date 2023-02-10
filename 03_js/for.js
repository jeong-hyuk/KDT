// for (let i = 2; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(i + " * " + j + " = " + i * j);
//   }
//   console.log("--------------");
// }

// let a = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0 || i % 5 == 0) {
//     a += i;
//   }
// }
// console.log(a);

// let i = 2;
// while (i < 10) {
//   let j = 1;
//   while (j < 10) {
//     console.log(i + " * " + j + " = " + i * j);
//     j++;
//   }
//   i++;
// }

// let sum = 0;
// for (let i = 1; i <= 1000; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

function tri(a, b) {
  return (a * b) / 2;
}
console.log(tri(3, 4));

function cir(a) {
  return Number((Math.PI * a ** 2).toFixed(2));
}
console.log(cir(3));

function pytha(a, b) {
  return a ** 2 + b ** 2;
}
console.log(Math.sqrt(pytha(3, 4)));

let days = ["월", "화", "수"];
days.push("목");
console.log(days);
