//INITTIAL STUDENT ARRAY
var students = [
    { id: 1, name: "ruba", age: 24 },
    { id: 2, name: "sohail", age: 23 },
    { id: 3, name: "safa", age: 26 },
];
//USING MAP
var studentNames = students.map(function (student) { return student.name; });
console.log("Students Names:", studentNames);
//USING FILTER
var youngStudent = students.filter(function (student) { return student.age < 25; });
console.log("young Student :", youngStudent);
