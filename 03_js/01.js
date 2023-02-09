// function cutByLen(str, maxByte) {
//   for (b = i = 0; (c = str.charCodeAt(i)); ) {
//     b += c >> 7 ? 2 : 1;

//     if (b > maxByte) break;

//     i++;
//   }

//   return str.substring(0, i);
// }
// console.log(
//   cutByLen(
//     "이 글은 도커에 대해 1도 모르는 시스템 관리자나 서버 게발자를 대상으로 도커 전반에 대해 얕고 넓은 지식을 담고있습니다. 도커가 등장한 배경과 도커의 역사, 그리고 도커의 핵심 개념인ㄴ",
//     80
//   )
// );
function Str_Cut(istr, size) {
  var tmp = 0,
    cnt = 0;

  var rtn = "";

  for (var x = 0; x < istr.length; x++) {
    tmp = istr[x].charCodeAt();

    if (127 < tmp) {
      cnt++;
    }

    cnt++;

    if (size <= cnt) {
      rtn = istr.substring(0, x);

      x = 100000;
    }
  }

  return rtn;
}
console.log(
  Str_Cut(
    "이 글은 도커에 대해 1도 모르는 시스템 관리자나 서버 게발자를 대상으로 도커 전반에 대해 얕고 넓은 지식을 담고있습니다. 도커가 등장한 배경과 도커의 역사, 그리고 도커의 핵심 개념인",
    80
  )
);
