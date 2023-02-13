const kdt = ["성희", "재연", "계환", "범석"];

kdt.push("정혁");
console.log(kdt);

kdt.pop();
console.log(kdt);

kdt.unshift("정혁");
console.log(kdt);

kdt.shift();
console.log(kdt);

for (let i = 0; i < kdt.length; i++) {
  console.log(kdt[i]);
}
