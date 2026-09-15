// 조건문: 특정 조건에 따라 다르게 실행하는 구문
const score = 60;

if (score >= 60) {
  // 조건식ㅇ이 true인 경우 실행될 로직
  console. log("😁합격")

} else {console. log("😣블합격")}

// 삼항 연산자
score >= 60 ? console. log("😁합격!!") : console. log("😣블합격!!")

console. log(score >= 60 ? "합":"불")


let grade; // 등급표
if (score >= 90) { // 90 이상 A 
  
  grade = "A"
} else if (score >= 80){// 90미만 80 이상 B
  grade = "B"
  }
else if (score >= 70) {//80미만 70 이상 C
  grade = "C"

}
else {// 70 미만 D
  grade = "D"
}

console.log("🚀 ~ grade:", grade)


if (score === "60") {console. log('같음')} else {console. log('다름')}

const c = ""
console. log(!!c)

const userinput = "";
if(!userinput) {
// 앞에는 느낌표가 붙으면 사용자가 입력한 값이 없는 경우
  console. log("아이디를 입력해주세요")
}



console. log('끝')

