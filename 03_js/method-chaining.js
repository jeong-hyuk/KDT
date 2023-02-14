// -> Hello
let helloTest = "H-e-l-l-o";
let helloTestArr = helloTest.split("-");
console.log(helloTestArr);

let reverseHelloTestArr = helloTestArr.reverse();
console.log(reverseHelloTestArr);

let helloStr = reverseHelloTestArr.join("");
console.log(helloStr);

let finalStr = helloTest.split("-").reverse().join("");
console.log(finalStr);

const obj = {
  arr: ["a", "b", "c"],
  number: 10,
};

let testStr = obj.arr?.reverse().join("");
console.log(testStr);
