const Student = require('./Student');

const student1 = new Student("Rakoto", "Vao");



student1.addNote(10);
student1.addNote(10);
student1.addNote(12);
student1.addNote(50);

student1.getHightestScore();
student1.getLowestScore();
student1.isAdmitted();

console.log(student1);




