console.log(myFunction()); // ✅ 정상 작동 (함수는 호이스팅됨)

function myFunction() {
  console.log(myVar); // ❗️ undefined (호이스팅 시 초기화 X), 함수선언으로 함수를 만들었기때문에 함수 호이스팅은 되지만 변수가 초기화 되지않았기때문에 변수값은 undefined가 된다
  var myVar = 10;
  return myVar;
}

//var의 경우 호이스팅: 선언만 올라감 (초기화 X)

//let과 const도 호이스팅은된다. 하지만 선언전에 호출하면 오류가 발생한다 이것을 TDZ (Temporal Dead Zone, 임시 사각지대) 라고 한다.
