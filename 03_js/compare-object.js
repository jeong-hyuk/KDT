const jack = {
  name: "김정혁",
  email: "jack1150@naver.com",
};
const kim = {
  name: "김정혁",
  email: "jack1150@naver.com",
};
console.log(jack === kim); //false
//주소값을 비교하기  때문에 false

console.log("----------------------");
const tetz = {
  name: "이효석",
  email: "xenosign@naver.com",
};
const tetzCopy = tetz;
tetzCopy.name = "tetz";
console.log(tetzCopy);
console.log(tetz);
console.log(tetz === tetzCopy); // TRUE
