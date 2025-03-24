//깊은 복사
//**스택(Stack)**에 저장
let a = 10;
let b = a; // 원시 값은 '값 자체'가 복사됨
b = 20;

console.log(a); // 10 (영향 없음)
console.log(b); // 20

//얕은 복사
//**힙(Heap)**에 저장
let obj1 = { value: 10 };
let obj2 = obj1; // '주소'만 복사됨 (얕은 복사)

obj2.value = 20; // obj2를 변경했지만 obj1도 영향을 받음

console.log(obj1.value); // 20
console.log(obj2.value); // 20

//구조분해 할당을 이용한 깊은복사
const dobj1 = { value: 10 };
const dobj2 = { ...obj1 }; // 깊은 복사

dobj2.value = 20;

console.log(dobj1.value); // 10 (영향 없음)
console.log(dobj2.value); // 20
