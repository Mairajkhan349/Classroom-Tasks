 //                            //   Assignment 4: Student List Organizer
//  Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?

console.log("\n\t\t\t\tAssignment 4: Student List Organizer\t\t\n");

type Student = {
    name: string;
    senior: boolean;
    assignments: boolean;
}
let students: Student[] = [
    { name: "Sartaj", senior: true, assignments: true },
    { name: "Sardar", senior: false, assignments: false },
    { name: "Jeelani", senior: true, assignments: true },
    { name: "Meer", senior: false, assignments: false },
];
console.log("Original Student List: ");
console.log(students);
console.log("\nUpdated Student List(whose assignments are completed): ");
students = students.filter(student => student.assignments);
console.log(students);