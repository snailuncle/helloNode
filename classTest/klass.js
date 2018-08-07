var student=require('./student')
var teacher=require('./teacher')

var add=function(teacherName,students){
  teacher.add(teacherName)
  students.forEach(studentName => {
    student.add(studentName)
  });
}


exports.add=add
