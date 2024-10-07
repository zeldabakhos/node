console.log("test")


// object

const courses = []

const student = {
    firstName: "Marie",
    age: 20,
    courses
}

student.age = 21
student.grade = "A"

courses.push("Math", "Physics", "Chemistry")

const foundCourse = courses.indexOf("Physics")

const firstCourse = courses.slice(0,2)

console.log(student)
console.log(foundCourse) 
console.log(firstCourse)