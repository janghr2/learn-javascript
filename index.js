
console.log("hello js")
// 주석
// 변수: 값을 저장하는 이름을 가진 공간 
// const username = "장혜린";
let username = "장혜린";

console. log("username", username)

username = "김도영";


console. log("username", username)

const num = 10;//숫자
console.log("🚀 ~ num:", num, "num type", typeof num)

const text = "안녕하세요" 
console.log("🚀 ~ text:", text)

const isDarkMode = true; 
console.log("🚀 ~ isDarkMode:", isDarkMode)
console.log("🚀 ~ isDarkMode:", typeof isDarkMode)

const empty = null;
console.log("🚀 ~ empty:", empty, typeof empty)

let userage;
console.log("🚀 ~ userage:", userage)

/** *
 * 함수: 특정 기능을 수행하도록 만든 코드 조각
 * 
 */
// 함수를 정의한다, 선언한다 
// function greeting () {
// // 실행할 로직
// console. log(`${username}님, 반갑습니다! ${userage}세이시군요.`)

// // console. log(username + "님, 반갑습니다!" + userage + "세 이시군요.")
// }

// 화살표 함수로 변환
const greeting = (studentname, usermbti) => {
 // 실행할 로직
console. log(`${studentname}님, 반갑습니다!.`)
console. log(`MBTI는 ${usermbti}이시군요.`)
}

// 함수를 실행한다, 호출한다
greeting(studentname = "장혜린", usermbti = "esfp")
greeting("KIM D.Y", "isfp")

// 미션: "프론트엔드부터 만드는 AI챗봇 수강생 ???입니다."
const myname = "장혜린";
const mission = () => {
  console. log(`프론트엔드부터 만드는 AI챗봇 수강생 ${myname}입니다.`)
}

mission()

const mission2 = () => {
  console. log(`프론트엔드부터 만드는 AI챗봇 수강생 jang입니다.`)
}
mission2()
1



// 결과값 반환-
const add = (num1, num2) => {
  return num1 + num2 

}

const doublesum = (num) => {
console.log("🚀 ~ doublesum ~ num:", num)
return num * 2
  console. log("hello")
}

const sum = add(10, 20)
console.log("🚀 ~ sum:", sum)

console. log ("doublesum", doublesum(sum))


//console. log("num", num)