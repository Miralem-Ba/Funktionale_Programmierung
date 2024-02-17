//
const studentGrades = [ 
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
  ];

//
const gradeToFeedback = {
    a: 'Excellent Job',
    b: 'Nice Job',
    c: 'Well done',
    d: 'What happened',
    f: 'Not good'
  };

//
const getGradeLetter = (grade) => {
    if (grade >= 90) return 'a';
    else if (grade >= 80) return 'b';
    else if (grade >= 70) return 'c';
    else if (grade >= 60) return 'd';
    else return 'f';
  };