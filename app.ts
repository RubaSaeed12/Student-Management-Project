//STUDENT MANAGEMENT
interface Student { 
name: string ;
id: number;
age: number;
}

//INITTIAL STUDENT ARRAY
let  students: Student [] = [
     { id: 1, name:"ruba", age: 24},
     { id: 2, name:"sohail", age: 23},
     { id: 3, name:"safa", age: 26},
];

//USING MAP
let studentNames: string[] = students.map(student => student.name)
console.log("Students Names:", studentNames);

//USING FILTER
let youngStudent: Student[] = students.filter(student => student.age < 25)
console.log("young Student :" , youngStudent) ;


