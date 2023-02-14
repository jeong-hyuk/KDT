let boxEl = document.querySelector(".orange");
console.log(boxEl);

let boxEl2 = document.querySelector("#skyblue");
console.log(boxEl2);

let listEl = document.querySelector("ul>li:nth-child(2)");
listEl.classList.add("orange");
console.log(listEl);

if (boxEl.classList.contains("orange")) {
  boxEl.classList.remove("orange");
}
console.log(boxEl);
