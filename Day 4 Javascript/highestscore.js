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
  