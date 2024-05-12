'use strict';
function grade(studentId, grade) {
    this.studentId = studentId;
    this.grade = grade;
  }
let grade1 = new grade(66666, 6);
let grade2 = new grade(12345, 9);
let grade3 = new grade(66666, 8);
let grade4 = new grade(12345, 1);
let grades = [];
grades.push(grade1, grade2, grade3, grade4);
/*
let grades = [
	{ studentId: 66666, grade: 6 },
	{ studentId: 12345, grade: 9 },
	{ studentId: 66666, grade: 8 },
	{ studentId: 12345, grade: 1 },
]
*/
function Promedios(grades){
    let promedios = [];
    for(let i = 0; i < grades.length; i++){
        let promedio = 0;
        let cont = 0;
        let band = true;
        for(let j = 0; j < i; j++){
            if(grades[i].studentId == grades[j].studentId){
                band = false;
            }
        }
        if(band){
            promedio = grades[i].grade;
            cont = 1;
            for(let k = i+1; k < grades.length; k++){
                if(grades[i].studentId === grades[k].studentId){
                    promedio += grades[k].grade;
                    cont++;
                }
            }
            promedios.push({studentId: grades[i].studentId, grade: promedio/cont});
        }
       
    }
    return promedios;
}

let promedio = Promedios(grades);
for(let i = 0; i < promedio.length; i++){
    console.log("studentId:",promedio[i].studentId," promedio:",promedio[i].grade);
}
