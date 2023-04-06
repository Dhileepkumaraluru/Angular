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
  