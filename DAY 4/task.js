/*let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(num) {
  if (num < 2) return false; 
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; 
  }
  return true;
}
let primes = [];
for (let i = 0; i < values.length; i++) {
  if (isPrime(values[i])) primes.push(values[i]);
}
console.log(primes);
*/


/*
let students = [
    { name: 'Lucky', score: 90 },
    { name: 'Dhileep', score: 80 },
    { name: 'Harley', score: 95 },
    { name: 'David', score: 85 }
  ];
  
  let highestScore = students.reduce((max, student) => {
    return student.score > max.score ? student : max;
  }, { score: -Infinity });
  
  let studentsWithMarks = students.map(student => {
    return { ...student, marks: `${student.score}/100` };
  });
  
  console.log('Student with highest score:', highestScore);
  console.log('Students with marks:', studentsWithMarks);
  */

  /*
  let strings = ["lucky", "tirupati", "andrapradesh", "india"];
let longestString = strings.reduce(function(longest, current) {
  return current.length > longest.length ? current : longest;
}, "");

console.log(longestString);
*/

/*
let students = [
  { name: 'Lucky', score: 90 },
  { name: 'Dhileep', score: 80 },
  { name: 'Harley', score: 60 },
  { name: 'David', score: 85 }
];

let passedStudents = students.filter(student => {
  return (student.score / 100) * 100 >= 70;
});

console.log('Passed students:', passedStudents);
*/

/*
let numbers = [-7, 4, -6, 8, -10];
let positiveNumbers = numbers.map(number => Math.abs(number));
console.log(positiveNumbers);
*/

/*let strings = ["hello", "world", "javascript", "programming"];

let sum = strings.reduce(function(total, current) {
  return total + current.length;
}, 0);

// Output the sum to the console
console.log(sum);
*/

/*
let strings = ["lucky", "tirupati", "andrapradesh", "india"];
let upperStrings = strings.map(function(str) {
  return str.toUpperCase();
});
console.log(upperStrings);

*/


