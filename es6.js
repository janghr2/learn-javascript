// logical operators

//*** 
// 관리자 페이지 접근 조건
// 1. 로그인된 상태일 것
// 2. role이 admin일 것 */


const user = {
  isloggedin: true,  // 로그인 여부에 대한 정보 
  role: "user"  // ["user", "guest", "admin"]
}


// 관리자 페이지 접근 체크
if(user.isloggedin && user.role === "admin") {
  // 관리자 페이지 접근 가능한 상태
console.log("✅관리자 페이지 접근 가능 ✅")
} else{console.log("🚫관리자 페이지 접근 불가🚫")
  // 관리자 페이지 접근 불가능한 상태
}


// 회원만 접근 가능한 페이지 체크 
//** *
// 조건1: 로그인된 상태인 경우
// or
// 조건2: role이 admin인 경우 */

if(user.isloggedin || user.role === "admin"){
// 페이지 접근 가능 영역
console.log("😁접근 가능한 페이지입니다.")
} else {
// 페이지 접근 불가능
console.log("😣접근 권한이 없는 페이지입니다.")

}

// not 연산자

if(!user.isloggedin){
// !를 쓰면 상태가 반대, 로그인 안 된 상태인 경우
console.log("😶‍🌫️로그인해주세요")
} else {console.log("환영합니다!")}

// 응용

const userage = 33;

const message = userage >= 18 ? "성인입니다." : "미성년자입니다."
console.log(message)

const message2 = user.isloggedin ? "환영합니다😊" : "로그인해주세요."
console.log("🚀 ~ message2:", message2)

const kiamembers2 = ["양현종", "김도영", "김선빈", "나성범", "이의리", "박민", "네일"]
console.log("🚀 ~ kiamembers2:", kiamembers2)

const copymembers = ["성영탁", ...kiamembers2]
console.log("🚀 ~ copymembers:", copymembers)

const copyuser = {...user, age: 33, isloggedin: false}
console.log("🚀 ~ user:", user)
console.log("🚀 ~ copyuser:", copyuser)
