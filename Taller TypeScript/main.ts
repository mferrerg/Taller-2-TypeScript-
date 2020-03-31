import { Course } from './course.js';

import { dataCourses } from './dataCourses.js';

import { dataStudents } from './dataStudents.js';

import { Student } from './student.js';

let coursesTbody: HTMLElement = document.getElementById('courses')!;
let studentTbody: HTMLElement = document.getElementById('student')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const btnfilterByCredits: HTMLElement = document.getElementById("button-filterByCredits")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const inputSearchBox2: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box2")!;
const inputSearchBox3: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box3")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


btnfilterByName.onclick = () => applyFilterByName();
btnfilterByCredits.onclick=()=> applyFilterByCredits();

renderCoursesInTable(dataCourses);
renderStudentInTable(dataStudents);

totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`


function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}
 
function renderStudentInTable(dato: Student[]): void {
  console.log('Desplegando datos');
  dato.forEach((dato) => {
    let trElement2 = document.createElement("tr");
    let trElement3 = document.createElement("tr");
    let trElement4 = document.createElement("tr");
    let trElement5 = document.createElement("tr");
    let trElement6 = document.createElement("tr");
    trElement2.innerHTML = `<td>Cédula </td><td>${dato.id}</td>`
    trElement3.innerHTML = `<td>Código </td><td>${dato.student_id}</td>`
    trElement4.innerHTML = `<td>Edad </td><td>${dato.age}</td>`
    trElement5.innerHTML = `<td>Dirección </td><td>${dato.address}</td>`
    trElement6.innerHTML = `<td>Telefono</td><td>${dato.phone}</td>`
    studentTbody.appendChild(trElement2);
    studentTbody.appendChild(trElement3);
    studentTbody.appendChild(trElement4);
    studentTbody.appendChild(trElement5);
    studentTbody.appendChild(trElement6);
  });
}
 
function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function applyFilterByCredits() { 
  let text1 = inputSearchBox2.value;
  let text2 = inputSearchBox3.value;
  text1 = (text1 == null) ? '' : text1;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByCredits(text1, text2, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}

function searchCourseByCredits(minKey: string, maxKey: string, courses: Course[]) {
  return minKey === '' || maxKey === ''? dataCourses : courses.filter( c => 
    (c.credits>=parseInt(minKey) && c.credits<=parseInt(maxKey)));
}

function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}