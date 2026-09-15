// 배열은 순서를 가진 데이터들의 집합

const daysofweeks = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"]
console.log("🚀 ~ daysofweeks:", daysofweeks)

const today = daysofweeks[1]

console.log("🚀 ~ today:", today)

// 내가 제일 좋아하는 요일 뽑아와서 콘솔에 찍기

const favoriteday = daysofweeks[4]
console.log("🚀 ~ favoriteday:", favoriteday)


const student = {
  name: "장혜린",
  MBTI: "ESFP",
  ismale: false,
  useai: ["chat GPT", "GEMINI", "claude"]
}
console. log("student", student)

const studentname =  student["name"]
console.log("🚀 ~ studentname:", studentname)

const studentai = student.useai
console.log("🚀 ~ studentai:", studentai, Array.isArray(studentai))



