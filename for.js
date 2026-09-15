console. log("hi")

// for문 
// 세가지 구성 요소: 초기화, 반복 조건식, 증감식

// let i = 0

for (let i = 0; i < 5; i++) {
  // 반복 실행될 로직
  console. log(`${i}번째 실행중`)
}

// console. log("i", i)

console. log("반복문 끝!")



const kiamembers = ["양현종", "김도영", "김선빈", "나성범", "이의리"]
console. log("kiamembers", kiamembers.length)
// 구석기 방식의 반복문ㅜㅜ
for (let i = 0; i < kiamembers.length; i++) {
  console. log(`${i}번째 멤버: ${kiamembers[i]}`)
}

// foreach문 > 배열일때만 쓸 수 있음
kiamembers.forEach((member, index) => {
  // 배열의 요소들을 순회하면서 반복 실행할 로직
  console.log(`${index}번째 멤버: ${member.toUpperCase()}`)
})
  

// 자주 사용되는 배열 함수
// map 기존 배열을 조작해서 새로운 배열을 리턴

const kiamembersk = ["양현종", "김도영", "김선빈", "나성범", "이의리", "박민", "네일"]

const emojimembers = kiamembersk.map((member) => `🐯${member}🐯`
)
console.log("🚀 ~ emojimembers:", emojimembers)

//filter: 배열 안의 요소들 중 특정 조건을 만족하는 요소들을 새로운 배열로 리턴
// 조건: 이름이 세 글자 이상인 멤버만 리턴
const filtermembers = kiamembersk.filter((member)=> member.length>=3 )
console.log("🚀 ~ filtermembers:", filtermembers)

//find: 배열안에 요소들 중 특정 조건을 만족하는 요소를 리턴함 (결과값이 복수인 경우, 조건에 부합하는 요소 중 가장 먼저 나오는 요소)

const findmembers = kiamembersk.find((member) => member.length>2 )
console.log("🚀 ~ findmembers:", findmembers)

// every, some: boolean type으로 리턴 / 배열안의 요소들 중 특정 조건을 만족하는 요소가 있는지 여부를 리턴함 . 있음 아니면 없음

// 조건: 이름이 세 글자 이상인 멤버만 리턴


// some: 배열의 요소들 중 하나라도 조건을 만족하면 true 
const somemembers = kiamembersk.some((member)=> member.length>=3 )
console.log("🚀 ~ somemembers:", somemembers)


// every: 배열의 요소 모두가 조건을 만족해야만 true
const everymembers = kiamembersk.every((member)=> member.length>=3 )
console.log("🚀 ~ everymembers:", everymembers)